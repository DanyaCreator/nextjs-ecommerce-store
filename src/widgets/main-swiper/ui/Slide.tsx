import { dmSans } from '@/shared/assets/fonts';
import { mainSwiperGirl } from '@/shared/assets/images';
import { slideTexts } from '@/shared/assets/texts';
import { LargeRoundedButton } from '@/shared/ui/LargeRoundedButton';

type SlideProps = {
  title: string;
  price: string;
};

export const Slide = ({ title, price }: SlideProps) => {
  return (
    <div
      className={'w-full h-full flex'}
      style={{
        backgroundImage: `url(${mainSwiperGirl.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <div className='flex flex-col gap-[47px] mt-[228px] ml-[39px]'>
        <div className='flex flex-col gap-4'>
          <h1 className={`${dmSans.className} text-white`}>{title}</h1>
          <h2 className={`${dmSans.className} text-white`}>{price}</h2>
        </div>
        <LargeRoundedButton
          text={slideTexts.viewProduct}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
