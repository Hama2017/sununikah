import type { ComponentPropsWithoutRef, ElementType } from "react";
import { TextVariant } from "@/enums/ui.enum";
import { cn } from "@/lib/cn";

const VARIANT_CLASSES: Record<TextVariant, string> = {
  [TextVariant.Display]: "font-display text-display-mobile md:text-display-lg",
  [TextVariant.HeadlineLg]: "font-display text-headline-md md:text-headline-lg",
  [TextVariant.HeadlineMd]: "font-display text-headline-md",
  [TextVariant.HeadlineSm]: "font-display text-headline-sm",
  [TextVariant.Title]: "text-title-md",
  [TextVariant.BodyLg]: "text-body-lg",
  [TextVariant.BodyMd]: "text-body-md",
  [TextVariant.BodySm]: "text-body-sm",
  [TextVariant.Eyebrow]: "text-label-md uppercase",
};

type TextProps<T extends ElementType> = {
  as?: T;
  variant?: TextVariant;
} & ComponentPropsWithoutRef<T>;

export function Text<T extends ElementType = "p">({
  as,
  variant = TextVariant.BodyMd,
  className,
  ...props
}: TextProps<T>) {
  const Component: ElementType = as ?? "p";
  return <Component className={cn(VARIANT_CLASSES[variant], className)} {...props} />;
}
