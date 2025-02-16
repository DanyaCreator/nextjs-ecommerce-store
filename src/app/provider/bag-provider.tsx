'use client';

import { useEffect, useState } from 'react';
import { Bag } from '@/shared/ui/modals';

export const BagProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Bag />
    </>
  );
};
