import { createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"; 

interface CartItem {
  id: number;
  name: string;
  price: number;
  displayPrice?: string;
  quantity: number;
  images: string[];
}

interface CartState {
  items: CartItem[];
}

const storedCart = localStorage.getItem("cartItems");
const initialState: CartState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items)); 
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items)); 
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity = Math.max(action.payload.quantity, 1);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items)); // ✅ guardar
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
