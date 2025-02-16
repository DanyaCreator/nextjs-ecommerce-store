import { create } from 'zustand';

type ShoppingBagStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useShoppingBagStore = create<ShoppingBagStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
    console.log('opened');
  },
  onClose: () => {
    set({ isOpen: false });
    console.log('closed');
  },
}));
