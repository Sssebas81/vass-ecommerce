import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import supabase from "../../services/supabaseClient";
import { addFavorite, removeFavorite } from "../../services/favoritesService";
import type { AppDispatch } from "../../app/store";

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
}

interface LikesState {
  items: Product[];
}

export const toggleLikeAsync =
  (product: Product) => async (dispatch: AppDispatch) => {
    const { data } = await supabase.auth.getUser();
    const user = data.user;

    if (!user) return dispatch(toggleLike(product)); // solo local si no hay login

    dispatch(toggleLike(product)); // actualiza Redux primero

    // 🔥 Chequear correctamente si ya existe en Supabase
    const { data: favoriteExists } = await supabase
      .from("Favorites")
      .select("*")
      .eq("user_id", user.id)
      .eq("product_id", product.id)
      .maybeSingle();

    if (favoriteExists) {
      await removeFavorite(user.id, product.id);
    } else {
      await addFavorite(user.id, product.id);
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
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem("likedProducts", JSON.stringify(state.items));
    },

    clearLikes: (state) => {
      state.items = [];
      localStorage.setItem("likedProducts", JSON.stringify(state.items));
    },
  },
});

export const { toggleLike, clearLikes } = likesSlice.actions;
export default likesSlice.reducer;
