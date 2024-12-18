import axios from 'axios';

import { DEFAULT_API_URL, Material } from '@/shared/model';

export const getMaterials = async () => {
  try {
    const materials = await axios.get<Material[]>(
      `${DEFAULT_API_URL}/materials`
    );

    if (!materials.data) return;

    return materials.data;
  } catch (error) {
    console.error(error, 'ERROR: GET_MATERIAL');
    return;
  }
};
