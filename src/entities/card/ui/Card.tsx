'use client';

import { useSpring, animated } from '@react-spring/web';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { dmSans } from '@/shared/assets/fonts';
import { buttonTexts } from '@/shared/assets/texts';

type CardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  onSale: boolean;
  sale: number;
};

export const Card = ({
  id,
  name,
  price,
  image,
  inStock,
  onSale,
  sale,
}: CardProps) => {
  const router = useRouter();

  const [{ y }, api] = useSpring(() => ({
    y: 0,
  }));

  return (
    <article className={'flex flex-col justify-between'}>
      <div
        className='relative rounded-lg cursor-pointer overflow-hidden'
        onMouseEnter={() => api({ y: -65 })}
        onMouseLeave={() => api({ y: 0 })}
        onClick={() => router.push(`/${id}`)}>
        {onSale && (
          <span
            className={`${dmSans.className} absolute top-[16px] left-[16px] bg-accent p-1.5 rounded text-white text-[12px]`}>
            -{sale}%
          </span>
        )}
        {!inStock && (
          <span
            className={`${dmSans.className} absolute top-[16px] left-[16px] bg-accent p-1.5 rounded text-white text-[12px]`}>
            Sold out
          </span>
        )}
        <Image src={image} alt={'product'} width={400} height={400} />
        <animated.div
          style={{ y }}
          className='absolute flex bottom-[-65px] w-full h-[65px] bg-white-transparent'>
          <span
            className={`${dmSans.className} m-auto text-body-large font-bold text-black`}>
            {buttonTexts.addToCart}
          </span>
        </animated.div>
      </div>
      <div>
        <h3 className={`${dmSans.className} mt-6`}>{name}</h3>
        <h4 className={`${dmSans.className} mt-4 text-accent`}>$ {price}</h4>
      </div>
    </article>
  );
};
