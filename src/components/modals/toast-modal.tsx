import { useModalStore } from "@/hooks/use-modal-store";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export const ToastModel = () => {
  const animation = useAnimationControls();
  const { isOpen, type } = useModalStore();

  useEffect(() => {
    const startAnimation = async () => {
      animation.start("visibleContainer");
      await animation.start("visibleLine");
      await animation.start("hiddenContainer");
      animation.start("hiddenLine", { duration: 0.01 });
    };
    if (isOpen) {
      startAnimation();
    }
  }, [isOpen, animation]);

  if (!isOpen || type !== "toast") return null;

  return (
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
      className="fixed right-8 top-16 w-[350px] overflow-hidden rounded-md border bg-background/40 p-8 backdrop-blur-sm"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus
      perferendis consectetur ut voluptates a pariatur. Et quas quaerat dolorem.
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
  );
};
