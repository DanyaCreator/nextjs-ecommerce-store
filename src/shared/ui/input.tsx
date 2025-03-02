import * as React from 'react';

import { cn } from '../lib/utils';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & { iconSlot?: React.ReactNode }
>(({ className, type, ...props }, ref) => {
  const [filled, setFilled] = React.useState(false);

  // TODO: iconSlot warning
  return (
    <label className={cn('w-full h-10 cursor-text relative', className)}>
      <input
        type={type}
        data-filled={filled}
        className='peer w-full h-full pb-3 border-b outline-none border-b-gray-light transition-colors focus:border-b-black data-[filled=true]:border-b-black data-[invalid=true]:border-b-red-600'
        ref={ref}
        {...props}
        placeholder={undefined}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onChange && props.onChange(e);
          setFilled(e.target.value.trim() !== '');
        }}
      />
      <span
        className={cn(
          'absolute top-0 left-0 text-[16px] leading-[20px] text-gray-dark transition origin-bottom-left select-none cursor-default',
          'peer-focus:scale-75 peer-focus:-translate-y-full peer-focus:text-black',
          'peer-data-[filled=true]:scale-75 peer-data-[filled=true]:-translate-y-full peer-data-[filled=true]:text-black',
          'peer-data-[invalid=true]:text-red-600'
        )}>
        {props.placeholder}
      </span>
      {props.iconSlot && (
        <div className='absolute top-1/2 right-0 -translate-y-1/2'>
          {props.iconSlot}
        </div>
      )}
    </label>
  );
});
Input.displayName = 'Input';

export { Input as UiInput };
