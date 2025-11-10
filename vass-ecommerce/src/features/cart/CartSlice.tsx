import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  quantity: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(p => p.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          price: Number(action.payload.price),
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    },

    // 🔼 aumenta cantidad
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item) item.quantity += 1;
    },

    // 🔽 disminuye cantidad
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    // 🧩 actualiza cantidad directamente (por ejemplo desde un input)
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find(p => p.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity); // evita 0 o negativos
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
