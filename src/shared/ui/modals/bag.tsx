import { animated, useSpring } from '@react-spring/web';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLockedBody } from '@/shared/model';
import {
  useShoppingBagStore,
  useToastStore,
  useBagStore,
} from '@/shared/model/stores';
import { CloseButton, RoundedButton } from '@/shared/ui/buttons';
import { BagCard } from '@/shared/ui/card';

type BagModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Bag = () => {
  const shoppingBagStore = useShoppingBagStore();

  useLockedBody(shoppingBagStore.isOpen);

  return createPortal(
    <BagModal
      isOpen={shoppingBagStore.isOpen}
      onClose={shoppingBagStore.onClose}
    />,
    document.body
  );
};

const BagModal = ({ isOpen, onClose }: BagModalProps) => {
  const toastStore = useToastStore();
  const bagStore = useBagStore();
  const router = useRouter();

  const [{ x, opacity }, api] = useSpring(() => ({
    x: 500,
    opacity: 0,
  }));

  useEffect(() => {
    if (!isOpen) api({ x: 500, opacity: 0 });
    else api({ x: 0, opacity: 1 });
  });

  const fetchCart = () => {
    const cartData = bagStore.getCart();

    bagStore.cart = cartData.products;
  };

  const removeProduct = (id: string) => {
    try {
      bagStore.removeFromCart(id);
      toastStore.onOpen('Product was removed!', 'success');
      fetchCart();
    } catch (e) {
      toastStore.onOpen('Sorry, Product can`t be removed!', 'error');
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <animated.div
      style={{ x, opacity }}
      className='fixed z-[100] top-0 right-0 w-1/4 h-[100vh]'>
      <div
        className={
          'flex flex-col justify-between bg-white border border-gray-light h-[100vh]'
        }>
        <CloseButton onClick={onClose} />
        <div className={'overflow-scroll'}>
          <header className={'p-[72px_36px_17px]'}>
            <span>Shopping bag</span>
          </header>

          <main className={'p-[0_36px_36px]'}>
            <h6 className={'text-[12px] text-gray-dark font-normal'}>
              {bagStore.cart.length} items
            </h6>
            <section className={'flex flex-col gap-[22px]'}>
              {bagStore.cart &&
                bagStore.cart.map((item, index) => (
                  <BagCard
                    key={index}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    material={item.material}
                    size={item.size}
                    image={item.images[0].url}
                    sale={item.sale}
                    onClose={() => removeProduct(item.id)}
                  />
                ))}
            </section>
          </main>
        </div>
        {Number(bagStore.total(bagStore.cart)) !== 0 && (
          <footer
            className={
              'p-[36px] flex flex-col gap-[20px] border border-gray-light'
            }>
            <div className={'flex justify-between'}>
              <span>Subtotal ({bagStore.cart.length} items)</span>
              <span>$ {Number(bagStore.total(bagStore.cart))}</span>
            </div>
            <RoundedButton
              text={'VIEW CART'}
              onClick={() => {
                router.push('/cart');
                onClose();
              }}
            />
          </footer>
        )}
      </div>
    </animated.div>
  );
};
