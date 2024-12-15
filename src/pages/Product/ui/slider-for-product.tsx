import Image from 'next/image';

import { tempEarrings } from '@/shared/assets/images';

type SliderForProductProps = {
  url: string;
};

export const SliderForProduct = ({ url }: SliderForProductProps) => {
  return (
    <div className={'w-1/2'}>
      <Image src={url} alt={'earrings'} width={500} height={500} />
    </div>
  );
};
