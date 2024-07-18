import Link from 'next/link';
import { dmSans } from '../fonts';

type UnderlineLinkProps = {
  text: string;
};

export const UnderlineLink = ({ text }: UnderlineLinkProps) => {
  return (
    <Link
      href={'/'}
      className={`flex items-center ${dmSans.className} text-base/[2rem] font-medium active:underline active:underline-offset-[27px]`}>
      {text}
    </Link>
  );
};
