import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
}

interface LikesState {
  items: Product[];
}

const storedLikes = localStorage.getItem("likedProducts");
const initialState: LikesState = {
  items: storedLikes ? JSON.parse(storedLikes) : [],
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
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
