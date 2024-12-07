'use client';

import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { RxMagnifyingGlass } from 'react-icons/rx';

import { dmSans } from '@/shared/assets/fonts';
import { FieldError } from '@/shared/ui/errors';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  title?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
};

export const TextField = forwardRef(
  (
    { label, title, disabled, error, className, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    return (
      <div className={clsx('flex flex-col gap-2', className)}>
        <span className={`text-[16px] ${dmSans.className}`}>{title}</span>
        <div className='relative flex flex-col'>
          <input
            {...props}
            type={isPasswordHidden ? props.type : 'text'}
            disabled={disabled}
            ref={ref}
            className={clsx(
              `outline-none pb-3 ${dmSans.className} peer`,
              'text-h5 text-black border-solid border-b border-[#D8D8D8]',
              'focus:border-black transition',
              !!error && 'border-red-500'
            )}
            autoComplete='off'
          />
          <label
            className={clsx(
              'flex items-center',
              'absolute bottom-3 pointer-events-none',
              `${dmSans.className} text-h5 text-dark-gray`,
              'transition-all',
              'peer-focus:text-black peer-focus:text-[12px] peer-focus:translate-y-[-25px]',
              (props.defaultValue ||
                props.defaultValue === 0 ||
                props.value ||
                props.value === 0) &&
                'text-black text-small translate-y-[-25px]',
              !!error && 'text-red-500'
            )}>
            {label}
          </label>
          <RxMagnifyingGlass className={'w-[25px] h-[25px] absolute right-0 bottom-3 bg-white'} />
          {props.type === 'password' && (
            <>
              {isPasswordHidden && (
                <BiShow
                  className='absolute right-0 bottom-3 w-6 h-6 cursor-pointer'
                  fill='#000'
                  onClick={() => setIsPasswordHidden(false)}
                />
              )}
              {!isPasswordHidden && (
                <BiHide
                  className='absolute right-0 bottom-3 w-6 h-6 cursor-pointer'
                  fill='#000'
                  onClick={() => setIsPasswordHidden(true)}
                />
              )}
            </>
          )}
        </div>
        {error && <FieldError errorMessage={error} />}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
