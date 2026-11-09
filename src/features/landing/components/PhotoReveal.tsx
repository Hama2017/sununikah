import { Reveal } from "@/components/motion/Reveal";
import { BlurDissolve } from "@/components/motion/BlurDissolve";
import { Card } from "@/components/ui/Card";
import { Portrait } from "@/components/ui/Portrait";
import { Text } from "@/components/ui/Text";
import { PortraitState, TextVariant } from "@/enums/ui.enum";

const STAGES = [
  { state: PortraitState.Blurred, title: "Avant", text: "Photo floutée pour tous" },
  { state: PortraitState.Revealed, title: "Après", text: "Intérêt mutuel exprimé" },
];

export function PhotoReveal() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {STAGES.map(({ state, title, text }, index) => (
        <Reveal key={title} delay={index * 0.2}>
          <Card className="flex flex-col items-center text-center text-primary-deep">
            {state === PortraitState.Revealed ? (
              <BlurDissolve>
                <Portrait state={state} className="size-24 md:size-32" />
              </BlurDissolve>
            ) : (
              <Portrait state={state} className="size-24 md:size-32" />
            )}
            <Text as="h3" variant={TextVariant.HeadlineSm} className="mt-5">
              {title}
            </Text>
            <Text variant={TextVariant.BodySm} className="mt-1 text-muted">
              {text}
            </Text>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
