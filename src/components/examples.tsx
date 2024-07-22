'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import example1 from '@/assets/example1.jpg';
import example2 from '@/assets/example2.jpg';
import example3 from '@/assets/example3.jpg';
import example4 from '@/assets/example4.jpg';
import example5 from '@/assets/example5.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const ExampleCard = ({ image, title }: { image: StaticImageData; title: string }) => {
  return (
    <div className='flex flex-col items-center gap-3 sm:gap-9'>
      <Image quality={100} src={image} alt='example' />
      <p className='text-center text-black text-[14px] sm:text-[21px] font-semibold'>{title}</p>
    </div>
  );
};

const Examples = () => {
  return (
    <div className='px-5 flex justify-center items-center'>
      <div className='max-w-[1920px] w-full flex flex-col gap-7 sm:gap-14 py-10'>
        <h3
          id='examples'
          className='scroll-m-[120px] xl:scroll-m-[170px] text-center text-black text-[32px] sm:text-5xl font-semibold leading-[30px] xs:leading-[67px]'>
          Examples of my works
        </h3>
        <div className='w-full relative'>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}>
            <SwiperSlide>
              <ExampleCard title='Flooring Installation' image={example1} />
            </SwiperSlide>
            <SwiperSlide>
              <ExampleCard title='Flooring Installation' image={example2} />
            </SwiperSlide>
            <SwiperSlide>
              <ExampleCard title='Flooring Installation' image={example3} />
            </SwiperSlide>
            <SwiperSlide>
              <ExampleCard title='Flooring Installation' image={example4} />
            </SwiperSlide>
            <SwiperSlide>
              <ExampleCard title='Flooring Installation' image={example5} />
            </SwiperSlide>
            <SwiperSlide>
              <ExampleCard title='Flooring Installation' image={example2} />
            </SwiperSlide>
            <SwiperSlide>
              <ExampleCard title='Flooring Installation' image={example3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Examples;
