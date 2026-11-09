import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { BackgroundPhoto } from "@/components/ui/BackgroundPhoto";
import { Section } from "@/components/ui/Section";
import { BackgroundLayout, SectionTone } from "@/enums/ui.enum";
import { BACKGROUND_IMAGES } from "../data/images";
import { HeroContent } from "./HeroContent";
import { FULL_PHOTO_OVERLAY } from "./heroOverlay";
import { ProfilePreview } from "./ProfilePreview";

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
          overlayClassName={FULL_PHOTO_OVERLAY}
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
