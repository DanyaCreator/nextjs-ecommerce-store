import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type RoundedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const RoundedButton = ({ text, ...props }: RoundedButtonProps) => {
  return (
    <button
      className={clsx(
        'w-full h-[35px] bg-black rounded-xl',
        'text-white font-[400]',
        'hover:bg-white hover:text-black hover:border hover:border-black',
        'transition-all duration-200 ease-in-out'
      )}
      {...props}>
      {text}
    </button>
  );
};
