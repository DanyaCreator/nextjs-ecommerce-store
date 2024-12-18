import { Category, ProductImage, Material, Size } from '@/shared/model';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: ProductImage[];
  inStock: boolean;
  onSale: boolean;
  sale: number;
  category: Category;
  material: Material;
  size: Size;
  weight: number;
};
