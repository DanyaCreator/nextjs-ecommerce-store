import Image from 'next/image';
import { dmSans } from '@/shared/assets/fonts';
import {
  arrowRight,
  facebookIcon,
  instagramIcon,
  linkedIcon,
  twitterIcon,
} from '@/shared/assets/icons';
import { footerLinks } from '@/shared/assets/texts';
import { HighlightedLink } from '@/shared/ui/HighlightedLink';
import { IconLink } from '@/shared/ui/IconLink';

export const Footer = () => {
  return (
    <footer className='container w-full mt-[250px] pb-[90px]'>
      <section className='w-full flex justify-between border-t border-solid border-t-gray-light'>
        <article className='mt-[52px]'>
          <div className='flex gap-[41px]'>
            <HighlightedLink href={'/contact'} text={footerLinks.contacts} />
            <HighlightedLink href={'/'} text={footerLinks.termsOfServices} />
            <HighlightedLink href={'/'} text={footerLinks.shippingAndReturns} />
          </div>
          <div className='mt-12 flex'>
            <h5 className={`${dmSans.className}`}>
              © 2021 Shelly.{' '}
              <HighlightedLink href={'/'} text={footerLinks.termsOfUse} /> and{' '}
              <HighlightedLink
                href={'/privacy'}
                text={footerLinks.privacyPolicy}
              />
              .
            </h5>
          </div>
        </article>
        <article className='mt-[37px]'>
          <div className='pb-[13px] flex gap-32 items-end border-b border-solid border-b-black'>
            <HighlightedLink href={'/'} text={footerLinks.giveAnEmail} />
            <Image src={arrowRight} alt={'arrow-right'} />
          </div>
          <div className='mt-[50px] flex gap-[30px] justify-end'>
            <IconLink
              src={linkedIcon}
              alt={'linkedIn'}
              href={'/'}
              hoverStyles={'link-black-Filter'}
            />
            <IconLink
              src={facebookIcon}
              alt={'facebook'}
              href={'/'}
              hoverStyles={'link-black-Filter'}
            />
            <IconLink
              src={instagramIcon}
              alt={'instagram'}
              href={'/'}
              hoverStyles={'link-black-Filter'}
            />
            <IconLink
              src={twitterIcon}
              alt={'twitter'}
              href={'/'}
              hoverStyles={'link-black-Filter'}
            />
          </div>
        </article>
      </section>
    </footer>
  );
};
