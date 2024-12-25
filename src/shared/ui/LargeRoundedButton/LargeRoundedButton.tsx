import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import { dmSans } from '@/shared/assets/fonts';

type LargeRoundedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  onClick?: () => unknown;
};

export const LargeRoundedButton = ({
  text,
  onClick,
  ...props
}: LargeRoundedButtonProps) => {
  return (
    <button
      className={clsx(
        `w-[193px] h-[53px] flex justify-center items-center ${dmSans.className} text-[20px] font-[500]`,
        'outline-none rounded-md border-2 border-solid border-white',
        'text-white bg-transparent hover:text-black hover:bg-white',
        'transition'
      )}
      onClick={onClick}
      {...props}>
      {text}
    </button>
  );
};
