import Image from 'next/image';
import { tempEarrings } from '@/shared/assets/images';

export const SliderForProduct = () => {
  return (
    <>
      <Image src={tempEarrings} alt={'earrings'} width={1300} height={1300} />
    </>
  );
};
