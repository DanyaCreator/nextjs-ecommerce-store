import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { dmSans } from '@/shared/assets/fonts';

type UnderlineLinkProps = {
  text: string;
  href: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const UnderlineLink = ({
  text,
  href,
  onClick,
  isActive,
}: UnderlineLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        `${dmSans.className} flex items-center`,
        `text-underlineLink font-medium`,
        `active:underline active:underline-offset-[25px]`,

        pathname === href && 'underline underline-offset-[27px]',

        href === 'javascript:void(0)' && 'text-[20px] text-black',

        isActive && 'underline underline-offset-[25px]'
      )}>
      {text}
    </Link>
  );
};
