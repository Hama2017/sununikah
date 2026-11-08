import Link from "next/link";
import type { ComponentProps } from "react";
import { ButtonVariant } from "@/enums/ui.enum";
import { cn } from "@/lib/cn";

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 text-label-lg whitespace-nowrap transition-colors";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]:
    "min-h-13 rounded-cta border border-gold/40 bg-primary px-7 text-canvas hover:bg-primary-soft",
  [ButtonVariant.Secondary]:
    "min-h-13 rounded-cta border border-line bg-canvas px-7 text-primary hover:bg-sand active:bg-sand",
  [ButtonVariant.Tertiary]: "min-h-11 px-2 text-primary-soft hover:text-gold-ink",
  [ButtonVariant.Inverse]:
    "min-h-13 rounded-cta border border-gold bg-canvas px-7 text-primary hover:bg-sand",
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
