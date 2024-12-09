'use client';

import { Card } from '@/entities/card';
import { tempCards } from '@/shared/assets/texts';

import { ProductInfoMenu } from './product-info-menu';
import { ProductMenu } from './product-menu';
import { SliderForProduct } from './slider-for-product';

type ProductContent = {
  productId: string;
};

export const ProductContent = ({ productId }: ProductContent) => {
  return (
    <main className={`container mt-[128px] flex flex-col gap-[100px]`}>
      <article className={'flex gap-[62px]'}>
        <SliderForProduct />
        <section className={`flex flex-col justify-between`}>
          <ProductMenu />
        </section>
      </article>

      <ProductInfoMenu productId={productId} />

      <article className={'flex flex-col gap-[50px]'}>
        <h4 className={'font-[400] text-[26px]'}>Similar items</h4>
        <section className={'grid grid-cols-3 gap-[24px]'}>
          {tempCards.slice(0, 3).map((card, i) => (
            <Card
              key={i}
              title={card.name}
              price={card.price}
              onSale={card.onSale}
              inStock={card.inStock}
              sale={card.sale}
            />
          ))}
        </section>
      </article>
    </main>
  );
};
