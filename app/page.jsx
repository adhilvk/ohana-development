import Amenities from "./components/Amenities/Amenities";
import Hero from "./components/Hero";
import PropertyHighlights from "./components/PropertyHighlights";
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
    </>
  );
}
