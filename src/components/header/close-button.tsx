"use client";
import { motion, useAnimationControls } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { SocialIcons } from "../social-icons";

export const CloseButton = () => {
  const animation = useAnimationControls();

  const handleOpen = async () => {
    animation.start("visibleContainer");
    await animation.start("visibleLine");
    await animation.start("hiddenContainer");
    animation.start("hiddenLine", { duration: 0.01 });
  };

  return (
    <div className="relative">
      <Button onClick={handleOpen} variant="transparent" size="icon">
        <X className="size-4" />
      </Button>
      <motion.div
        variants={{
          hiddenContainer: {
            pointerEvents: "none",
            opacity: 0,
            scale: 0.9,
          },
          visibleContainer: {
            pointerEvents: "auto",
            opacity: 1,
            scale: 1,
          },
        }}
        initial="hiddenContainer"
        animate={animation}
        transition={{ duration: 0.2 }}
        className="fixed flex flex-col items-center gap-4 right-8 top-16 w-[350px] overflow-hidden rounded-md border bg-background/90 p-8"
      >
        This window cannot be closed!!!
        <SocialIcons />
        <motion.span
          variants={{
            hiddenLine: { width: "100%" },
            visibleLine: {
              width: 0,
              transition: { duration: 5, ease: "linear" },
            },
          }}
          initial="hiddenLine"
          animate={animation}
          className="absolute left-0 top-0 h-0.5 w-full bg-primary"
        />
      </motion.div>
    </div>
  );
};
