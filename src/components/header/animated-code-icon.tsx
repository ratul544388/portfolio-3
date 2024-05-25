"use client";

import { cn } from "@/lib/utils";

export const AnimatedCodeIcon = () => {
  return (
    <div className="relative size-10 grid place-content-center border-r">
      <Sign className="absolute top-2 left-1/2 -translate-x-1/2"/>
      <span className="absolute w-[16px] h-[3px] bg-white rotate-[16deg] top-[17px] left-[9px] rounded-full"/>
      <Sign className="rotate-180 absolute left-2 top-[18px]" />
    </div>
  );
};

export const Sign = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative size-3", className)}>
      <span className="h-2 w-[3px] rotate-45 bg-white rounded-[4px] rounded-bl-[2px] rounded-br-[6px] absolute" />
      <span className="w-3 h-[3px] bg-white rounded-full absolute top-[3.5px] right-[-1.4px] rotate-45" />
    </div>
  );
};
