'use client';

import { useCallback } from 'react';

import { Product } from '@/shared/model';
import { useToastStore, useBagStore } from '@/shared/model/stores';
import { Card } from '@/shared/ui/card';
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

  const toastStore = useToastStore();
  const bagStore = useBagStore();

  const fetchCart = () => {
    const cartData = bagStore.getCart();

    bagStore.cart = cartData.products;
  };

  const addProduct = (curProd: Product) => {
    try {
      bagStore.addToCart(curProd);
      fetchCart();
      toastStore.onOpen('Product was added to cart!', 'success');
    } catch (error) {
      toastStore.onOpen('Sorry! Product is not added to cart!', 'error');
    }
  };

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
              sale={currentProduct.sale}
              onSale={currentProduct.onSale}
              category={currentProduct.category.name}
              onClick={() => addProduct(currentProduct)}
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
