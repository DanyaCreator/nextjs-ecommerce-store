import clsx from 'clsx';
import { format } from 'date-fns';
import Image from 'next/image';

import { dmSans } from '@/shared/assets/fonts';
import { starIcon, starOutlinedIcon } from '@/shared/assets/icons';
import { Review } from '../model';
import { ProductReviewForm } from './product-review-form';

type ProductReviewsProps = {
  reviews: Review[];
  productId: string;
  fetchReviews: () => Promise<void>;
  productName: string;
};

export const ProductReviews = ({
  reviews,
  productId,
  fetchReviews,
  productName,
}: ProductReviewsProps) => {
  return (
    <section className='h-[580px] flex gap-[87px]'>
      <div className='flex-1 flex flex-col gap-[52px]'>
        <h3 className={`${dmSans.className} text-black font-normal`}>
          {reviews.length} Reviewers for {productName}
        </h3>
        <div className='flex flex-col w-full overflow-auto'>
          {reviews.map((r) => (
            <div
              key={r.id}
              className={clsx(
                'py-6 flex flex-col gap-6',
                'border-b border-solid border-gray-light',
                'last:border-b-0'
              )}>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4 items-end'>
                  <h3 className={`${dmSans.className} font-normal text-black`}>
                    {r.name}
                  </h3>
                  <span
                    className={`${dmSans.className} font-normal text-medium`}>
                    {format(r.createdAt, 'do MMMM, yyyy')}
                  </span>
                </div>
                <div className='flex gap-[10px]'>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Image
                      key={i}
                      src={starIcon}
                      alt='star-icon'
                      width={18}
                      height={18}
                    />
                  ))}
                  {Array.from({ length: 5 - r.rating }).map((_, i) => (
                    <Image
                      key={i}
                      src={starOutlinedIcon}
                      alt='star-outlined-icon'
                      width={18}
                      height={18}
                    />
                  ))}
                </div>
              </div>
              <h5 className={`${dmSans.className} font-normal`}>{r.text}</h5>
            </div>
          ))}
        </div>
      </div>
      <ProductReviewForm productId={productId} fetchReviews={fetchReviews} />
    </section>
  );
};
