'use client';

import { useEffect, useState } from 'react';

import { Card } from '@/entities/card';
import { getCatalog } from '@/shared/api';
import { ProductEntity } from '@/shared/model';
import { ProductTab } from './product-tab';
import { ProductInfo } from './product-info';
import { SliderForProduct } from './slider-for-product';
import { getProduct } from '@/shared/api/get-product';

type Product = {
  productId: string;
};

export const ProductContent = ({ productId }: Product) => {
  const [products, setProducts] = useState<ProductEntity[] | null>(null);

  const fetchProducts = async () => {
    await getCatalog().then((result) => {
      result ? setProducts(result) : setProducts(null);
    });
  };

  const [currentProduct, setCurrentProduct] = useState<ProductEntity | null>(
    null
  );

  const fetchProduct = async () => {
    await getProduct(productId).then((result) => {
      result ? setCurrentProduct(result) : setCurrentProduct(null);
    });
  };

  useEffect(() => {
    fetchProducts();
    fetchProduct();
  }, []);

  return (
    <main className={`container mt-[128px] flex flex-col gap-[100px]`}>
      {currentProduct && (
        <article className={'flex gap-[62px]'}>
          <section className={`w-full flex justify-between gap-[30px]`}>
            <SliderForProduct />
            <ProductInfo
              name={currentProduct?.name}
              price={currentProduct?.price}
              id={currentProduct?.id}
              category={currentProduct?.category.name}
            />
          </section>
        </article>
      )}

      {currentProduct && (
        <ProductTab
          productId={productId}
          description={currentProduct?.description}
          weight={currentProduct?.weight}
          material={currentProduct?.material.value}
        />
      )}

      <article className={'flex flex-col gap-[50px]'}>
        <h4 className={'font-[400] text-[26px]'}>Similar items</h4>
        <section className={'grid grid-cols-3 gap-[24px]'}>
          {products &&
            products
              .slice(0, 3)
              .map((card, i) => (
                <Card
                  key={i}
                  id={card.id}
                  name={card.name.split(' ').slice(0, 3).join(' ')}
                  price={card.price}
                  image={card.images[0].url}
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
