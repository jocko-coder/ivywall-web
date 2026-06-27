import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import PressBand from "@/components/sections/PressBand";
import Highlights from "@/components/sections/Highlights";
import StickyStory from "@/components/sections/StickyStory";
import HorizontalRooms from "@/components/sections/HorizontalRooms";
import DiningPreview from "@/components/sections/DiningPreview";
import ExperiencesBento from "@/components/sections/ExperiencesBento";
import ReviewsBand from "@/components/sections/ReviewsBand";
import LocationBand from "@/components/sections/LocationBand";
import CtaFooter from "@/components/sections/CtaFooter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <PressBand />
      <StickyStory />
      <Highlights />
      <HorizontalRooms />
      <DiningPreview />
      <ExperiencesBento link="/experiences" />
      <ReviewsBand />
      <LocationBand />
      <CtaFooter />
    </>
  );
}
