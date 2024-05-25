"use client";

import { cn, textVariants } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

interface StaggerWords
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  children: string;
  highlights?: string[];
  textCenter?: boolean;
}

export const StaggerWords = ({
  children,
  variant = "p",
  className,
  highlights,
  textCenter,
}: StaggerWords) => {
  const Elem = variant as keyof JSX.IntrinsicElements;

  const staggerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <Elem
      aria-label={children}
      className={cn(textVariants({ variant, className }))}
    >
      <motion.span
        className={cn("flex w-fit flex-wrap", textCenter && "justify-center")}
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
                  <motion.span
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    initial="initial"
                    whileInView="animate"
                    key={index}
                  >
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
