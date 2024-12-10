import { Category, Material, Size } from '@/shared/model';

export type FilterFormFields = {
  name: string;
  categories: Category[];
  materials: Material[];
  sizes: Size[];
  prices: { min: number; max: number };
  inStock: boolean;
  onSale: boolean;
  isFiltering: boolean;
};
