import axios from 'axios';

import { DEFAULT_API_URL, ProductEntity } from '@/shared/model';

export const getProducts = async () => {
  try {
    const products = await axios.get<ProductEntity[]>(
      `${DEFAULT_API_URL}/products`
    );

    if (!products.data) return;

    return products.data;
  } catch (error) {
    console.log(error, 'ERROR: GET_PRODUCTS');
    return;
  }
};
