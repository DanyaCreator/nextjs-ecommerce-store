import axios from 'axios';

import { DEFAULT_API_URL, Size } from '@/shared/model';

export const getSizes = async () => {
  try {
    const sizes = await axios.get<Size[]>(`${DEFAULT_API_URL}/sizes`);

    if (!sizes.data) return;

    return sizes.data;
  } catch (error) {
    console.error(error, 'ERROR: GET_SIZES');
    return;
  }
};
