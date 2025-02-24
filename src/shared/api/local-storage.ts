import { Cart, Product } from '@/shared/model';

export const getCart = (): Cart => {
  const cart = localStorage.getItem('cart');

  if (!cart) return { products: [] };

  return JSON.parse(cart);
};

export const addToCart = (product: Product) => {
  const cart = getCart();

  if (!cart) {
    localStorage.setItem('cart', JSON.stringify({ cart: [] }));
    return;
  }

  if (cart.products.find((x) => x.id === product.id)) {
    // TODO Condition for adding a recurring product
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

export const calculateTotal = (products: Product[]) => {
  let sum = 0;

  for (const product of products) {
    if (product.sale > 0)
      sum += product.price - (product.sale / 100) * product.price;
    else sum += Number(product.price);
  }

  return sum.toFixed(2);
};
