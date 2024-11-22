'use client';

import { cartIcon, profileIcon, searchIcon } from '@/shared/assets/icons';
import { buttonTexts } from '@/shared/assets/texts';
import { IconLink } from '@/shared/ui/IconLink';
import { UnderlineLink } from '@/shared/ui/UnderlineLink';
import { Logo } from './logo';

export const Header = () => {
  return (
    <header className='container flex justify-between pt-[20px]'>
      <Logo />
      <nav className='flex'>
        <div className='relative flex gap-16 pr-12'>
          <UnderlineLink text={buttonTexts.shop} href={'/catalog'} />
          <UnderlineLink text={buttonTexts.blog} href={''} />
          <UnderlineLink text={buttonTexts.ourStory} href={''} />
          <div className='absolute w-[1px] h-[17px] top-1/2 right-0 translate-y-[-50%] bg-gray-dark' />
        </div>
        <div className='flex gap-[39px] items-center pl-[47px]'>
          <IconLink
            src={searchIcon}
            alt={'search-icon'}
            href={'/'}
            width={19}
            className={'mb-[5px]'}
            activeStyles={'underline-link'}
          />
          <IconLink
            src={cartIcon}
            alt={'crt-icon'}
            href={'/'}
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
