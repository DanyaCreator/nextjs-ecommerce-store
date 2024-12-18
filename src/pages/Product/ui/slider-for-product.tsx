import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import './scroll-for-product.css';
import { ProductImage, useLockedBody } from '@/shared/model';

type SliderForProductProps = {
  images: ProductImage[];
};

export const SliderForProduct = ({ images }: SliderForProductProps) => {
  const [currImg, setCurrImg] = useState<string>(images[0].url);

  const [isLocked, setIsLocked] = useState(false);

  useLockedBody(isLocked);

  return (
    <div className={'max-h-[500px] flex gap-[10px]'}>
      <div
        onMouseEnter={() => setIsLocked(true)}
        onMouseLeave={() => setIsLocked(false)}
        className={
          'max-h-[500px] flex flex-col gap-[20px] p-[10px] rounded-lg scroll-for-product'
        }>
        {images &&
          images.map((image, i) => (
            <Image
              key={i}
              src={image.url}
              alt={`product-image${i}`}
              width={150}
              height={150}
              className={clsx(
                'rounded-lg cursor-pointer',
                image.url === currImg && 'scale-110 transition duration-800'
              )}
              onClick={() => {
                setCurrImg(image.url);
              }}
            />
          ))}
      </div>
      {currImg && (
        <div>
          <Image
            src={currImg}
            alt={'product-image'}
            width={600}
            height={600}
            className={'rounded-lg max-h-[500px]'}
          />
        </div>
      )}
    </div>
  );
};
