export type FilterFormFields = {
  name: string;
  categories?: string[];
  materials?: string[];
  sizes?: number[];
  prices: { min: number; max: number };
  inStock: boolean;
  onSale: boolean;
  isFiltering: boolean;
};
