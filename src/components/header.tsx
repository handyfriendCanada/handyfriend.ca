'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion, Transition, SVGMotionProps } from 'framer-motion';
import clsx from 'clsx';
import Booking from './booking';
import { toast } from 'react-toastify';

import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import MapIcon from '@/assets/icons/map.svg';
import LogoImage from '@/assets/icons/logo.svg';

const Logo = ({ onClick }: { onClick?: () => void }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });

    if (onClick) {
      onClick();
    }
  };

  return (
    <button className='w-[220px] xs:w-[247px]' onClick={scrollToTop}>
      <Image alt='logo' src={LogoImage} />
    </button>
  );
};

const InfoItem = ({
  icon,
  text,
  color = 'black',
}: {
  icon: any;
  text: string;
  color?: 'white' | 'black';
}) => {
  return (
    <div className='flex items-center  gap-3'>
      <>{icon}</>
      <div className={clsx(`text-${color}`, 'text-sm font-normal')}>{text}</div>
    </div>
  );
};

interface Props {
  isOpen?: boolean;
  onClick?: () => void;
  width: number;
  height: number;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: SVGMotionProps<SVGLineElement>;
}

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = '#000',
  lineProps,
  transition,
  ...props
}: Props) => {
  const variant = isOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      stroke: '#000',
      rotate: 0,
      translateY: 0,
    },
    opened: {
      stroke: color,
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      rotate: 0,
      stroke: '#000',
      opacity: 1,
    },
    opened: {
      rotate: 45,
      stroke: color,
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      stroke: '#000',
      rotate: 0,
      translateY: 0,
    },
    opened: {
      stroke: color,
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    exit: 'closed',
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      key={'svg'}
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow='visible'
      preserveAspectRatio='none'
      className='cursor-pointer'
      width={width}
      height={height}
      {...props}>
      <motion.line
        key='line1'
        x1='0'
        x2={unitWidth}
        y1='0'
        y2='0'
        variants={top}
        initial='closed'
        exit='closed'
        {...lineProps}
      />
      <motion.line
        key='line2'
        x1='0'
        x2={unitWidth}
        y1='2'
        y2='2'
        variants={center}
        initial='closed'
        exit='closed'
        {...lineProps}
      />
      <motion.line
        key='line3'
        x1='0'
        x2={unitWidth}
        y1='4'
        y2='4'
        variants={bottom}
        initial='closed'
        exit={'closed'}
        {...lineProps}
      />
    </motion.svg>
  );
};

const BurgerMenu = () => {
  let [isOpen, setIsOpen] = useState(false);

  const onClickItem = (event: any) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');

    setIsOpen(false);

    setTimeout(() => {
      const anchorElement = document.querySelector(href);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  const onCopy = () => {
    navigator.clipboard.writeText('+1-647-828-96-33');
    toast.info('Copied');
  };

  return (
    <>
      <div className='z-40 bg-white bg-[#282828]/30 flex items-center justify-between p-5'>
        <Logo />
        <div>
          <MenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            color={clsx(isOpen ? '#fff' : '#000')}
            strokeWidth='2'
            width={28}
            height={18}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed z-10 inset-0 bg-[#282828]/30'
            />
            <div className='fixed z-10 top-0 left-0 flex w-screen'>
              <div
                className={clsx(`absolute top-[32px] xs:top-[35px] `)}
                style={{
                  left: `${document.documentElement.clientWidth - 24 - 24}px`,
                }}>
                <MenuButton
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                  color={clsx(isOpen ? '#fff' : '#000')}
                  strokeWidth='2'
                  width={28}
                  height={18}
                />
              </div>
              <motion.div
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                exit={{ x: -400 }}
                transition={{ ease: 'easeInOut', duration: 0.35 }}>
                <DialogPanel className='max-w-[267px] xs:max-w-[323px] w-full h-screen space-y-4 bg-white p-5 flex flex-col gap-5 [@media_(max-height:600px)]:overflow-auto'>
                  <div className='flex-1 flex flex-col [@media_(max-height:600px)]:gap-4 gap-12'>
                    <Logo onClick={() => setIsOpen(!isOpen)} />
                    <div className='flex flex-col justify-start [@media_(max-height:600px)]:gap-4 gap-8'>
                      <a onClick={onClickItem} href='#about'>
                        About me
                      </a>
                      <a onClick={onClickItem} href='#services'>
                        Services
                      </a>
                      <a onClick={onClickItem} href='#examples'>
                        Exemples
                      </a>
                      <a onClick={onClickItem} href='#reviews'>
                        Reviews
                      </a>
                      <a onClick={onClickItem} href='#questions'>
                        FAQ
                      </a>
                      <a onClick={onClickItem} href='#contacts'>
                        Contacts
                      </a>
                    </div>
                  </div>
                  <div className='text-white flex flex-col justify-start [@media_(max-height:600px)]:gap-4 gap-8'>
                    <a
                      className='cursor-pointer'
                      target='_blank'
                      href='https://maps.app.goo.gl/WUn9pMQ6eR4fBv7N8'>
                      <InfoItem
                        icon={
                          <svg
                            width='14'
                            height='19'
                            viewBox='0 0 14 19'
                            className='fill-black'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M5.94964 18.3014C0.931466 11.0265 0 10.2799 0 7.60628C0 3.944 2.96884 0.975159 6.63112 0.975159C10.2934 0.975159 13.2622 3.944 13.2622 7.60628C13.2622 10.2799 12.3308 11.0265 7.31261 18.3014C6.9833 18.7771 6.27891 18.7771 5.94964 18.3014ZM6.63112 10.3692C8.15707 10.3692 9.39409 9.13223 9.39409 7.60628C9.39409 6.08033 8.15707 4.84331 6.63112 4.84331C5.10517 4.84331 3.86815 6.08033 3.86815 7.60628C3.86815 9.13223 5.10517 10.3692 6.63112 10.3692Z' />
                          </svg>
                        }
                        text='M6P 2S3 Toronto'
                      />
                    </a>
                    <button onClick={onCopy}>
                      <InfoItem
                        icon={
                          <svg
                            width='17'
                            height='18'
                            viewBox='0 0 17 18'
                            className='fill-black'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12.5695 17.1028C9.23722 17.0985 6.04262 15.7728 3.68631 13.4165C1.32999 11.0602 0.00431929 7.86555 0 4.53323C0 3.53746 0.395567 2.58248 1.09968 1.87837C1.80379 1.17425 2.75877 0.778688 3.75454 0.778688C3.9654 0.777082 4.17591 0.796219 4.38302 0.835823C4.58324 0.865451 4.78007 0.914659 4.97069 0.982739C5.10474 1.02978 5.22421 1.11099 5.31725 1.21835C5.4103 1.32572 5.47371 1.45551 5.50122 1.59489L6.61942 6.49212C6.64956 6.62505 6.64593 6.76341 6.60886 6.89458C6.57179 7.02574 6.50246 7.14554 6.40721 7.24303C6.3011 7.3573 6.29294 7.36546 5.289 7.88783C6.09296 9.65153 7.50353 11.0679 9.26392 11.8791C9.79445 10.867 9.80262 10.8588 9.91688 10.7527C10.0144 10.6574 10.1342 10.5881 10.2653 10.5511C10.3965 10.514 10.5349 10.5104 10.6678 10.5405L15.565 11.6587C15.6999 11.69 15.8247 11.7551 15.9275 11.8479C16.0303 11.9407 16.1078 12.0582 16.1527 12.1892C16.2216 12.383 16.2735 12.5823 16.3078 12.7851C16.3406 12.9902 16.357 13.1976 16.3567 13.4054C16.3417 14.3969 15.935 15.3422 15.2255 16.0349C14.5159 16.7276 13.5611 17.1115 12.5695 17.1028Z' />
                          </svg>
                        }
                        text='+1-647-828-96-33'
                      />
                    </button>
                    <a className='cursor-pointer' href='mailto:contact@handyfriend.ca'>
                      <InfoItem
                        icon={
                          <svg
                            width='17'
                            height='18'
                            viewBox='0 0 32 25'
                            className='fill-black'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M5.22221 0C2.33806 0 0 2.23857 0 4.99999V5.50324L15.6669 13.5803L31.3333 5.50352V4.99999C31.3333 2.23857 28.9953 0 26.1111 0H5.22221Z' />
                            <path d='M31.3333 8.34351L16.2859 16.1012C15.8994 16.3004 15.4344 16.3004 15.0479 16.1012L0 8.34326V20.0006C0 22.7621 2.33806 25.0006 5.22221 25.0006H26.1111C28.9953 25.0006 31.3333 22.7621 31.3333 20.0006V8.34351Z' />
                          </svg>
                        }
                        text='contact@handyfriend.ca'
                      />
                    </a>
                  </div>
                </DialogPanel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

const HeaderLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      className='relative text-black hover:text-main cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-main before:origin-center before:h-[2px] before:w-0 hover:before:w-[100%] before:bottom-0 before:left-0 '
      href={href}>
      {children}
    </a>
  );
};

export const Header = (): JSX.Element => {
  const onCopy = () => {
    navigator.clipboard.writeText('+1-647-828-96-33');
    toast.info('Copied');
  };

  return (
    <header className='bg-lightBG'>
      <div className='hidden xl:block'>
        <div className='py-[10px] px-[25px] w-full flex justify-center bg-blue'>
          <div className='text-black max-w-screen-container w-full flex justify-start gap-20'>
            <a
              className='cursor-pointer'
              target='_blank'
              href='https://maps.app.goo.gl/WUn9pMQ6eR4fBv7N8'>
              <InfoItem
                color='white'
                icon={<Image alt='map' src={MapIcon} />}
                text='M6P 2S3 Toronto'
              />
            </a>
            <button onClick={onCopy}>
              <InfoItem
                color='white'
                icon={<Image alt='phone' src={PhoneIcon} />}
                text='+1-647-828-96-33'
              />
            </button>
            <a className='cursor-pointer' href='mailto:contact@handyfriend.ca'>
              <InfoItem
                color='white'
                icon={<Image width={18} alt='clock' src={MailIcon} />}
                text='contact@handyfriend.ca'
              />
            </a>
          </div>
        </div>
        <div className='px-5 flex justify-center'>
          <div className='max-w-screen-container w-full py-[28px] flex justify-between'>
            <div className='flex items-center gap-12 2xl:gap-16'>
              <button
                className='w-[220px] xs:w-[232px]'
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                  });
                }}>
                <Image alt='logo' src={LogoImage} />
              </button>
              <div className='text-black flex items-center gap-[45px] 2xl:gap-[70px]'>
                <HeaderLink href='#about'>About me</HeaderLink>
                <HeaderLink href='#services'>Services</HeaderLink>
                <HeaderLink href='#examples'>Exemples</HeaderLink>
                <HeaderLink href='#reviews'>Reviews</HeaderLink>
                <HeaderLink href='#questions'>FAQ</HeaderLink>
                <HeaderLink href='#contacts'>Contacts</HeaderLink>
              </div>
            </div>
            <Booking />
          </div>
        </div>
      </div>

      <div className='block xl:hidden'>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
