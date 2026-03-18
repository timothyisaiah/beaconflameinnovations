import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedSolutions } from "@/components/home/FeaturedSolutions";
import { VisionSection } from "@/components/home/VisionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <StatsSection />
      <FeaturedSolutions />
      <VisionSection />
    </>
  );
}
