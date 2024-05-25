import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HintProps {
  children: ReactNode;
  message: string;
}

export const Hint = ({ children, message }: HintProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="right" className="bg-neutral-900/40 backdrop-blur-md">{message}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
