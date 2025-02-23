import { Product } from '@/shared/model';

type Cart = {
  products: Product[];
};

export const getCart = (): Cart => {
  const cart = localStorage.getItem('cart');

  if (!cart) return { products: [] };

  return JSON.parse(cart);
};

// TODO Condition for adding a recurring product
export const addToCart = (product: Product) => {
  const cart = getCart();

  if (!cart) {
    localStorage.setItem('cart', JSON.stringify({ cart: [] }));
    return;
  }

  if (cart.products.find((x) => x.id === product.id)) {
    return;
  }

  cart.products.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (id: string) => {
  const cart = getCart();

  cart.products = cart.products.filter((el) => el.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
};
