import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import supabase from "../../services/supabaseClient";
import { addFavorite, removeFavorite } from "../../services/favoritesService";
import type { AppDispatch } from "../../app/store";
import type { Product } from "../../type/type";

interface LikesState {
  items: Product[];
}

/**
 * Alterna un producto en favoritos
 * - Si no hay usuario logueado: solo localStorage
 * - Si hay usuario logueado: intenta guardar en Supabase + localStorage
 */
export const toggleLikeAsync =
  (product: Product) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (user) {
        // Usuario logueado - intenta sincronizar con Supabase
        console.log("👤 Usuario logueado: sincronizando...");

        // Chequear si ya existe
        const { data: existingFavorite, error: checkError } = await supabase
          .from("Favorites")
          .select("id")
          .eq("user_id", user.id)
          .eq("product_id", product.id)
          .maybeSingle();

        // Si la tabla no existe o hay otro error, simplemente continuar
        if (checkError) {
          console.log("ℹ️ Tabla Favorites no disponible, guardando localmente");
        } else if (existingFavorite) {
          // Ya existe - eliminar
          await removeFavorite(user.id, product.id);
        } else {
          // No existe - agregar
          await addFavorite(user.id, product.id);
        }
      } else {
        console.log("ℹ️ No hay usuario logueado, guardando solo localmente");
      }

      // Actualizar Redux y localStorage SIEMPRE
      dispatch(toggleLike(product));
    } catch (error) {
      console.error("❌ Error toggling like:", error);
      // Aún así actualizar localmente
      dispatch(toggleLike(product));
    }
  };

const storedLikes = localStorage.getItem("likedProducts");

const initialState: LikesState = {
  items: storedLikes ? JSON.parse(storedLikes) : [],
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        console.log("❌ Producto removido de favoritos (local)");
      } else {
        state.items.push(action.payload);
        console.log("✅ Producto agregado a favoritos (local)");
      }

      localStorage.setItem("likedProducts", JSON.stringify(state.items));
    },

    setLikes: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      localStorage.setItem("likedProducts", JSON.stringify(state.items));
    },

    clearLikes: (state) => {
      state.items = [];
      localStorage.removeItem("likedProducts");
    },
  },
});

export const { toggleLike, setLikes, clearLikes } = likesSlice.actions;
export default likesSlice.reducer;
