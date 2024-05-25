"use client"
import { MobileMenuModal } from "@/components/modals/mobile-menu-modal";
import { ToastModel } from "@/components/modals/toast-modal";
import { ViewProjectModal } from "@/components/modals/view-project-modal";
import { useModalStore } from "@/hooks/use-modal-store";
import { useEffect } from "react";

export const ModalProvider = () => {
  const { isOpen, onClose } = useModalStore();
  useEffect(() => {
    const handleMouseDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleMouseDown);
  }, [isOpen, onClose]);
  return (
    <>
      <ViewProjectModal />
    </>
  );
};
