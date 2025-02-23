import {
  facebookIcon,
  heartIcon,
  instagramIcon,
  twitterIcon,
} from '@/shared/assets/icons';
import { CountButton, RoundedButton } from '@/shared/ui/buttons';
import { IconLink } from '@/shared/ui/IconLink';

type ProductMenuProps = {
  name: string;
  price: number;
  id: string;
  category: string;
  onClick?: () => void;
};

export const ProductInfo = ({
  name,
  price,
  id,
  category,
  onClick,
}: ProductMenuProps) => {
  return (
    <article className={'flex flex-col justify-between w-1/2'}>
      <div>
        <h1 className={`text-[26px] font-[400] mb-[23px]`}>
          {name.split(' ').slice(0, 3).join(' ')}
        </h1>
        <h2 className={'text-accent font-[500]'}>{price} $</h2>
      </div>

      <div>
        <div className={'flex gap-[23px]'}>
          <CountButton />
          <RoundedButton text={'Add to card'} onClick={onClick} />
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
        <span>SKU : {id}</span>
        <span>Category: {category} </span>
      </p>
    </article>
  );
};
