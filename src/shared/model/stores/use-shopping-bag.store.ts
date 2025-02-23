import { create } from 'zustand';

type ShoppingBagStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useShoppingBagStore = create<ShoppingBagStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
