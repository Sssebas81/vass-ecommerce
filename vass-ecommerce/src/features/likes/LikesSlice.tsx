import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import supabase from "../../services/supabaseClient";
import type { AppDispatch } from "../../app/store";
import type { Product } from "../../type/type";

interface LikesState {
  items: Product[];
}

/**
 * Alterna un producto en favoritos
 * - Si no hay usuario logueado: solo localStorage
 * - Si hay usuario logueado: guarda/elimina en Supabase (tabla Favorites)
 */
export const toggleLikeAsync =
  (product: Product) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (user) {
        console.log("👤 Usuario logueado: sincronizando con Supabase...");

        // Verificar si ya existe en favoritos (comparando por product.id dentro del campo JSON)
        const { data: existing, error: checkError } = await supabase
          .from("Favorites")
          .select("*")
          .eq("user_id", user.id)
          .eq("product->>id", product.id) // <-- JSON Path
          .maybeSingle();

        if (checkError) {
          console.error("⚠️ Error verificando favoritos:", checkError);
        }

        if (existing) {
          // Eliminar favorito de Supabase
          console.log("❌ Eliminando favorito de Supabase...");
          await supabase
            .from("Favorites")
            .delete()
            .eq("id", existing.id);
        } else {
          // Insertar favorito en Supabase (product completo en JSON)
          console.log("✅ Guardando favorito en Supabase...");
          await supabase.from("Favorites").insert({
            user_id: user.id,
            product: product,
          });
        }
      } else {
        console.log("ℹ️ No hay usuario logueado, guardando solo localmente");
      }

      // Actualiza redux + localstorage SIEMPRE
      dispatch(toggleLike(product));
    } catch (error) {
      console.error("❌ Error toggling like:", error);
      dispatch(toggleLike(product)); // fallback siempre local
    }
  };

// ---------------------------
//  LOCAL STORAGE
// ---------------------------
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
