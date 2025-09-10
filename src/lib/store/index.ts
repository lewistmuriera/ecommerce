import { create } from 'zustand';
import { Product } from '../db/schema';

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setProducts: (products: Product[]) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  products: [],
  
  addToCart: (product: Product) => {
    const { cart } = get();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      set({
        cart: cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        cart: [...cart, { ...product, quantity: 1 }]
      });
    }
  },
  
  removeFromCart: (productId: string) => {
    set({
      cart: get().cart.filter(item => item.id !== productId)
    });
  },
  
  updateQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    
    set({
      cart: get().cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    });
  },
  
  clearCart: () => {
    set({ cart: [] });
  },
  
  setProducts: (products: Product[]) => {
    set({ products });
  },
}));