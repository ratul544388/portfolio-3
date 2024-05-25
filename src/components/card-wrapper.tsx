import { X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CardWrapperProps {
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  childrenClassName?: string;
}

export const CardWrapper = ({
  title,
  onClose,
  children,
  className,
  childrenClassName,
}: CardWrapperProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-md border bg-background/40 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex justify-between border-b bg-background/80 px-3 py-2 rounded-t-md">
        <h4>{title}</h4>
        {onClose && (
          <Button onClick={onClose} variant="transparent" size="icon">
            <X className="size-4" />
          </Button>
        )}
      </div>
      <div className={cn("p-5", childrenClassName)}>{children}</div>
    </div>
  );
};
