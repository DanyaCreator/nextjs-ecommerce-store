import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../lib/utils';

const buttonVariants = cva(
  'items-center justify-center gap-2 whitespace-nowrap rounded text-body-large font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b4b4b4] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      design: {
        default:
          'bg-black text-white border border-black hover:bg-white hover:text-black',
      },
      size: {
        default: 'h-14 px-4 py-2',
      },
      layout: {
        block: 'flex w-full',
        inline: 'inline-flex',
      },
    },
    defaultVariants: {
      design: 'default',
      size: 'default',
      layout: 'block',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, design, layout, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ design, layout, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button as UiButton, buttonVariants };
