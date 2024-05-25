import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Logo = ({ className, ...props }: LogoProps) => (
  <Link href="/" className={cn("flex", className)} {...props}>
    <p className="text-foreground">
      portfolio
      <span className="text-green-500">{`<ratul>`}</span>
    </p>
  </Link>
);

Logo.Icon = function IconLogo({ className, ...props }: LogoProps) {
  return (
    <Link href="/" className={cn("text-primary grid place-content-center", className)} {...props}>
      <FaCode className="size-4 text-pretty" />
    </Link>
  );
};
