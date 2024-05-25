import { navLinks } from "@/constants";
import { Logo } from "./logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const BottomFooter = () => {
  return (
    <div className="mt-44 border border-x-0 bg-background/40 px-8 pb-24 pt-10 text-muted-foreground backdrop-blur-sm">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo.Icon className="translate-y-0.5"/>
            <Logo className="text-lg font-medium" />
          </div>
          <nav>
            <ul className="flex">
              {navLinks.map(({ label }) => (
                <Link
                  key={label}
                  href={label}
                  className={cn(
                    buttonVariants({ variant: "transparent", size: "sm" }),
                  )}
                >
                  {label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-center text-sm">
            © 2024 Stefano Bartoletti | Freelance Web Developer - P.IVA
            IT03686021209
          </p>
          <div className="flex">
            <Link
              href="#"
              className={buttonVariants({ variant: "transparent", size: "sm" })}
            >
              privacy policy
            </Link>
            <p
              className={cn(
                buttonVariants({ variant: "transparent", size: "sm" }),
              )}
            >
              cookie-free website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
