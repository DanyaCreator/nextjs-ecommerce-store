import { useState } from 'react';

import { UnderlineLink } from '@/shared/ui/UnderlineLink';

export const ProductInfoMenu = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <article>
      <nav
        className={
          'w-full flex gap-[96px] pb-[15px] border-b border-gray-light'
        }>
        <UnderlineLink
          text={'Description'}
          href={'javascript:void(0)'} // doesn't work with #
          onClick={() => setActiveTab('description')}
          isActive={activeTab === 'description'}
        />
        <UnderlineLink
          text={'Additional information'}
          href={'javascript:void(0)'}
          onClick={() => setActiveTab('additional-information')}
          isActive={activeTab === 'additional-information'}
        />
        <UnderlineLink
          text={`Reviews (${0})`}
          href={'javascript:void(0)'}
          onClick={() => setActiveTab('reviews')}
          isActive={activeTab === 'reviews'}
        />
      </nav>
      <article className={'text-[16px] text-gray-dark font-[500] pt-[35px]'}>
        {activeTab === 'description' && (
          <p className={'text-gray-dark]'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            dolorem mollitia natus quasi sunt? Accusamus exercitationem impedit
            ipsam itaque laudantium natus necessitatibus, similique
            voluptatibus! Commodi reprehenderit, voluptas! Impedit, possimus,
            quis?
          </p>
        )}

        {activeTab === 'additional-information' && (
          <ul className={'flex flex-col gap-[15px]'}>
            <li className={'text-black'}>
              Weight: <span className={'text-gray-dark'}>{0.3} kg</span>
            </li>
            <li className={'text-black'}>
              Dimentions:{' '}
              <span className={'text-gray-dark'}>15 x 10 x 1 cm</span>
            </li>
            <li className={'text-black'}>
              Colors:{' '}
              <span className={'text-gray-dark'}>Black, Browns, White</span>
            </li>
            <li className={'text-black'}>
              Material: <span className={'text-gray-dark'}>Metal</span>
            </li>
          </ul>
        )}

        {activeTab === 'reviews' && (
          <p className={'text-gray-dark'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          </p>
        )}
      </article>
    </article>
  );
};