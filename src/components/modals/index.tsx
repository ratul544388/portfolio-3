import { motion } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useModalStore } from "../../hooks/use-modal-store";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

interface ModalProps {
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
  open: boolean;
  actionLabel?: string;
  onAction?: () => void;
  disabled?: boolean;
}

export const Modal = ({
  title,
  description,
  className,
  children,
  open,
  actionLabel,
  onAction,
  disabled,
}: ModalProps) => {
  const { onClose } = useModalStore();
  const [openModal, setOpenModal] = useState(open);

  const handleClose = () => {
    setOpenModal(false);
    setTimeout(() => {
      onClose();
    }, 100);
  };

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  return (
    <div
      onClick={handleClose}
      className={cn(
        "fixed inset-0 transition-opacity duration-300 opacity-0 z-[100] hidden items-center justify-center bg-neutral-900/40 backdrop-blur-sm",
        open && "flex opacity-100",
      )}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative flex max-h-[80vh] w-full max-w-[90vw] flex-col overflow-y-auto rounded-md border bg-neutral-900/40 backdrop-blur-md xs:max-w-[450px]",
          className,
        )}
        variants={{
          open: { scale: 1, opacity: 1 },
          closed: { scale: 0.9, opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
        initial="closed"
        animate={openModal ? "open" : "closed"}
      >
        <div className="flex items-center justify-between border-b bg-neutral-900/60 px-3 py-2">
          <h1 className="font-medium">{title}</h1>
          <Button
            variant="transparent"
            size="icon"
            onClick={handleClose}
          >
            <X className="size-5" />
          </Button>
        </div>
        {children}
        {actionLabel && onAction && (
          <div className="bg-background-1 sticky bottom-0 flex items-center justify-end py-3">
            <Button onClick={onAction} disabled={disabled} className="w-fit">
              Create
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
