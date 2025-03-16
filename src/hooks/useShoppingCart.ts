import { create } from 'zustand';

type Store = {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
};

const saveArrayToLocalStorage = (array: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(array));
};

const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const useShoppingCart = create<Store>((set) => ({
  cart: loadCartFromLocalStorage(),

  addToCart: (cartItem: CartItem) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((item) => item.id === cartItem.id);
      const newCart = [...state.cart];

      if (existingItemIndex >= 0) {
        newCart[existingItemIndex] = cartItem;
      } else {
        newCart.push(cartItem);
      }

      saveArrayToLocalStorage(newCart);
      return { cart: newCart };
    }),

  removeCartItem: (cartItem: CartItem) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== cartItem.id);
      saveArrayToLocalStorage(newCart);
      return { cart: newCart };
    }),
}));
