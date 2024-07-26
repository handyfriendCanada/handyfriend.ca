'use client';

import React from 'react';
import Image from 'next/image';

import About1Image from '@/assets/about1.jpg';
import About2Image from '@/assets/about2.jpg';
import About3Image from '@/assets/about3.jpg';
import AnimatedNumbers from './animatedNumbers';
import AnimatedText from './animatedText';
import { motion } from 'framer-motion';

const StatsBlock = ({ title, subtitle }: { title: number; subtitle: string }) => {
  return (
    <div className='flex flex-col items-center gap-1 sm:gap-3'>
      <p className='text-main text-[40px] sm:text-[50px] xl:text-[64px] font-semibold'>
        <span className='sr-only'>{title}</span>
        {title === 6 && '+'}
        <AnimatedNumbers value={title} />
        {/* {title} */}
      </p>
      <p className='text-center text-black text-[18px] sm:text-xl font-semibold'>{subtitle}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className='px-5 flex justify-center'>
      <div className='pt-10 pb-32 sm:pt-20 sm:pb-40 max-w-screen-container w-full items-center 2xl:items-start flex flex-col lg:flex-row gap-8 xl:gap-12'>
        <div className='flex justify-center gap-2 sm:gap-4 order-last lg:order-none mt-[30px] md:mt-0'>
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}>
            <Image
              quality={100}
              width={341}
              height={605}
              className='rounded-[10px] lg:rounded-[30px]'
              src={About1Image}
              alt='handyman'
            />
          </motion.div>
          <div className='relative top-16 flex flex-col gap-2 sm:gap-4'>
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: '0%', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <Image
                src={About2Image}
                alt='instruments'
                quality={100}
                width={445}
                height={275}
                className='rounded-[10px] lg:rounded-[30px]'
              />
            </motion.div>
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: '0%', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <Image
                src={About3Image}
                alt='handyman'
                quality={100}
                width={384}
                height={361}
                className='rounded-[10px] lg:rounded-[30px]'
              />
            </motion.div>
          </div>
        </div>
        <div className='basis-1/2 flex flex-col gap-5 sm:gap-10'>
          <h3
            id='about'
            className='scroll-m-[100px] xl:scroll-m-[200px] text-black text-[32px] sm:text-5xl font-semibold leading-[67px]'>
            <AnimatedText
              text='About me'
              className='scroll-m-[100px] xl:scroll-m-[200px] text-black text-[32px] sm:text-5xl font-semibold leading-[67px]'
            />
            {/* <span className="sr-only">About me</span> */}
          </h3>
          <div className='flex flex-col gap-8 sm:gap-12'>
            <div className='flex flex-col gap-5 text-black text-sm sm:text-lg font-light lg:max-w-[762px] w-full'>
              <p>
                I am a professional handyman, always ready to help you with any household chores. My
                many years of experience and high level of qualifications allow me to perform work
                of any complexity, from minor repairs to large projects. I carefully approach each
                order, guaranteeing high quality workmanship and the use of the best materials.
              </p>
              <p>
                I value each client and always strive to achieve maximum satisfaction from the work
                performed. I am ready to provide you with advice, help with planning and
                implementing your ideas, ensuring that any issues related to your home are resolved
                quickly and efficiently. My goal is to make your home a comfortable and cozy place
                where you feel happy and safe.
              </p>
            </div>
            <div className='flex md:max-w-[500px] lg:max-w-none justify-between gap-0 xs:gap-11 xl:max-w-[700px]'>
              <StatsBlock title={95} subtitle='Projects' />
              <StatsBlock title={95} subtitle='Happy clients' />
              <StatsBlock title={6} subtitle='Years' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
