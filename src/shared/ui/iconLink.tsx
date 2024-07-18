import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type IconLinkProps = {
  src: string;
  alt: string;
  href: string;
  width?: number;
  additionalStyles?: string;
  activeStyles?: string;
  hoverStyles?: string;
  underline?: boolean;
};

export const IconLink = ({
  src,
  alt,
  href,
  width,
  additionalStyles,
  activeStyles,
  hoverStyles,
  underline,
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        'relative w-fit',
        additionalStyles,
        underline &&
          clsx(
            'after:absolute',
            "after:content-['_']",
            'after:w-full',
            'after:bg-black',
            'after:bottom-[-27px]',
            'after:h-[1px]',
            'after:left-0',
            'after:hidden',
            'active:after:block'
          )
      )}>
      <Image
        src={src}
        alt={alt}
        width={width}
        className={clsx('cursor-pointer', activeStyles, hoverStyles)}
      />
    </Link>
  );
};
