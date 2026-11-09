import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionTone } from "@/enums/ui.enum";
import { PLANS } from "../data/pricing";
import { PlanCard } from "./PlanCard";

export function PricingSection() {
  return (
    <Section id="formules" tone={SectionTone.Emerald}>
      <SectionHeading
        onDark
        eyebrow="Formules"
        title="Un abonnement au service d'un cadre sain."
        description="Pour matcher et discuter, l'abonnement est nécessaire. Il finance les modérateurs qui veillent sur les échanges et la plateforme, pour que tout reste dans l'ordre."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {PLANS.map(({ type, ...plan }, index) => (
          <Reveal key={type} delay={index * 0.15}>
            <PlanCard {...plan} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
