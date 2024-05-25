"use client";
import { useMinimizeStore } from "@/hooks/use-minimize-store";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { SocialIcons } from "./social-icons";
import { CardWrapper } from "./card-wrapper";
interface MinimizedSocialCardProps {}

export const MinimizedSocialCard = ({}: MinimizedSocialCardProps) => {
  const { onMinimizeChange, isMinimized } = useMinimizeStore();

  return (
    <motion.div
      variants={{
        initial: { x: "101%", y: "101%" },
        animate: { x: -10, y: -10 },
      }}
      initial="initial"
      animate={isMinimized ? "animate" : "initial"}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 right-0 z-50 hidden w-full max-w-[350px] rounded-sm border bg-background/40 backdrop-blur-sm sm:block"
    >
      <CardWrapper title="social-share" onClose={onMinimizeChange}>
        <div className="flex items-center justify-center gap-10 px-8 py-20">
          <p className="font-medium text-muted-foreground">Share</p>
          <SocialIcons className="ml-10" iconClassName="size-5" />
        </div>
      </CardWrapper>
    </motion.div>
  );
};
