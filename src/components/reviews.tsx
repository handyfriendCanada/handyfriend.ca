'use client';

import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import avatar1Image from '@/assets/avatar1.png';
import avatar2Image from '@/assets/avatar2.png';
import avatar3Image from '@/assets/avatar3.png';
import avatar4Image from '@/assets/avatar4.png';
import quotesIcon from '@/assets/icons/quotes.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    user: 'Michael S.',
    avatar: avatar1Image,
    text: 'I needed some electrical work done in my new apartment, and the handyman did an excellent job. He was punctual, professional, and ensured everything was working perfectly before leaving. Highly recommend!',
  },
  {
    user: 'David W.',
    avatar: avatar2Image,
    text: 'I had a leaky faucet that was driving me crazy. The handyman came over, identified the problem quickly, and fixed it in no time. Very efficient and reasonably priced service!',
  },
  {
    user: 'Emily R.',
    avatar: avatar3Image,
    text: "I recently had my entire living room repainted by this service, and I couldn't be happier with the result. The walls look fantastic, and the attention to detail was impressive. Will definitely use their services again",
  },
  {
    user: 'John D.',
    avatar: avatar4Image,
    text: 'I needed help assembling some new furniture, and the handyman was a lifesaver. He was very knowledgeable and got everything put together much faster than I could have done on my own. Excellent service!',
  },
  {
    user: 'David W.',
    avatar: avatar2Image,
    text: 'I had a leaky faucet that was driving me crazy. The handyman came over, identified the problem quickly, and fixed it in no time. Very efficient and reasonably priced service!',
  },
  {
    user: 'Emily R.',
    avatar: avatar3Image,
    text: 'I needed some electrical work done in my new apartment, and the handyman did an excellent job. He was punctual, professional, and ensured everything was working perfectly before leaving. Highly recommend!',
  },
];

const ReviewCard = ({
  avatar,
  user,
  text,
}: {
  avatar: StaticImageData;
  user: string;
  text: string;
}) => {
  return (
    <div className='max-w-[380px] h-full px-2 sm:px-5 pt-6 bg-white rounded-[10px] sm:rounded-[30px] flex flex-col items-center gap-5'>
      <div className='flex-1 flex flex-col items-center gap-5'>
        <Image src={quotesIcon} alt='quotes' />
        <p className='mb-16 max-h-[190px] sm:max-h-[220px] overflow-auto text-center text-black text-[15px] font-light leading-relaxed'>
          {text}
        </p>
      </div>
      <div className='flex flex-col gap-2 absolute -bottom-[80px]'>
        <div className=''>
          <Image
            quality={100}
            sizes='(max-width: 320px) 66px, 87px'
            width={87}
            height={87}
            src={avatar}
            layout='intrinsic'
            alt='user'
          />
        </div>
        <p className='text-center text-black text-xl font-normal'>{user}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className='pt-5 md:pt-20 bg-main flex justify-center items-center'>
      <div className='bg-main w-full max-w-screen-container'>
        <div className='md:bg-[url("/reviews-bg.png")] md:bg-no-repeat md:bg-right bg-contain'>
          <div className='px-5 py-10 lg:py-24 xl:py-12 pt-5 lg:pt-[40px] xl:pt-[80px] w-full flex flex-col gap-10'>
            <h3
              id='reviews'
              className='scroll-m-[100px] xl:scroll-m-[200px] text-white text-[32px] sm:text-5xl font-semibold leading-[30px] xs:leading-[67px]'>
              Customer reviews
            </h3>
            <Swiper
              containerModifierClass='reviews-container-'
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                modifierClass: 'reviews-pagination',
                bulletClass: 'reviews-bullet',
                bulletActiveClass: 'reviews-bullet-active',
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                420: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className=''>
              {reviews.map((review, index) => (
                <SwiperSlide className='h-full' key={review.user + index}>
                  <ReviewCard text={review.text} avatar={review.avatar} user={review.user} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
