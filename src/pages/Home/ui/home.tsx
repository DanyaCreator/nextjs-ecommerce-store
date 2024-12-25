'use client';

import { MainSwiper } from '@/widgets/main-swiper';
import { Card } from '@/entities/card';
import { dmSans } from '@/shared/assets/fonts';
import { linkTexts, titles } from '@/shared/assets/texts';
import { Billboard, Product } from '@/shared/model';

type HomeProps = {
  products: Product[];
  billboards: Billboard[];
};

export const Home = ({ products, billboards }: HomeProps) => {
  return (
    <main className='container'>
      <MainSwiper billboards={billboards} />
      <section className='w-full mt-16 flex flex-col gap-[39px]'>
        <div className='flex justify-between items-center'>
          <h1 className={`${dmSans.className}`}>{titles.shopTheLatest}</h1>
          <a
            className={`${dmSans.className} text-accent hover:text-black cursor-pointer transition`}
            href={'/catalog'}>
            {linkTexts.viewAll}
          </a>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-[54px] gap-y-[84px]'>
          {products &&
            products.map((card, i) => (
              <Card
                key={i}
                product={card}
              />
            ))}
        </div>
      </section>
    </main>
  );
};
