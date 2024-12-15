'use client';

import { useEffect, useState } from 'react';

import { MainSwiper } from '@/widgets/main-swiper';
import { Card } from '@/entities/card';
import { getCatalog } from '@/shared/api';
import { dmSans } from '@/shared/assets/fonts';
import { linkTexts, titles } from '@/shared/assets/texts';
import { ProductEntity } from '@/shared/model';

export const Home = () => {
  const [products, setProducts] = useState<ProductEntity[] | null>(null);

  const fetchProducts = async () => {
    await getCatalog().then((result) => {
      result ? setProducts(result) : setProducts(null);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className='container'>
      <MainSwiper />
      <section className='w-full mt-16 flex flex-col gap-[39px]'>
        <div className='flex justify-between items-center'>
          <h1 className={dmSans.className}>{titles.shopTheLatest}</h1>
          <a
            className={`${dmSans.className} text-accent hover:text-black cursor-pointer transition`}
            href={'/catalog'}>
            {linkTexts.viewAll}
          </a>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-[54px] gap-y-[84px]'>
          {products &&
            products.map((c, i) => (
              <Card
                key={i}
                id={c.id}
                name={c.name.split(' ').slice(0, 3).join(' ')}
                price={c.price}
                image={c.images[0].url}
                sale={c.sale}
                onSale={c.onSale}
                inStock={c.inStock}
              />
            ))}
        </div>
      </section>
    </main>
  );
};
