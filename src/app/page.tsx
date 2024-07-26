import About from '@/components/about';
import Contact from '@/components/contact';
import DiscountBlock from '@/components/discountBlock';
import Examples from '@/components/examples';
import PricingPolicy from '@/components/pricingPolicy';
import Questions from '@/components/questions';
import Reviews from '@/components/reviews';
import Services from '@/components/services';
import Button from '@/ui/Button';

import HomeBlock from '@/components/homeBlock';

export default function Home() {
  return (
    <main>
      <HomeBlock />
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
