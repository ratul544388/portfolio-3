"use client";
import { cn } from "@/lib/utils";
import { SocialIcons } from "./social-icons";
import { useMinimizeStore } from "@/hooks/use-minimize-store";

export const Footer = () => {
  const { isMinimized } = useMinimizeStore();
  return (
    <footer
      className={cn(
        "fixed inset-x-2.5 bottom-2.5 flex h-10 w-[calc(100%_-_20px)] items-center justify-between rounded-b-sm border bg-neutral-900/40 pr-2 backdrop-blur-sm transition-all duration-500 ease-in-out",
        isMinimized && "sm:bottom-[calc(20vh_-_10px)] sm:w-[calc(75%_-_15px)]",
      )}
    >
      <button className="grid size-10 place-content-center border-r">
        <span className="block size-2.5 rounded-full bg-green-500" />
      </button>
      <SocialIcons />
    </footer>
  );
};
