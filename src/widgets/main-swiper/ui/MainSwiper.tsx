'use client';

import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './pagination.css';
import { slideTexts } from '@/shared/assets/texts';
import { Slide } from './Slide';
import { useEffect, useState } from 'react';
import { BillboardEntity } from '@/shared/model';
import { getBillboards } from '@/shared/api/get-billboards';

export const MainSwiper = () => {
  const [billboards, setBillboards] = useState<BillboardEntity[] | null>(null);

  const fetchBillboards = async () => {
    await getBillboards().then((result) => {
      result ? setBillboards(result) : setBillboards(null);
    });
  };

  useEffect(() => {
    fetchBillboards();
  }, []);

  return (
    <div className='mt-4'>
      <Swiper
        className={'mySwiper h-[646px] rounded-xl'}
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
