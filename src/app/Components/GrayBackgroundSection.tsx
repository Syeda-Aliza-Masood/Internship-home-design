
import HeroSection from './HeroSection';
import DealsSection from './DealsSection';
import HomeSection from './HomeSection';
import ElectronicSection from './ElectronicSection'
import SendQuote from './Sendquote';
import RecommendedSection from './RecommendedSection';
import ServiceSection from './ServiceSection';
import SuppliersSection from './SuppliersSection';
import SubscribeSection from './SubscribeSection';

const GrayBackgroundSection = () => {
  return (
    <div className="w-[1350px] h-max bg-gray-200 mx-auto flex flex-col items-center justify-center">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Deals Section */}
      <DealsSection />
      
      {/* Home Section */}
      <HomeSection />

      {/*Electronic Section */}
      <ElectronicSection />

      {/*Send Quote Section */}
      <SendQuote />

       {/*Recommended Section*/}
       <RecommendedSection />

       {/*Service Section*/}
       <ServiceSection />

       {/*Suppliers Section*/}
       <SuppliersSection />

       {/*Subscribe Section*/}
       <SubscribeSection />


    </div>
  );
};

export default GrayBackgroundSection;
