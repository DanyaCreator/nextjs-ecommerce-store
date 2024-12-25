import axios from 'axios';

import { Billboard, DEFAULT_API_URL } from '@/shared/model';

export const getBillboards = async () => {
  try {
    const billboards = await axios.get<Billboard[]>(
      `${DEFAULT_API_URL}/billboards`
    );

    if (!billboards.data) return;

    return billboards.data;
  } catch (error) {
    console.error(error, 'ERROR: GET_BILLBOARDS');
    return;
  }
};
