"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { IconType } from "react-icons/lib";
interface AnimatedButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "green" | "purple";
  startIcon?: IconType;
  endIcon?: IconType;
  startIconClassName?: string;
  endIconClassName?: string;
}

export const AnimatedButton = ({
  children,
  href = "/",
  color = "green",
  startIconClassName,
  endIconClassName,
  startIcon: StartIcon,
  endIcon: EndIcon,
  className,
  ...props
}: AnimatedButtonProps) => {
  const circleRef = useRef<HTMLSpanElement>(null);
  const timeLine = useRef<GSAPTimeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeLine.current = gsap.timeline({ paused: true });
    timeLine.current
      .to(
        circleRef.current,
        { top: "-25%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(circleRef.current, { top: "-150%", duration: 0.25 }, "exit");
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeLine.current?.tweenFromTo("enter", "exit");
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeLine.current?.play();
    }, 300);
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-neutral-900 px-5 ring-1 ring-border transition-all duration-500 ease-in-out hover:ring-primary",
        color === "purple" && "hover:ring-purple-500",
        className,
      )}
      {...props}
    >
      {StartIcon && (
        <StartIcon
          className={cn(
            "relative z-10 mr-3 size-4 transition duration-500 ease-in-out",
            startIconClassName,
          )}
        />
      )}
      <span className="relative z-10">{children}</span>
      {EndIcon && (
        <EndIcon
          className={cn(
            "relative z-10 ml-3 size-4 transition duration-500 ease-in-out",
            endIconClassName,
          )}
        />
      )}
      <span
        ref={circleRef}
        className={cn(
          "absolute left-0 top-full h-[150%] w-full rounded-full bg-green-500",
          color === "purple" && "bg-purple-500",
        )}
      />
    </Link>
  );
};
