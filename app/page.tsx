import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BrandPromise from '@/components/sections/BrandPromise';
import MarketPosition from '@/components/sections/MarketPosition';
import Differentiators from '@/components/sections/Differentiators';
import SaleabilityQuadrant from '@/components/sections/SaleabilityQuadrant';
import Approach from '@/components/sections/Approach';
import Pricing from '@/components/sections/Pricing';
import WhoWeServe from '@/components/sections/WhoWeServe';
import Proof from '@/components/sections/Proof';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandPromise />
        <MarketPosition />
        <Differentiators />
        <SaleabilityQuadrant />
        <Approach />
        <Pricing />
        <WhoWeServe />
        <Proof />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
