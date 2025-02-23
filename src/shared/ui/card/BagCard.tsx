import Image from 'next/image';
import { Material, Size } from '@/shared/model';
import { DeleteButton } from '@/shared/ui/buttons';

type BagCardProps = {
  onClose: () => void;
  name: string;
  price: number;
  material: Material;
  size: Size;
  image: string;
};

export const BagCard = ({
  name,
  price,
  material,
  size,
  image,
  onClose,
}: BagCardProps) => {
  return (
    <article className={'flex gap-[8px]'}>
      <div className={'w-1/2 relative aspect-square'}>
        <Image src={image} alt={'product'} fill={true} objectFit={'contain'} />
      </div>
      <div className={'text-[14px] flex flex-col justify-between'}>
        <div className={'flex flex-col'}>
          <span>{name.split(' ').slice(0, 3).join(' ')}</span>
          <span className={'text-gray-dark'}>
            {material.value} / {size.value}
          </span>
          <span className={'text-accent'}>$ {price}</span>
        </div>
        {/*TODO Quantity tools */}
        <div className={'text-gray-dark flex gap-[8px]'}>
          <span>QTY:</span>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <DeleteButton onClick={onClose} />
    </article>
  );
};
