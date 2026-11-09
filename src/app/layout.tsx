import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { cn } from "@/lib/cn";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SunuNikah — Jusqu'à ce que jannah nous réunisse",
  description:
    "L'application matrimoniale halal pour une démarche sincère et cadrée vers le mariage.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={cn(playfair.variable, jakarta.variable)}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
