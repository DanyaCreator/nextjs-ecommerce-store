'use client';

import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { dmSans } from '@/shared/assets/fonts';
import { tempEarrings } from '@/shared/assets/images';
import { buttonTexts } from '@/shared/assets/texts';

type CardProps = {
  title: string;
  price: string;
};

export const Card = ({ title, price }: CardProps) => {
  const [{ y }, api] = useSpring(() => ({
    y: 0,
  }));

  return (
    <article>
      <div
        className='relative w-fit rounded-lg cursor-pointer overflow-hidden'
        onMouseEnter={() => api({ y: -65 })}
        onMouseLeave={() => api({ y: 0 })}>
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
      <h4 className={`${dmSans.className} mt-4 text-accent`}>{price}</h4>
    </article>
  );
};
