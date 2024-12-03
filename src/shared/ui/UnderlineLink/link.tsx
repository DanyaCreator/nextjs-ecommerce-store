import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { dmSans } from '@/shared/assets/fonts';

type UnderlineLinkProps = {
  text: string;
  href: string;
};

export const UnderlineLink = ({ text, href }: UnderlineLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        `${dmSans.className} flex items-center`,
        `text-underlineLink font-medium`,
        `active:underline active:underline-offset-[27px]`,
        `focus:underline focus:underline-offset-[27px]`,
        pathname === href && 'underline underline-offset-[27px]'
      )}>
      {text}
    </Link>
  );
};
