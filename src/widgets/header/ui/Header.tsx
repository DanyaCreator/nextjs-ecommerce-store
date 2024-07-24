import { cartIcon, profileIcon, searchIcon } from '@/shared/assets/icons';
import { buttonTexts } from '@/shared/assets/texts';
import { IconLink } from '@/shared/ui/IconLink';
import { UnderlineLink } from '@/shared/ui/UnderlineLink';
import { Logo } from './logo';

export const Header = () => {
  return (
    <header className='flex justify-between mt-16'>
      <Logo />
      <nav className='flex'>
        <div className='relative flex gap-16 pr-12'>
          <UnderlineLink text={buttonTexts.shop} />
          <UnderlineLink text={buttonTexts.blog} />
          <UnderlineLink text={buttonTexts.ourStory} />
          <div className='absolute w-[1px] h-[17px] top-1/2 right-0 translate-y-[-50%] bg-gray-dark' />
        </div>
        <div className='flex gap-[39px] items-center pl-[47px]'>
          <IconLink
            src={searchIcon}
            alt={'search-icon'}
            href={'/'}
            width={19}
            additionalStyles={'mb-[5px]'}
            underline
          />
          <IconLink
            src={cartIcon}
            alt={'crt-icon'}
            href={'/'}
            width={21}
            additionalStyles={'mb-[7px]'}
            underline
          />
          <IconLink
            src={profileIcon}
            alt={'profile-icon'}
            href={'/'}
            width={20}
            additionalStyles={'mb-[6px]'}
            underline
          />
        </div>
      </nav>
    </header>
  );
};
