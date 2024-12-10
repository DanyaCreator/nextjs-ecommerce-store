import { ImageEntity } from '@/shared/model';

export type ProductEntity = {
  id?: number;
  name: string;
  price: number;
  images: ImageEntity[];
  isFeatured: boolean;
  isArchived: boolean;
};
