"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
interface WhileInViewProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const WhileInView = ({
  children,
  className,
  onClick,
}: WhileInViewProps) => {
  return (
    <motion.div
      onClick={() => onClick?.()}
      whileInView={{
        opacity: [0, 1, 1],
        y: [30, 0, 0],
        scale: [0.95, 0.95, 1],
        transition: { duration: 0.8 },
      }}
      className={cn("opacity-0", className)}
    >
      {children}
    </motion.div>
  );
};
