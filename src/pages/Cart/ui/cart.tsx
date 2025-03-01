'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useBagStore } from '@/shared/model/stores';
import { RoundedButton } from '@/shared/ui/buttons';
import { CartCard } from '@/shared/ui/card';

export const Cart = () => {
  const bagStore = useBagStore();
  const router = useRouter();

  const fetchCart = () => {
    const cartData = bagStore.getCart();

    bagStore.cart = cartData.products;
  };

  const removeProduct = (id: string) => {
    bagStore.removeFromCart(id);
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <main className={'container mt-[96px]'}>
      <h1 className={'flex justify-center mb-[64px]'}>Shopping Cart</h1>
      <div
        className={'grid grid-cols-2 grid-rows-1 gap-x-[150px] max-h-[550px]'}>
        <article className={'overflow-scroll'}>
          {bagStore.cart &&
            bagStore.cart.map((item, index) => (
              <CartCard
                key={index}
                name={item.name}
                price={item.price}
                material={item.material}
                size={item.size}
                image={item.images[0].url}
                sale={item.sale}
                remove={() => removeProduct(item.id)}
              />
            ))}
          <RoundedButton
            text={'CHECK CATALOG'}
            onClick={() => router.push('/catalog')}
            className={'bg-white !text-black mt-[40px]'}
          />
        </article>
        <article>
          <h3 className={'mb-[40px]'}>Cart Totals</h3>
          <section
            className={
              'grid grid-cols-2 grid-rows-3 gap-x-[100px] gap-y-[25px] pb-[40px] border-b-2 border-gray-light'
            }>
            <span className={'uppercase'}>subtotal</span>
            <span className={'text-gray-dark'}>
              $ {bagStore.total(bagStore.cart)}
            </span>
            <span className={'uppercase'}>shipping</span>
            <p className={'text-gray-dark'}>Shipping cost is fixed by $ 15</p>
          </section>
          <section className={'flex justify-between mt-[40px] mb-[40px]'}>
            <span className={'uppercase font-bold'}>total</span>
            <span className={'font-bold'}>
              $ {15 + Number(bagStore.total(bagStore.cart))}
            </span>
          </section>
          <RoundedButton
            text={'PROCEED TO CHECKOUT'}
            onClick={() => router.push('/checkout')}
          />
        </article>
      </div>
    </main>
  );
};
