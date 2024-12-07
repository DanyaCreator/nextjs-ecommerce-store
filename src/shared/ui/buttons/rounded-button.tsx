import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type RoundedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const RoundedButton = ({ text, ...props }: RoundedButtonProps) => {
  return (
    <button
      className={clsx(
        'w-full h-[53px] bg-black rounded-[4px] border border-black',
        'text-white font-[400]',
        'hover:bg-white hover:text-black',
        'transition-all duration-200 ease-in-out'
      )}
      {...props}>
      {text}
    </button>
  );
};
