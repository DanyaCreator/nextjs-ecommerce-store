import Link from 'next/link';
import { dmSans } from '@/shared/assets/fonts';

type UnderlineLinkProps = {
  text: string;
};

export const UnderlineLink = ({ text }: UnderlineLinkProps) => {
  return (
    <Link
      href={'/'}
      className={` ${dmSans.className} flex items-center text-underlineLink font-medium active:underline active:underline-offset-[27px]`}>
      {text}
    </Link>
  );
};
