import Button from '@/ui/Button';
import React from 'react';
import Booking from './booking';

const DiscountBlock = () => {
  return (
    <div className='px-5 pt-[65px] pb-[45px] lg:pb-[85px] flex justify-center bg-main'>
      <div className='max-w-screen-container w-full flex flex-col xl:flex-row gap-8 justify-between items-center'>
        <div className='text-left lg:text-center xl:text-left flex flex-col gap-4 lg:gap-0'>
          <h2 className='max-w-[1120px] text-black text-3xl sm:text-[44px] font-semibold leading-[30px] sm:leading-[67px]'>
            Get 25% off your first handyman service order!
          </h2>
          <p className='max-w-[1299px] text-black text-base sm:text-[20px] font-normal'>
            Hello! I&apos;m excited to offer you a special deal available only for the month of
            August. Whether you need repairs, installations, or general maintenance, our skilled
            handymen are ready to help you. Book now and take advantage of this limited-time offer!
          </p>
        </div>
        <Booking secondary />
      </div>
    </div>
  );
};

export default DiscountBlock;
