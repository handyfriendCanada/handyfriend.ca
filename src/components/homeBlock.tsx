'use client';

import React from 'react';
import AnimatedText from '@/components/animatedText';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Booking from '@/components/booking';

const HomeBlock = () => {
  return (
    <div className='px-5 pt-4 lg:pt-0 flex justify-center bg-white text-black'>
      <div className='hidden lg:block h-[92vh] [@media_(max-height:600px)]:h-auto [@media_(max-height:600px)]:py-10 [@media_(min-height:1024px)]:h-[810px] max-w-screen-container w-full bg-[url("/background.png")] bg-center sm:bg-left bg-no-repeat bg-cover sm:bg-contain'>
        <div className='overflow-hidden w-full h-full flex flex-col [@media_(max-height:800px)_and_(max-width:1024px)]:justify-center [@media_(max-height:800px)]:justify-center lg:justify-center [@media_(max-height:620px)]:gap-5 sm:gap-8 [@media_(max-height:800px)]:bg-none [@media_(max-height:800px)_and_(min-width:1100px)]:bg-[url("/background2.png")] bg-[url("/background2.png")] bg-no-repeat bg-bottom sm:bg-right-bottom xl:bg-[calc(100%-6rem)_center] bg-[length:340px] min-[430px]:bg-[length:430px] sm:bg-[length:470px] xl:bg-contain'>
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col gap-14'>
            <h1 className='max-w-[748px]'>
              <span className='text-main text-[25px] min-[430px]:text-[34px] sm:text-[67px] font-semibold sm:leading-[72px] leading-[30px] min-[430px]:leading-[40.80px]'>
                Handyman
              </span>
              <AnimatedText
                text=' - your reliable assistant in household chores'
                el='span'
                className='text-black text-[25px] min-[430px]:text-[34px] sm:text-[67px] font-semibold sm:leading-[72px] leading-[30px] min-[430px]:leading-[40.80px] inline'
              />
            </h1>

            <motion.p
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='max-w-[683px] text-black sm:text-lg sm:font-normal text-sm font-light'>
              I will quickly, efficiently, and reliably perform any work around your house, ensuring
              that every task, whether big or small, is handled with the utmost care and
              professionalism to meet your highest expectations
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className='flex flex-wrap flex-col md:flex-col lg:flex-row items-start md:items-start gap-3'>
            <Booking />
          </motion.div>
        </div>
      </div>

      <div className='block lg:hidden max-w-screen-container w-full bg-[url("/background.png")] bg-[center_left_25%]'>
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='w-full h-full flex flex-col'>
          <h1 className='max-w-[748px]'>
            <span className='text-main text-[34px] leading-[40.8px] font-semibold'>Handyman</span>
            <AnimatedText
              text=' - your reliable assistant in household chores'
              el='span'
              className='text-black font-semibold  text-[34px] leading-[40.8px] inline'
            />
          </h1>
          <motion.p
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='max-w-[683px] text-black text-[14px] leading-[21px] font-light mt-[15px] mb-[35px]'>
            I will quickly, efficiently, and reliably perform any work around your house, ensuring
            that every task, whether big or small, is handled with the utmost care and
            professionalism to meet your highest expectations
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className='flex flex-wrap flex-col md:flex-col lg:flex-row items-start md:items-start gap-3'>
            <Booking />
          </motion.div>
          <Image
            className='mx-auto'
            src='/background2.png'
            alt='handyman'
            height={472}
            width={391}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBlock;
