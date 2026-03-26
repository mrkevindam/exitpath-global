import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BrandPromise from '@/components/sections/BrandPromise';
import MarketPosition from '@/components/sections/MarketPosition';
import Differentiators from '@/components/sections/Differentiators';
import Approach from '@/components/sections/Approach';
import SaleabilityQuadrant from '@/components/sections/SaleabilityQuadrant';
import Pricing from '@/components/sections/Pricing';
import WhoWeServe from '@/components/sections/WhoWeServe';
import VisionValues from '@/components/sections/VisionValues';
import Proof from '@/components/sections/Proof';
import CTASection from '@/components/sections/CTASection';
import EmailOptIn from '@/components/sections/EmailOptIn';
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
        <Approach />
        <SaleabilityQuadrant />
        <Pricing />
        <WhoWeServe />
        <VisionValues />
        <Proof />
        <CTASection />
        <EmailOptIn />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
