import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionTone } from "@/enums/ui.enum";
import { FAQ_ITEMS } from "../data/faq";
import { FaqItem } from "./FaqItem";

export function FaqSection() {
  return (
    <Section id="faq" tone={SectionTone.Sand} containerClassName="max-w-208">
      <SectionHeading eyebrow="Questions" title="Ce que vous souhaitez savoir." />
      <div className="mt-10 border-b border-gold/30">
        {FAQ_ITEMS.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.08}>
            <FaqItem {...item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
