import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Info } from "lucide-react";

interface IInfoTooltip {
  msg: string;
  iconSize?: number;
}

export const InfoTooltip = ({ msg, iconSize = 16 }: IInfoTooltip) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center cursor-help">
            <Info size={iconSize} className="text-muted-foreground" />
          </span>
        </TooltipTrigger>

        <TooltipContent>
          <p className="text-sm">{msg}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};