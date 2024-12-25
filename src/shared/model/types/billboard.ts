import { Product } from '@/shared/model';

export type Billboard = {
  billboardId: string;
  productId: string;
  label: string;
  imageUrl: string;
  product: Product;
};
