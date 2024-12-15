import { ProductEntity } from '@/shared/model';

export type BillboardEntity = {
  billboardId: string;
  productId: string;
  label: string;
  imageUrl: string;
  product: ProductEntity;
};
