import axios from 'axios';

import { Category, DEFAULT_API_URL } from '@/shared/model';

export const getCategories = async () => {
  try {
    const categories = await axios.get<Category[]>(
      `${DEFAULT_API_URL}/categories`
    );

    if (!categories.data) return;

    return categories.data;
  } catch (error) {
    console.error(error, 'ERROR: GET_CATEGORIES');
    return;
  }
};
