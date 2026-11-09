import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { BackgroundPhoto } from "@/components/ui/BackgroundPhoto";
import { Section } from "@/components/ui/Section";
import { BackgroundLayout, SectionTone } from "@/enums/ui.enum";
import { BACKGROUND_IMAGES } from "../data/images";
import { HeroContent } from "./HeroContent";
import { ProfilePreview } from "./ProfilePreview";

const HERO_OVERLAY =
  "bg-linear-to-b from-transparent from-55% to-primary md:bg-linear-to-r md:from-primary-deep/95 md:from-30% md:via-transparent md:via-55% md:to-primary-deep/30";

export function HeroSection() {
  return (
    <Section
      tone={SectionTone.Emerald}
      className="pt-80 md:py-20"
      containerClassName="grid items-center gap-14 md:grid-cols-[minmax(0,30rem)_1fr]"
      background={
        <BackgroundPhoto
          src={BACKGROUND_IMAGES.hero}
          layout={BackgroundLayout.Full}
          overlayClassName={HERO_OVERLAY}
          imageClassName="object-[55%_0%] md:object-top"
          preload
        />
      }
    >
      <HeroContent />
      <Reveal delay={0.5} className="w-full max-w-80 justify-self-center md:justify-self-end">
        <TiltCard>
          <ProfilePreview />
        </TiltCard>
      </Reveal>
    </Section>
  );
}
