import Amenities from "./components/Amenities/Amenities";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import NextDevelopment from "./components/NextDevelopment/NextDevelopment";
import PropertyHighlights from "./components/PropertyHighlights";
import DesignFloorPlans from "./components/sections/DesignFloorPlans/DesignFloorPlans";
import RegisterInterest from "./components/sections/RegisterInterest/RegisterInterest";
import StickyBgScroll from "./components/StickyBgScroll/StickyBgScroll";
import WhyOhana from './components/WhyOhana/WhyOhana';

export default function Home() {
  return (
    <>
      <Hero />
      <PropertyHighlights />
      <WhyOhana/>
      <Amenities/>
      <StickyBgScroll/>
      <NextDevelopment/>
      <DesignFloorPlans/>
      <RegisterInterest/>
      <Footer/>
    </>
  );
}
