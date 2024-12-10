import { getCategories } from '@/shared/api/get-categories';
import { getMaterials } from '@/shared/api/get-materials';
import { getSizes } from '@/shared/api/get-sizes';
import { Category, Material, Size } from '@/shared/model';

export const getFilterEntities = (): Promise<
  [Category[], Size[], Material[]] | null
> => {
  const categories = getCategories();
  const sizes = getSizes();
  const materials = getMaterials();

  return Promise.all([categories, materials, sizes])
    .then(([categories, materials, sizes]) => {
      if (!categories || !materials || !sizes) return null;

      return [categories, sizes, materials] as [Category[], Size[], Material[]];
    })
    .catch(() => {
      return null;
    });
};
