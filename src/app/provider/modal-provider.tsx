'use client';

import { useEffect, useState } from 'react';

import { Toast } from '@/shared/ui/modals';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Toast />
    </>
  );
};
