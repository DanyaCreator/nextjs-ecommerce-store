import { animated, useSpring } from '@react-spring/web';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useShoppingBagStore } from '@/shared/model/stores';
import { RoundedButton } from '@/shared/ui/buttons';

type BagProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Bag = () => {
  const shoppingBagStore = useShoppingBagStore();

  return createPortal(
    <BagModal
      isOpen={shoppingBagStore.isOpen}
      onClose={shoppingBagStore.onClose}
    />,
    document.body
  );
};

const BagModal = ({ isOpen, onClose }: BagProps) => {
  const [{ x }, api] = useSpring(() => ({
    x: 500,
  }));

  useEffect(() => {
    if (!isOpen) api({ x: 500 });
    else api({ x: 0 });
  });

  return (
    <animated.div
      style={{ x }}
      className='fixed z-[100] top-0 right-0 w-1/4 h-[100vh]'>
      <div
        className={
          'p-[36px] flex flex-col bg-white border border-gray-light h-[100vh]'
        }>
        <button
          onClick={onClose}
          className={'p-2 fixed top-2 right-2 text-gray-dark'}>
          x
        </button>
        <span className={'pt-[36px]'}>Shopping bag</span>
        <div></div>
        <div className={'flex flex-col gap-[20px]'}>
          <div>
            <span>Subtotal (items)</span>
            <span>& 100,00</span>
          </div>
          <RoundedButton text={'VIEW CART'} />
        </div>
      </div>
    </animated.div>
  );
};
