'use client';

import './scroll-for-dropdown.css';

import { useSpring, animated } from '@react-spring/web';
import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { dmSans } from '@/shared/assets/fonts';
import { arrowDown } from '@/shared/assets/icons';
import { useLockedBody, useOutsideAlerter } from '@/shared/model';

type DropdownProps = {
  isOpenChange: () => void;
  isOpen: boolean;
  title?: string;
  icon?: ReactNode;
  clickOutside?: () => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
};

export const Dropdown = ({
  title,
  icon,
  isOpen,
  isOpenChange,
  clickOutside,
  className,
  children,
  disabled,
}: DropdownProps) => {
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  useOutsideAlerter(dropdownMenuRef, clickOutside ? clickOutside : () => {});

  const [{ maxHeight }, api] = useSpring(() => ({
    maxHeight: 0,
  }));

  useEffect(() => {
    if (!isOpen) api({ maxHeight: 0 });
    else api({ maxHeight: 170 });
  });

  const [isLocked, setIsLocked] = useState(false);

  useLockedBody(isLocked);

  return (
    <div className={'relative'} ref={dropdownMenuRef}>
      <div
        className={clsx(
          'w-full h-[52px] px-4 py-3 flex justify-between items-center',
          'border-solid border border-[#D8D8D8] rounded-md cursor-pointer',
          className,
          disabled && 'cursor-default'
        )}
        onClick={!disabled ? isOpenChange : () => {}}>
        <div className='flex gap-4 items-center'>
          {icon && icon}
          <span className={dmSans.className}>{title}</span>
        </div>
        <Image
          src={arrowDown}
          alt={'arrow-down'}
          className={clsx(
            'transition-transform',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>
      <animated.div
        onMouseEnter={() => setIsLocked(true)}
        onMouseLeave={() => setIsLocked(false)}
        style={{ top: 'calc(100% + 10px)', maxHeight }}
        className={clsx(
          'z-50',
          `flex flex-col w-full rounded-b-lg`,
          'shadow-md scroll-for-dropdown'
        )}>
        {children}
      </animated.div>
    </div>
  );
};
