import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  images: string[];
}

interface LikesState {
  items: Product[];
}

const initialState: LikesState = { items: [] };

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<Product>) {
      const exists = state.items.find(p => p.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter(p => p.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
