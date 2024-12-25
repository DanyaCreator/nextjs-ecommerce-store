import axios from 'axios';

import { DEFAULT_API_URL, Product } from '@/shared/model';

export const getProduct = async (productId: string) => {
  try {
    const product = await axios.get<Product>(
      `${DEFAULT_API_URL}/products/${productId}`
    );

    if (!product.data) return;

    return product.data;
  } catch (error) {
    console.error(error, 'ERROR: GET_PRODUCT');
    return;
  }
};
