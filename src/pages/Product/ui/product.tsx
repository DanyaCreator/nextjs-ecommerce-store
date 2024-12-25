'use client';

import { useCallback } from 'react';

import { Card } from '@/entities/card';
import { Product } from '@/shared/model';
import { ProductInfo } from './product-info';
import { ProductTab } from './product-tab';
import { SliderForProduct } from './slider-for-product';

type ProductContentProps = {
  products: Product[];
  productId: string;
};

export const ProductContent = ({
  products,
  productId,
}: ProductContentProps) => {
  const currentProduct = products.find((product) => product.id === productId);

  const filterCards = useCallback(
    (card: Product) => {
      if (currentProduct) {
        const matchesCategory = currentProduct.category.id.includes(
          card.category.id
        );

        const matchesProduct = !currentProduct.id.includes(card.id);

        return matchesCategory && matchesProduct;
      }
    },
    [currentProduct]
  );

  return (
    <main className={`container mt-[128px] flex flex-col gap-[100px]`}>
      {currentProduct && (
        <article className={'flex gap-[62px]'}>
          <section className={`w-full flex justify-between gap-[30px]`}>
            <SliderForProduct images={currentProduct.images} />
            <ProductInfo
              name={currentProduct.name}
              price={currentProduct.price}
              id={currentProduct.id}
              category={currentProduct.category.name}
            />
          </section>
        </article>
      )}

      {currentProduct && (
        <ProductTab
          productName={currentProduct.name.split(' ').slice(0, 3).join(' ')}
          productId={productId}
          description={currentProduct.description}
          weight={currentProduct.weight}
          material={currentProduct.material.value}
        />
      )}

      <article className={'flex flex-col gap-[50px]'}>
        <h1 className={'font-[400] text-[26px]'}>Similar items</h1>
        <section className={'grid grid-cols-3 gap-[24px]'}>
          {products &&
            products
              .filter(filterCards)
              .map((card, i) => <Card key={i} product={card} />)}
        </section>
      </article>
    </main>
  );
};
