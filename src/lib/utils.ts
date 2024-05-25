import { cva } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const textVariants = cva("", {
  variants: {
    variant: {
      p: "text-base",
      h1: "text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      h2: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl",
      h3: "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});
