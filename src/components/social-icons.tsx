import { socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export const SocialIcons = ({ className, iconClassName }: SocialIconsProps) => {
  return (
    <nav>
      <ul className="flex">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            className="p-1.5 text-muted-foreground transition-colors duration-1000 ease-in-out hover:text-foreground"
          >
            <Icon className="size-4" />
          </Link>
        ))}
      </ul>
    </nav>
  );
};
