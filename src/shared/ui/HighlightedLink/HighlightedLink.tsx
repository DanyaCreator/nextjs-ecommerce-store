import Link from 'next/link';
import { dmSans } from '@/shared/assets/fonts';

type HighlightedLinkProps = {
  href: string;
  text: string;
};

export const HighlightedLink = ({ href, text }: HighlightedLinkProps) => {
  return (
    <Link
      href={href}
      className={`${dmSans.className} text-body-large text-gray-dark hover:text-black transition`}>
      {text}
    </Link>
  );
};
