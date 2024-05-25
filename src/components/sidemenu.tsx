"use client";

import { cn } from "@/lib/utils";
import { Briefcase, Home, MailIcon, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hint } from "./hint";
import { navLinks } from "@/constants";
import { useMinimizeStore } from "@/hooks/use-minimize-store";

export const Sidemenu = () => {
  const { isMinimized } = useMinimizeStore();
  const pathname = usePathname();
  const sidemenuLinks = [
    {
      icon: Home,
      href: "/",
    },
    {
      icon: User2,
      href: "/about",
    },
    {
      icon: Briefcase,
      href: "/work",
    },
    {
      icon: MailIcon,
      href: "/contact",
    },
  ];
  return (
    <nav
      className={cn(
        "fixed left-[10.5px] top-[50px] z-20 hidden h-[calc(100vh_-_100px)] min-w-10 flex-col items-center justify-center border-r transition-all duration-500 ease-in-out sm:flex",
        isMinimized && "h-[calc(100vh_-_20vh_-40px)]",
      )}
    >
      {navLinks.map(({ icon: Icon, href, label }) => (
        <Hint key={href} message={label}>
          <Link
            href={href}
            key={href}
            className={cn(
              "p-2 text-gray-400 transition-all duration-1000 hover:text-green-500",
              pathname === href && "text-primary",
            )}
          >
            <Icon className="size-4" />
          </Link>
        </Hint>
      ))}
    </nav>
  );
};
