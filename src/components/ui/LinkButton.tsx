import Link from "next/link";
import type { ComponentProps } from "react";
import { ButtonVariant } from "@/enums/ui.enum";
import { cn } from "@/lib/cn";

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 text-label-lg whitespace-nowrap transition duration-300";
const SOLID_CLASSES = "button-shine min-h-13 rounded-cta border px-7 hover:-translate-y-0.5";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]: cn(
    SOLID_CLASSES,
    "border-gold/40 bg-primary text-canvas hover:bg-primary-soft",
  ),
  [ButtonVariant.Secondary]:
    "min-h-13 rounded-cta border border-line bg-canvas px-7 text-primary hover:bg-sand active:bg-sand",
  [ButtonVariant.Tertiary]: "min-h-11 px-2 text-primary-soft hover:text-gold-ink",
  [ButtonVariant.Inverse]: cn(SOLID_CLASSES, "border-gold bg-canvas text-primary hover:shadow-float"),
  [ButtonVariant.OutlineOnDark]:
    "min-h-13 rounded-cta border border-canvas/60 px-7 text-canvas hover:-translate-y-0.5 hover:bg-canvas/10",
};

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function LinkButton({
  variant = ButtonVariant.Primary,
  className,
  ...props
}: LinkButtonProps) {
  return <Link className={cn(BASE_CLASSES, VARIANT_CLASSES[variant], className)} {...props} />;
}
