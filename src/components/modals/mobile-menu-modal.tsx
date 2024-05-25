import { useModalStore } from "@/hooks/use-modal-store";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { delay, motion } from "framer-motion";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const staggerVariants = {
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    x: -20,
    y: -50,
    opacity: 0,
  },
};

export const MobileMenuModal = () => {
  const { isOpen, onClose, type } = useModalStore();
  const open = isOpen && type === "mobileMenu";
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "absolute inset-0 z-50 max-h-0 overflow-hidden rounded-md bg-neutral-900/40 backdrop-blur-md transition-all duration-500 ease-in-out",
        open && "max-h-full",
      )}
    >
      <nav className="flex h-full items-center pb-20">
        <motion.ul
          variants={staggerVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          className="flex flex-col px-8 py-20"
        >
          {navLinks.map(({ href, icon: Icon, label }) => (
            <motion.li
              key={label}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                },
                hidden: {
                  y: -50,
                  opacity: 0,
                },
              }}
              transition={{ duration: 0.2 }}
            >
              <Link
                onClick={onClose}
                href={href}
                className={cn(
                  "flex items-center gap-5 px-4 py-3 text-2xl font-semibold text-muted-foreground transition-colors duration-100 hover:text-foreground",
                  pathname === href && "text-primary hover:text-primary",
                )}
              >
                <Icon className="size-10" />
                {label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <motion.button
        variants={{
          open: { y: 0, x: "-50%", opacity: 1 },
          hidden: { y: 150, opacity: 0 },
        }}
        initial="hidden"
        animate={open ? "open" : "hidden"}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={onClose}
        className="absolute bottom-3 left-1/2 rounded-full border p-4 hover:bg-neutral-900/40"
      >
        <X />
      </motion.button>
    </div>
  );
};
