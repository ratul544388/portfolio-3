"use client";

import { useMinimizeStore } from "@/hooks/use-minimize-store";
import { useModalStore } from "@/hooks/use-modal-store";
import { Menu, Minus, Plus, Square, X } from "lucide-react";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { AnimatedCodeIcon } from "./animated-code-icon";
import { cn } from "@/lib/utils";
import { MobileMenuButton } from "./mobile-menu-button";
import { CloseButton } from "./close-button";

export const Header = () => {
  const { isOpen, onClose, onOpen } = useModalStore();
  const { isMinimized, onMinimizeChange } = useMinimizeStore();

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  const MinimizeIcon = isMinimized ? Plus : Minus;

  return (
    <header
      className={cn(
        "fixed top-2.5 z-50 flex h-10 w-[calc(100%_-_20px)] items-center justify-between rounded-t-sm border bg-neutral-900/20 backdrop-blur-sm transition-all duration-500 ease-in-out",
        isMinimized && "sm:w-[calc(75%_-_15px)]",
      )}
    >
      <Logo.Icon className="size-10 border-r" />
      <Logo className="ml-3 first:hidden" />
      <div className="hidden pr-3 sm:flex">
        <Button
          variant="transparent"
          size="icon"
          onClick={onMinimizeChange}
          className="text-muted-foreground"
        >
          <MinimizeIcon className="size-4" />
        </Button>
        <Button
          variant="transparent"
          size="icon"
          onClick={handleFullScreen}
          className="text-muted-foreground"
        >
          <Square className="size-4" />
        </Button>
        <CloseButton />
      </div>
      <MobileMenuButton />
    </header>
  );
};
