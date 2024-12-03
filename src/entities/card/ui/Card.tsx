'use client';

import { useSpring, animated } from '@react-spring/web';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { dmSans } from '@/shared/assets/fonts';
import { tempEarrings } from '@/shared/assets/images';
import { buttonTexts } from '@/shared/assets/texts';

type CardProps = {
  title: string;
  price: number;
  onSale: boolean;
  inStock: boolean;
  sale: number;
};

export const Card = ({ title, price, onSale, inStock, sale }: CardProps) => {
  const router = useRouter();

  const [{ y }, api] = useSpring(() => ({
    y: 0,
  }));

  return (
    <article>
      <div
        className='relative w-fit rounded-lg cursor-pointer overflow-hidden'
        onMouseEnter={() => api({ y: -65 })}
        onMouseLeave={() => api({ y: 0 })}
        onClick={() => router.push(`/product`)}>
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
        <Image src={tempEarrings} alt={'earrings'} />
        <animated.div
          style={{ y }}
          className='absolute flex bottom-[-65px] w-full h-[65px] bg-white-transparent'>
          <span
            className={`${dmSans.className} m-auto text-body-large font-bold text-black`}>
            {buttonTexts.addToCart}
          </span>
        </animated.div>
      </div>
      <h3 className={`${dmSans.className} mt-6`}>{title}</h3>
      <h4 className={`${dmSans.className} mt-4 text-accent`}>$ {price}</h4>
    </article>
  );
};
