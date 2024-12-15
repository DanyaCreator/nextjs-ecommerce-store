import { getMaterials } from '@/shared/api';
import { getCategories } from '@/shared/api';

import { Category, Material } from '@/shared/model';

export const getFilterEntities = (): Promise<
  [Category[], Material[]] | null
> => {
  const categories = getCategories();
  const materials = getMaterials();

  return Promise.all([categories, materials])
    .then(([categories, materials]) => {
      if (!categories || !materials) return null;

      return [categories, materials] as [Category[], Material[]];
    })
    .catch(() => {
      return null;
    });
};
