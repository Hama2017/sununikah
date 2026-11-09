import { ApproachSection } from "./components/ApproachSection";
import { CompatibilitySection } from "./components/CompatibilitySection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { HeroSection } from "./components/HeroSection";
import { JourneySection } from "./components/JourneySection";
import { PricingSection } from "./components/PricingSection";
import { PrivacySection } from "./components/PrivacySection";
import { VerseSection } from "./components/VerseSection";

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ApproachSection />
      <PrivacySection />
      <CompatibilitySection />
      <VerseSection />
      <JourneySection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
