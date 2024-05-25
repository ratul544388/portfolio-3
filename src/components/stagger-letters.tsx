"use client";

import { opacityVariants, staggerAnimation } from "@/constants";
import { cn, textVariants } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

interface StaggerLetters
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  children: string;
  highlights?: string[];
  textCenter?: boolean;
}

export const StaggerLetters = ({
  children,
  variant = "p",
  className,
  highlights,
  textCenter,
}: StaggerLetters) => {
  const Elem = variant as keyof JSX.IntrinsicElements;

  return (
    <Elem
      aria-label={children}
      className={cn(
        "flex w-fit flex-wrap",
        textVariants({ variant, className }),
      )}
    >
      <motion.span
        className={cn("flex flex-wrap", textCenter && "justify-center")}
        {...staggerAnimation}
        aria-hidden="true"
      >
        {children?.split(" ").map((word, index) => {
          return (
            <span
              key={index}
              className={cn(
                "inline-block",
                highlights?.includes(word) && "text-green-500",
              )}
            >
              {word.split("").map((char, index) => {
                return (
                  <motion.span variants={opacityVariants} key={index}>
                    {char}
                  </motion.span>
                );
              })}
              <span>&nbsp;</span>
            </span>
          );
        })}
      </motion.span>
    </Elem>
  );
};
