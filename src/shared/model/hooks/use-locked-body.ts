'use client';

import { useEffect } from 'react';

export const useLockedBody = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

    document.body.style.paddingRight = `${scrollBarWidth}px`;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;

      document.body.style.paddingRight = '0px';
    };
  }, [isLocked]);
};
