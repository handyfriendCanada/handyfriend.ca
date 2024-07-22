import Image from 'next/image';
import About from '@/components/about';
import Booking from '@/components/booking';
import Contact from '@/components/contact';
import DiscountBlock from '@/components/discountBlock';
import Examples from '@/components/examples';
import PricingPolicy from '@/components/pricingPolicy';
import Questions from '@/components/questions';
import Reviews from '@/components/reviews';
import Services from '@/components/services';
import Button from '@/ui/Button';

export default function Home() {
  return (
    <main>
      <div className='flex justify-center bg-white text-black pt-5'>
        <div className='hidden lg:block  h-[92vh] [@media_(max-height:600px)]:h-auto [@media_(max-height:600px)]:py-10 [@media_(min-height:1024px)]:h-[873px] max-w-screen-container w-full bg-[url("/background.png")] bg-center sm:bg-left bg-no-repeat bg-cover sm:bg-contain'>
          <div className='w-full h-full px-5 flex flex-col [@media_(max-height:800px)_and_(max-width:1024px)]:justify-center [@media_(max-height:800px)]:justify-center lg:justify-center [@media_(max-height:620px)]:gap-5 sm:gap-14 [@media_(max-height:800px)]:bg-none [@media_(max-height:800px)_and_(min-width:1100px)]:bg-[url("/background2.png")]  bg-[url("/background2.png")] bg-no-repeat bg-bottom sm:bg-right-bottom xl:bg-right bg-[length:340px] min-[430px]:bg-[length:430px] sm:bg-[length:470px] xl:bg-contain'>
            <div className='max-w-[748px]'>
              <span className='text-main text-[25px] min-[430px]:text-[34px] sm:text-[67px] font-semibold sm:leading-[72px] leading-[30px] min-[430px]:leading-[40.80px]'>
                Handyman
              </span>
              <span className='text-black text-[25px] min-[430px]:text-[34px] sm:text-[67px] font-semibold sm:leading-[72px] leading-[30px] min-[430px]:leading-[40.80px]'>
                &nbsp;- your reliable assistant <br/> in household chores
              </span>
            </div>
            <p className='max-w-[683px] text-black sm:text-lg sm:font-normal text-sm font-light'>
              I will quickly, efficiently, and reliably perform any work around your house, ensuring
              that every task, whether big or small, is handled with the utmost care and
              professionalism to meet your highest expectations
            </p>
            <div className='flex flex-wrap flex-col md:flex-col lg:flex-row items-start md:items-start gap-3'>
              <Booking />
            </div>
          </div>
        </div>
        <div className='block lg:hidden  max-w-screen-container w-full bg-[url("/background.png")] bg-[center_left_25%]'>
          <div className='w-full h-full px-5 flex flex-col'>
            <div className='max-w-[748px]'>
              <span className='text-main text-[34px] leading-[40.8px] font-semibold'>
                Handyman
              </span>
              <span className='text-black font-semibold  text-[34px] leading-[40.8px]'>
                &nbsp;- your reliable assistant <br/> in household chores
              </span>
            </div>
            <p className='max-w-[683px] text-black text-[14px] leading-[21px] font-light mt-[15px] mb-[35px]'>
              I will quickly, efficiently, and reliably perform any work around your house, ensuring
              that every task, whether big or small, is handled with the utmost care and
              professionalism to meet your highest expectations
            </p>
            <div className='flex flex-wrap flex-col md:flex-col lg:flex-row items-start md:items-start gap-3'>
              <Booking />
            </div>
            <Image className='mx-auto' src="/background2.png" alt="handyman" height={472} width={391} />
          </div>
        </div>
      </div>
      <About />
      <DiscountBlock />
      <Services />
      <PricingPolicy />
      <Examples />
      <Reviews />
      <Questions />
      <Contact />
    </main>
  );
}
