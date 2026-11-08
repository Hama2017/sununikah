import type { LucideIcon } from "lucide-react";
import { Text } from "@/components/ui/Text";
import { TextVariant } from "@/enums/ui.enum";

type PrincipleItemProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function PrincipleItem({ icon: Icon, title, text }: PrincipleItemProps) {
  return (
    <li className="flex gap-5 border-t border-gold/30 py-5">
      <Icon className="mt-0.5 size-6 shrink-0 text-gold-ink" aria-hidden strokeWidth={1.5} />
      <div>
        <Text as="h3" variant={TextVariant.HeadlineSm}>
          {title}
        </Text>
        <Text className="mt-1.5 text-muted">{text}</Text>
      </div>
    </li>
  );
}
