'use client';

import './pagination.css';
import 'swiper/css';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Billboard } from '@/shared/model';
import { Slide } from './Slide';

type MainSwiperProps = {
  billboards: Billboard[];
};

export const MainSwiper = ({ billboards }: MainSwiperProps) => {
  return (
    <div className='mt-4 rounded-2xl'>
      <Swiper
        className={'mySwiper h-[646px] '}
        pagination={{
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        spaceBetween={40}>
        <div className='swiper-pagination' />
        {billboards &&
          billboards.map((billboard, i) => (
            <SwiperSlide key={i}>
              <Slide
                id={billboard.product && billboard.product.id}
                title={billboard.label}
                price={billboard.product && billboard.product.price}
                imageUrl={billboard.imageUrl}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
