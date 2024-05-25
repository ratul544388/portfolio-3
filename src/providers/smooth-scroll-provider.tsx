"use client";

import { BottomFooter } from "@/components/bottom-footer";
import { Sidemenu } from "@/components/sidemenu";
import { useMinimizeStore } from "@/hooks/use-minimize-store";
import { cn } from "@/lib/utils";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useRef } from "react";

export const SmoothScrollProvider = ({ children }: PropsWithChildren) => {
  const scrollRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { isMinimized } = useMinimizeStore();

  useEffect(() => {
    if (scrollRef.current) {
      const lenis = new Lenis({
        wrapper: scrollRef.current,
        duration: 1,
        easing: (t) => t,
      });

      const handleRaf = (time: DOMHighResTimeStamp) => {
        lenis.raf(time);
        requestAnimationFrame(handleRaf);
      };

      requestAnimationFrame(handleRaf);

      return () => {
        lenis.destroy();
      };
    }
  }, [pathname]);

  return (
    <main
      ref={scrollRef}
      className={cn(
        "h-[calc(100dvh_-_20px)] w-full overflow-hidden overflow-y-auto rounded-md border border-y-0 transition-all duration-500 ease-in-out scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-primary sm:pl-10",
        isMinimized && "sm:h-[calc(100dvh_-_20dvh)] sm:w-[75%]",
      )}
    >
      <Sidemenu />
      <div className="relative px-3 sm:px-5">{children}</div>
      <BottomFooter />
    </main>
  );
};
