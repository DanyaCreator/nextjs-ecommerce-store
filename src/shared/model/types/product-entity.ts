import { Category, ImageEntity, Material, Size } from '@/shared/model';

export type ProductEntity = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: ImageEntity[];
  inStock: boolean;
  onSale: boolean;
  sale: number;
  category: Category;
  material: Material;
  size: Size;
  weight: number;
};
