'use client';

import { useSpring, animated } from '@react-spring/web';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { dmSans } from '@/shared/assets/fonts';
import { buttonTexts } from '@/shared/assets/texts';
import { Product } from '@/shared/model';

type CardProps = {
  product: Product;
};

export const Card = ({ product }: CardProps) => {
  const { id, name, price, sale, onSale, inStock, images } = product;

  const router = useRouter();

  const [{ y }, api] = useSpring(() => ({
    y: 0,
  }));

  const finalPrice = price - (sale / 100) * price;

  return (
    <article className={'flex flex-col justify-between'}>
      <div
        className='relative rounded-lg cursor-pointer overflow-hidden'
        onMouseEnter={() => api({ y: -65 })}
        onMouseLeave={() => api({ y: 0 })}
        onClick={() => router.push(`/${id}`)}>
        {onSale && (
          <div
            className={`${dmSans.className} absolute flex flex-col top-[16px] left-[16px] bg-accent p-1.5 rounded text-white text-[12px]`}>
            -{sale}%
            <span className={`${dmSans.className} text-[12px] line-through`}>
              $ {price}
            </span>
          </div>
        )}
        {!inStock && (
          <div
            className={`${dmSans.className} absolute top-[16px] left-[16px] bg-accent p-1.5 rounded text-white text-[12px]`}>
            Sold out
          </div>
        )}
        <Image src={images[0].url} alt={'product'} width={400} height={400} />
        <animated.div
          style={{ y }}
          className='absolute flex bottom-[-65px] w-full h-[65px] bg-white-transparent'>
          <span
            className={`${dmSans.className} m-auto text-body-large font-bold text-black`}>
            {buttonTexts.addToCart}
          </span>
        </animated.div>
      </div>
      <div className={'relative'}>
        <h5 className={`${dmSans.className} mt-6`}>
          {name.split(' ').slice(0, 3).join(' ')}
        </h5>
        <h5 className={`${dmSans.className} mt-4 text-accent`}>
          $ {finalPrice.toFixed(2)}
        </h5>
      </div>
    </article>
  );
};
