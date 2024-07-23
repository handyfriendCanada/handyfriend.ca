'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import MapIcon from '@/assets/icons/map.svg';
import ButtonScroolToTop from './buttonScroolToTop';

const InfoItem = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className='flex items-center  gap-3'>
      <>{icon}</>
      <div className='text-white text-lg font-normal'>{text}</div>
    </div>
  );
};

const Footer = () => {
  const onCopy = () => {
    navigator.clipboard.writeText('+1 6478289633');
    toast.info('Copied');
  };

  return (
    <footer className='bg-transparent'>
      <div className='bg-blue flex justify-center'>
        <div className='max-w-[1600px] w-full py-12 flex justify-center'>
          <div className='flex flex-col items-center gap-12'>
            <ButtonScroolToTop />
            <div className='lg:pl-20 flex items-center flex-col lg:flex-row justify-between gap-7 lg:gap-36'>
              <a
                className='cursor-pointer'
                target='_blank'
                href='https://maps.app.goo.gl/WUn9pMQ6eR4fBv7N8'>
                <InfoItem
                  icon={<Image width={20} alt='map' src={MapIcon} />}
                  text='M6P 2S3 Toronto'
                />
              </a>
              <button onClick={onCopy}>
                <InfoItem
                  icon={<Image width={25} alt='phone' src={PhoneIcon} />}
                  text='+1 6478289633'
                />
              </button>
              <a className='cursor-pointer' href='mailto:contact@handyfriend.ca'>
                <InfoItem
                  icon={<Image width={31} alt='clock' src={MailIcon} />}
                  text='contact@handyfriend.ca'
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='py-2 bg-darkBlue text-center text-white text-sm font-normal leading-[34px]'>
        Copyright © 2024
      </div>
    </footer>
  );
};

export default Footer;
