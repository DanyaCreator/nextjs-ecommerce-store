import { clsx } from 'clsx';
import { dmSans } from '@/shared/assets/fonts';

type LargeRoundedButtonProps = {
  text: string;
  onClick: () => unknown;
};

export const LargeRoundedButton = ({
  text,
  onClick,
}: LargeRoundedButtonProps) => {
  return (
    <button
      className={clsx(
        `w-[193px] h-[53px] flex justify-center items-center ${dmSans.className} text-[20px] font-bold`,
        'outline-none rounded-md border-2 border-solid border-white',
        'text-white bg-transparent hover:text-black hover:bg-white',
        'transition'
      )}
      onClick={onClick}>
      {text}
    </button>
  );
};
