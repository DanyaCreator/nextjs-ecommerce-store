import { FilterFormFields } from '@/shared/model';

export const defaultFilter: FilterFormFields = {
  name: '',
  prices: { min: 0, max: 50 },
  categories: [],
  materials: [],
  sizes: [],
  onSale: false,
  inStock: false,
  isFiltering: false,
};
