import { useEffect, useState } from 'react';

import { UnderlineLink } from '@/shared/ui/UnderlineLink';
import { getReviews } from '../api';
import { Review } from '../model';
import { ProductReviews } from './product-reviews';

type ProductInfoMenuProps = {
  productId: string;
  description: string;
  weight: number;
  material: string;
};

export const ProductTab = ({
  productId,
  weight,
  description,
  material,
}: ProductInfoMenuProps) => {
  const [activeTab, setActiveTab] = useState('description');

  const [reviews, setReviews] = useState<Review[] | null>(null);

  const fetchReviews = async () => {
    await getReviews(productId).then((reviews) =>
      reviews ? setReviews(reviews) : {}
    );
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <article>
      <nav
        className={
          'w-full flex gap-[96px] pb-[15px] border-b border-gray-light'
        }>
        <UnderlineLink
          text={'Description'}
          onClick={() => setActiveTab('description')}
          isActive={activeTab === 'description'}
        />
        <UnderlineLink
          text={'Additional information'}
          onClick={() => setActiveTab('additional-information')}
          isActive={activeTab === 'additional-information'}
        />
        <UnderlineLink
          text={`Reviews (${reviews?.length ?? ''})`}
          onClick={() => setActiveTab('reviews')}
          isActive={activeTab === 'reviews'}
        />
      </nav>
      <article className={'text-[16px] text-gray-dark font-[500] pt-[42px]'}>
        {activeTab === 'description' && (
          <p className={'text-gray-dark]'}>{description}</p>
        )}

        {activeTab === 'additional-information' && (
          <ul className={'flex flex-col gap-[15px]'}>
            <li className={'text-black'}>
              Weight: <span className={'text-gray-dark'}>{weight} g</span>
            </li>
            <li className={'text-black'}>
              Material: <span className={'text-gray-dark'}>{material}</span>
            </li>
          </ul>
        )}

        {activeTab === 'reviews' && (
          <ProductReviews
            reviews={reviews ?? []}
            productId={productId}
            fetchReviews={fetchReviews}
          />
        )}
      </article>
    </article>
  );
};
