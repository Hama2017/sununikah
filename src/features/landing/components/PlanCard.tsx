import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { Text } from "@/components/ui/Text";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { AppRoute } from "@/enums/route.enum";
import { TextVariant } from "@/enums/ui.enum";

type PlanCardProps = {
  audience: string;
  title: string;
  price: string;
  features: string[];
};

export function PlanCard({ audience, title, price, features }: PlanCardProps) {
  return (
    <Card className="flex h-full flex-col p-8 text-primary-deep">
      <div>
        <VerifiedBadge label={audience} />
      </div>
      <Text as="h3" variant={TextVariant.HeadlineMd} className="mt-5">
        {title}
      </Text>
      <Text as="p" variant={TextVariant.Display} className="mt-4">
        {price}
      </Text>
      <ul className="mt-6 mb-8 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-body-md text-muted">
            <Check className="mt-0.5 size-5 shrink-0 text-mint" aria-hidden />
            {feature}
          </li>
        ))}
      </ul>
      <LinkButton href={AppRoute.SignUp} className="mt-auto">
        Choisir cette formule
      </LinkButton>
    </Card>
  );
}
