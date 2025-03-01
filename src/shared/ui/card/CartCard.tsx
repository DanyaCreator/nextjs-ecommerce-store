import Image from 'next/image';
import { Material, Size } from '@/shared/model';
import { CountButton, DeleteButton } from '@/shared/ui/buttons';

type CartCardProps = {
  name: string;
  price: number;
  material: Material;
  size: Size;
  image: string;
  sale: number;
  remove: () => void;
};

export const CartCard = ({
  name,
  price,
  material,
  size,
  image,
  sale,
  remove,
}: CartCardProps) => {
  return (
    <article
      className={
        'flex justify-between pb-[40px] mb-[40px] border-b-2 border-gray-light'
      }>
      <div className={'w-[136px] relative aspect-square'}>
        <Image src={image} alt={'product'} fill={true} objectFit={'contain'} />
      </div>
      <div className={'flex flex-col'}>
        <span className={'mb-[14px]'}>
          {name.split(' ').slice(0, 3).join(' ')}
        </span>
        <span className={'text-gray-dark'}>
          {material.value} / {size.value}
        </span>
        <span className={'text-accent'}>
          $ {(price - (sale / 100) * price).toFixed(2)}
        </span>
      </div>
      <CountButton />
      <DeleteButton onClick={remove} />
    </article>
  );
};
