import { useState } from "react";
import { buttonVariants } from "../ui/button";
import { motion, MotionConfig } from "framer-motion";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const animate = open ? "open" : "closed";
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="group relative z-[100] flex size-10 items-center justify-center sm:hidden"
      >
        <MotionConfig
          transition={{ duration: 0.3, easings: ["0.83, 0, 0.17, 1"] }}
        >
          <motion.span
            variants={{
              closed: {
                top: "27%",
                rotate: 0,
              },
              open: {
                top: "46%",
                rotate: 45,
              },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-[0.2rem] w-[60%] rounded-full bg-gray-300 transition-colors duration-1000 group-hover:bg-foreground"
          />
          <motion.span
            variants={{
              closed: {
                top: "46%",
                opacity: 1,
                x: 0,
              },
              open: {
                top: "46%",
                opacity: 0,
                x: "100%",
              },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-[0.2rem] w-[60%] rounded-full bg-gray-300 transition-colors duration-1000 group-hover:bg-foreground"
          />
          <motion.span
            variants={{
              closed: {
                top: "65%",
                rotate: 0,
              },
              open: {
                top: "46%",
                rotate: -45,
              },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-[0.2rem] w-[60%] rounded-full bg-gray-300 transition-colors duration-1000 group-hover:bg-foreground"
          />
        </MotionConfig>
      </motion.button>
      <motion.div
        variants={{
          closed: { height: 0 },
          open: { height: "calc(100dvh - 100px)" },
        }}
        initial="closed"
        animate={animate}
        className="absolute top-10 z-50 w-full overflow-hidden bg-background/95 sm:hidden"
      >
        <nav className="h-full">
          <ul className="flex h-full flex-col justify-center pb-20">
            {navLinks.map(({ href, label, icon }, index) => {
              const active = pathname === href;
              return (
                <motion.li
                  variants={{
                    open: { opacity: 1 },
                    closed: { opacity: 0 },
                  }}
                  transition={{ delay: 0.1 * index }}
                  key={label}
                  className="relative overflow-hidden"
                >
                  <Link
                    onClick={handleClose}
                    href={href}
                    className={cn(
                      "inline-block px-5 py-3 text-4xl font-medium text-gray-400 transition-all duration-1000 ease-in-out hover:text-foreground",
                      active && "text-primary hover:text-primary",
                    )}
                  >
                    <span className="mr-2 inline-block -translate-y-3 text-base font-normal text-muted-foreground">
                      0{index + 1}
                    </span>
                    {label}
                    {active && <span>/</span>}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};
