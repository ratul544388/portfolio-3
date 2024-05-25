import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhotoProps {
  className?: string;
  src: string;
  alt?: string;
}

export const Photo = ({ className, src, alt = "Image" }: PhotoProps) => {
  return (
    <div
      className={cn(
        "relative size-14 overflow-hidden rounded-md bg-accent",
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};
