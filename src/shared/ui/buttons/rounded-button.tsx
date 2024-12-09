import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type RoundedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
};

export const RoundedButton = ({
  text,
  className,
  ...props
}: RoundedButtonProps) => {
  return (
    <button
      className={clsx(
        'w-full h-[53px] px-[34px] bg-black rounded-[4px] border border-black',
        'text-white font-[400]',
        'hover:bg-white hover:text-black',
        'transition-all duration-200 ease-in-out',
        className
      )}
      {...props}>
      {text}
    </button>
  );
};
