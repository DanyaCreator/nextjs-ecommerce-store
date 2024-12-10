import axios from 'axios';
import * as z from 'zod';

import { DEFAULT_API_URL } from '@/shared/model';
import { Review, ReviewFormSchema } from '../model';

export const postReview = async (
  productId: string,
  data: Omit<z.infer<typeof ReviewFormSchema>, 'saveName'>
) => {
  try {
    const reviews = await axios.post<Review[]>(
      `${DEFAULT_API_URL}/products/${productId}/reviews`,
      data
    );

    if (!reviews.data) return;

    return reviews.data;
  } catch (e) {
    console.error(e);
    return;
  }
};
