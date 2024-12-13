import { ProductEntity } from '@/shared/model';

export type BillboardEntity = {
  id: string;
  label: string;
  imageUrl: string;
  product: ProductEntity;
};
