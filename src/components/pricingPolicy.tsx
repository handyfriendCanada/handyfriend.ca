import React from 'react';
import Image from 'next/image';

import PricingImage from '@/assets/pricing.jpg';
import PricingMobileImage from '@/assets/pricingMobile.jpg';
import AnimatedText from './animatedText';

const PricingPolicy = () => {
  return (
    <div className='flex justify-center bg-white px-5 pb-[50px] sm:pb-12 lg:pb-40'>
      <div className='max-w-screen-container w-full flex flex-col gap-11'>
        <div className='flex items-center justify-between gap-8'>
          <div className='lg:block hidden basis-1/2'>
            <Image
              quality={100}
              width={800}
              height={560}
              className='w-full h-full rounded-[30px]'
              src={PricingImage}
              alt='Pricing'
            />
          </div>
          <div className='pt-8 lg:max-w-[720px] w-full flex flex-col gap-4 sm:gap-14 items-center justify-center'>
            <h3 className='text-center text-black text-[32px] sm:text-5xl font-semibold leading-[67px]'>
              <AnimatedText text='Pricing Policy' />
            </h3>

            <div className='flex flex-col items-center lg:gap-14 gap-10'>
              <Image
                quality={100}
                width={390}
                height={211}
                layout='intrinsic'
                className='max-w-[600px] h-full lg:hidden block rounded-[30px]'
                src={PricingMobileImage}
                alt='Pricing'
              />
              <div className='xs:max-w-[680px] w-full flex flex-col 1xs:flex-row items-center justify-between'>
                <div className='flex flex-col gap-1'>
                  <div className='block items-center gap-5'>
                    <p className='text-center text-black text-[16px] sm:text-[24px] font-normal'>
                      First hour:
                    </p>

                    <div className='flex items-center justify-center gap-2'>
                      <span className='text-black text-[22px] xs:text-[28px] sm:text-[40px] font-normal line-through'>
                        $109
                      </span>
                      <span className='text-main text-[28px] xs:text-[34px] sm:text-[50px] font-bold '>
                        $81.75
                      </span>
                    </div>
                  </div>
                  <p className='text-center text-black text-sm min-[430px]:text-[24px] sm:text-2xl font-normal'>
                    (with 25% discount),
                  </p>
                </div>
                <div className='flex flex-col gap-1 mt-4 1xs:mt-0'>
                  <div className='block items-center gap-5'>
                    <p className='text-center text-black text-[16px] sm:text-[24px] font-normal'>
                      Each additional hour:
                    </p>
                    <div className='flex items-center justify-center gap-2'>
                      <span className='text-black text-[22px] xs:text-[28px] sm:text-[40px] font-normal line-through'>
                        $59
                      </span>
                      <span className='text-main text-[28px]  xs:text-[34px] sm:text-[50px] font-bold '>
                        $44.25
                      </span>
                    </div>
                  </div>
                  <p className='text-center text-black text-sm min-[430px]:text-[24px] sm:text-2xl font-normal'>
                    (with 25% discount),
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <p className='max-w-[680px] italic text-center text-black text-sm sm:text-lg font-light leading-tight'>
                  Please note: Prices listed are for labor only and do not include tax and
                  materials. Minimum order 2 hours.
                </p>

                <p className='text-center'>
                  <span className='text-black text-base sm:text-xl font-medium leading-tight'>
                    The discount is valid for&nbsp;
                  </span>
                  <span className='text-main text-base sm:text-xl font-medium leading-tight'>
                    first order
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPolicy;
