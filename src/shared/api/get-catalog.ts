import axios from 'axios';

import { DEFAULT_API_URL, Product } from '@/shared/model';

export const getCatalog = async () => {
  try {
    const products = await axios.get<Product[]>(
      `${DEFAULT_API_URL}/products`
    );

    if (!products.data) return;

    return products.data;
  } catch (error) {
    console.log(error, 'ERROR: GET_CATALOG');
    return;
  }
};
