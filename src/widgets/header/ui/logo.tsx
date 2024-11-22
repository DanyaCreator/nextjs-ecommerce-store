'use client';

import { useRouter } from 'next/navigation';

import { allertaStencil } from '@/shared/assets/fonts';

export const Logo = () => {
  const router = useRouter();

  return (
    <button className='flex w-[158px]' onClick={() => router.push('/')}>
      <span className={`${allertaStencil.className} text-logo text-accent`}>
        S
      </span>
      <span className={`${allertaStencil.className} text-logo`}>
        HOPPE
      </span>
    </button>
  );
};
