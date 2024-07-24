'use client';

import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './pagination.css';
import { slideTexts } from '@/shared/assets/texts';
import { Slide } from './Slide';

export const MainSwiper = () => {
  return (
    <div className='mt-4'>
      <Swiper
        className={'mySwiper h-[646px] rounded-xl'}
        pagination={{
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        modules={[Pagination]}
        spaceBetween={40}>
        <div className='swiper-pagination' />
        {slideTexts.tempData.map((t, i) => (
          <SwiperSlide key={i}>
            <Slide title={t.title} price={t.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
