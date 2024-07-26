'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import BrushIcon from '@/assets/icons/brush.svg';
import FenceIcon from '@/assets/icons/fence.svg';
import CouchIcon from '@/assets/icons/couch.svg';
import ElectricityIcon from '@/assets/icons/electricity.svg';
import FloorsIcon from '@/assets/icons/floors.svg';
import PlumbingIcon from '@/assets/icons/plumbing.svg';
import SawIcon from '@/assets/icons/saw.svg';
import DeviceIcon from '@/assets/icons/device.svg';
import AnimatedText from './animatedText';

const containerVariants = {
  initial: { opacity: 0 },
  view: {
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, scale: 0 },
  view: { opacity: 1, scale: 1 },
};

const ServiceBlock = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className='px-2 sm:px-4 py-[40px] sm:py-[70px] rounded-[10px] sm:rounded-[30px] bg-lightBG flex flex-col items-center gap-[50px]'>
      <div className='flex justify-center items-center'>
        <Image
          src={icon}
          alt={title}
          className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h5 className='text-center text-black text-base sm:text-[21px] font-semibold sm:leading-0'>
          {title}
        </h5>
        <p className='text-center text-black text-sm sm:text-base font-light leading-[16.80px] sm:leading-normal'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className='px-5 flex justify-center bg-white py-12 sm:py-16 xl:py-[160px]'>
      <div className='max-w-screen-container w-full flex flex-col gap-5 sm:gap-14'>
        <h3
          id='services'
          className='scroll-m-[100px] xl:scroll-m-[200px] text-center text-black text-[32px] sm:text-5xl font-semibold leading-[67px]'>
          <AnimatedText text='Services' />
        </h3>
        <motion.div
          variants={containerVariants}
          initial='initial'
          whileInView='view'
          viewport={{ once: true }}
          className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[14px] gap-y-[17px] sm:gap-x-7 sm:gap-y-9'>
          <ServiceBlock
            icon={ElectricityIcon}
            title='Electrical Installation Works'
            description='Installation of sockets and switches, connection of household appliances'
          />
          <ServiceBlock
            icon={PlumbingIcon}
            title='Plumbing Works'
            description='Installation and repair of plumbing fixtures, leak elimination, pipe cleaning'
          />
          <ServiceBlock
            icon={BrushIcon}
            title='Painting Works'
            description='Painting walls and ceilings, wallpapering, surface preparation'
          />
          <ServiceBlock
            icon={CouchIcon}
            title='Furniture Installation'
            description='Assembly of furniture, repair of fittings, installation of shelves and cabinets'
          />
          <ServiceBlock
            icon={FloorsIcon}
            title='Flooring Installation'
            description='Installation of laminate, parquet, linoleum, ceramic tiles'
          />
          <ServiceBlock
            icon={FenceIcon}
            title='Fence repair'
            description='Installation and adjustment of fence'
          />
          <ServiceBlock
            icon={SawIcon}
            title='Carpentry Works'
            description='Manufacture and repair of wooden structures, installation of wooden panels'
          />
          <ServiceBlock
            icon={DeviceIcon}
            title='TV wall mouting'
            description='Installation and adjustment of TV'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
