'use client';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

import { cartIcon, profileIcon, searchIcon } from '@/shared/assets/icons';
import { buttonTexts } from '@/shared/assets/texts';
import { useShoppingBagStore } from '@/shared/model/stores';
import { IconLink } from '@/shared/ui/IconLink';
import { UnderlineLink } from '@/shared/ui/UnderlineLink';
import { Logo } from './logo';

export const Header = () => {
  const pathname = usePathname();
  const shoppingBagStore = useShoppingBagStore();

  return (
    <header
      className={clsx(
        'container flex justify-between pt-[20px]',
        'border-b border-gray-light pb-[13px]',
        pathname === '/' && 'border-none'
      )}>
      <Logo />
      <nav className='flex'>
        <div className='relative flex gap-16 pr-12'>
          <UnderlineLink text={buttonTexts.shop} href={'/catalog'} />
          <UnderlineLink text={buttonTexts.ourStory} href={'/story'} />
          <div className='absolute w-[1px] h-[17px] top-1/2 right-0 translate-y-[-50%] bg-gray-dark' />
        </div>
        <div className='flex gap-[39px] items-center pl-[47px]'>
          <IconLink
            src={searchIcon}
            alt={'search-icon'}
            href={'/catalog'}
            width={19}
            className={'mb-[5px]'}
            activeStyles={'underline-link'}
          />
          <IconLink
            src={cartIcon}
            alt={'crt-icon'}
            href={''}
            onClick={shoppingBagStore.onOpen}
            width={21}
            className={'mb-[7px]'}
            activeStyles={'underline-link'}
          />
          <IconLink
            src={profileIcon}
            alt={'profile-icon'}
            href={'/'}
            width={20}
            className={'mb-[6px]'}
            activeStyles={'underline-link'}
          />
        </div>
      </nav>
    </header>
  );
};
