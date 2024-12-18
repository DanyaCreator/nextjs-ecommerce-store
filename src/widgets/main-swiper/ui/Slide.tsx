import { useRouter } from 'next/navigation';

import { dmSans } from '@/shared/assets/fonts';
import { slideTexts } from '@/shared/assets/texts';
import { LargeRoundedButton } from '@/shared/ui/LargeRoundedButton';
import { useEffect } from 'react';

type SlideProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
};

export const Slide = ({ title, price, imageUrl, id }: SlideProps) => {
  useEffect(() => {

  }, []);

  const router = useRouter();

  return (
    <div
      className={'w-full h-full flex rounded-xl'}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <div className='w-1/4 flex flex-col gap-[47px] mt-[228px] ml-[39px]'>
        <div className='flex flex-col gap-4 text-white'>
          <h1 className={`${dmSans.className} `}>{title}</h1>
          <h2 className={`${dmSans.className} `}>{price} $</h2>
        </div>
        <LargeRoundedButton
          text={slideTexts.viewProduct}
          onClick={() => router.push(`/${id}`)}
        />
      </div>
    </div>
  );
};
