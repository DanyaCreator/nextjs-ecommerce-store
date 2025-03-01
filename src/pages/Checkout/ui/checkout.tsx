'use client';

import { useBagStore } from '@/shared/model/stores';
import { RoundedButton } from '@/shared/ui/buttons';
import { CardInOrder } from '@/shared/ui/card';
import { TextField } from '@/shared/ui/form-fields';
import { useEffect } from 'react';

export const Checkout = () => {
  const bagStore = useBagStore();

  return (
    <main className={'container mt-[96px]'}>
      <h1 className={'flex justify-center mb-[64px]'}>Checkout</h1>
      <div
        className={'grid grid-cols-2 grid-rows-1 gap-x-[150px] max-h-[550px]'}>
        <article className={'flex flex-col gap-[40px]'}>
          <h2>Billing details</h2>
          <div className={'flex gap-[40px]'}>
            <TextField
              label={'First Name'}
              className={'text-gray-dark w-1/2'}
            />
            <TextField label={'Last Name'} className={'text-gray-dark w-1/2'} />
          </div>
          <TextField label={'Country'} className={'text-gray-dark'} />
          <TextField label={'Street Address'} className={'text-gray-dark'} />
          <TextField label={'Phone'} className={'text-gray-dark'} />
          <TextField label={'Email'} className={'text-gray-dark'} />
        </article>
        <article>
          <h2 className={'mb-[40px]'}>Your Order</h2>
          <section
            className={'bg-gray-light p-[40px_60px] flex flex-col gap-[20px]'}>
            <div
              className={
                'flex justify-between border-b border-gray-dark pb-[18px]'
              }>
              <span>PRODUCT</span>
              <span>TOTAL</span>
            </div>

            <div
              className={
                'flex flex-col gap-[20px] border-b border-gray-dark pb-[18px] text-gray-dark'
              }>
              {bagStore &&
                bagStore.cart.map((item, index) => (
                  <CardInOrder
                    key={index}
                    name={item.name}
                    price={item.price}
                  />
                ))}
            </div>

            <div
              className={
                'flex justify-between border-b border-gray-dark pb-[18px]'
              }>
              <span>SUBTOTAL</span>
              <span className={'text-gray-dark'}>
                $ {bagStore.total(bagStore.cart)}
              </span>
            </div>

            <div
              className={
                'flex justify-between border-b border-gray-dark pb-[18px]'
              }>
              <span>SHIPPING</span>
              <span className={'text-gray-dark'}>$ 15</span>
            </div>

            <div className={'flex justify-between pb-[18px] font-bold'}>
              <span>TOTAL</span>
              <span>$ {15 + Number(bagStore.total(bagStore.cart))}</span>
            </div>
            <RoundedButton text={'PLACE ORDER'} />
          </section>
        </article>
      </div>
    </main>
  );
};
