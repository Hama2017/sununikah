import Image from "next/image";
import { LogoVariant } from "@/enums/ui.enum";

const LOGOS: Record<LogoVariant, { src: string; width: number; height: number }> = {
  [LogoVariant.Horizontal]: { src: "/brand/logo-horizontal.png", width: 800, height: 259 },
  [LogoVariant.HorizontalOnDark]: {
    src: "/brand/logo-horizontal-on-dark.png",
    width: 800,
    height: 259,
  },
};

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  preload?: boolean;
};

export function Logo({ variant = LogoVariant.Horizontal, className, preload }: LogoProps) {
  return <Image {...LOGOS[variant]} alt="SunuNikah" className={className} preload={preload} />;
}
