import axios from 'axios';

import { DEFAULT_API_URL } from '@/shared/model';
import { Review } from '../model';

export const getReviews = async (productId: string) => {
  try {
    const reviews = await axios.get<Review[]>(
      `${DEFAULT_API_URL}/products/${productId}/reviews`
    );

    if (!reviews.data) return;

    return reviews.data;
  } catch (e) {
    console.error(e);
    return;
  }
};
