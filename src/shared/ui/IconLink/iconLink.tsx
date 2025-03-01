import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type IconLinkProps = {
  src: string;
  alt: string;
  href: string;
  width?: number;
  className?: string;
  activeStyles?: string;
  hoverStyles?: string;
  onClick?: () => void;
};

export const IconLink = ({
  src,
  alt,
  href,
  width,
  className,
  activeStyles,
  hoverStyles,
  onClick,
}: IconLinkProps) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={clsx('relative w-fit', className, activeStyles)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        className={clsx('cursor-pointer', hoverStyles)}
      />
    </Link>
  );
};
