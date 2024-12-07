import Image from 'next/image';

import {
  blackStar,
  facebookIcon,
  heartIcon,
  instagramIcon,
  twitterIcon,
} from '@/shared/assets/icons';
import { CountButton, RoundedButton } from '@/shared/ui/buttons';
import { IconLink } from '@/shared/ui/IconLink';

export const ProductMenu = () => {
  return (
    <>
      <div>
        <h1 className={`text-[26px] font-[400] mb-[23px]`}>Lira earning</h1>
        <h3 className={'text-accent font-[500]'}>$ 20,00</h3>
      </div>

      <div>
        <span className={'flex gap-[10px] items-center'}>
          <Image src={blackStar} alt={'star'} />
          <Image src={blackStar} alt={'star'} />
          <Image src={blackStar} alt={'star'} />
          <Image src={blackStar} alt={'star'} />
          <Image src={blackStar} alt={'star'} />
          <span className={'text-gray-dark'}>1 customer review</span>
        </span>
        <p className={'mb-[48px] mt-[22px] text-gray-dark'}>
          Lorem ipsum вolor sit amet, consectetur adipisicing elit. Asperiores
          consectetur est et hic inventore ipsum laboriosam quasi sapiente
          soluta tempore! Alias assumenda dolore ducimus id. Ipsum obcaecati rem
          sequi similique.
        </p>
        <div className={'flex gap-[23px]'}>
          <CountButton />
          <RoundedButton text={'Add to card'} />
        </div>
      </div>

      <div className={'flex gap-[24px]'}>
        <span className={'pr-[24px] border-r border-gray-dark'}>
          <IconLink src={heartIcon} alt={'like'} href={'/public'} />
        </span>
        <IconLink
          src={facebookIcon}
          alt={'facebook'}
          href={'/public'}
          hoverStyles={'link-black-Filter'}
        />
        <IconLink
          src={instagramIcon}
          alt={'instagram'}
          href={'/public'}
          hoverStyles={'link-black-Filter'}
        />
        <IconLink
          src={twitterIcon}
          alt={'twitter'}
          href={'/public'}
          hoverStyles={'link-black-Filter'}
        />
      </div>
      <p className={'flex flex-col gap-[6px]'}>
        <span>SKU :</span>
        <span>Categories:</span>
      </p>
    </>
  );
};
