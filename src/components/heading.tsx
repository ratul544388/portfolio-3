import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const headingVariants = cva("", {
  variants: {
    variant: {
      h1: "font-medium text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text:8xl",
      h2: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text:6xl",
      h3: "text-xl sm:text-2xl lg:text:3xl xl:text-4xl",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

export const Heading = ({
  children,
  variant,
  className,
  ...props
}: HeadingProps) => {
  return (
    <h1 className={cn(headingVariants({ variant, className }))} {...props}>
      {children}
    </h1>
  );
};
