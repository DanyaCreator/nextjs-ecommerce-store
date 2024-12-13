import Image from 'next/image';

import { tempEarrings } from '@/shared/assets/images';

export const SliderForProduct = () => {
  return (
    <div className={'w-1/2'}>
      <Image src={tempEarrings} alt={'earrings'} width={500} height={500} />
    </div>
  );
};
