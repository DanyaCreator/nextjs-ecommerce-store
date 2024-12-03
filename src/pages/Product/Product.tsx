'use client';

import Image from 'next/image';

import { dmSans } from '@/shared/assets/fonts';
import { tempEarrings } from '@/shared/assets/images';

export const Product = () => {
  return (
    <main className={'container mt-[128px]'}>
      <section className={'flex gap-[62px]'}>
        <Image src={tempEarrings} alt={'earrings'} width={540} height={600} />
        <article className={`${dmSans.className}`}>
          <h1 className={`mb-[23px] text-[26px] font-[400]`}>Lira earning</h1>
          <h3 className={'text-accent font-[500]'}>$ 20,00</h3>
          <p className={'mt-[64px] text-gray-dark'}>
            Lorem ipsum вolor sit amet, consectetur adipisicing elit. Asperiores consectetur est et hic inventore ipsum laboriosam quasi sapiente soluta tempore! Alias assumenda dolore ducimus id. Ipsum obcaecati rem sequi similique.
          </p>
        </article>
      </section>
      <section>
        <nav></nav>
      </section>
    </main>
  );
};
