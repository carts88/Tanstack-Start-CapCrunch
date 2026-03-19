import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RenderSubSection } from "../render-subsection";
import type { SubSection } from "../types";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  description?: string;
  subSections: SubSection[];
}

export const CollapsibleSection = ({
  title,
  description,
  subSections,
}: CollapsibleSectionProps) => {
  return (
    <Collapsible className="w-full overflow-hidden ">
      <CollapsibleTrigger className="w-full rounded-md text-left px-4 py-3.5 flex items-center gap-2.5 bg-muted/40 hover:bg-muted/80 transition-colors duration-150">
        <span className="w-0.5 h-4 bg-primary rounded-sm shrink-0" />
        <span className="flex-1 text-[14px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
          {title}
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>

      <CollapsibleContent className="">
        {/* Divider */}

        <div className="px-4 py-4 flex flex-col gap-4">
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {subSections?.map((section, idx) => (
            <RenderSubSection key={idx} section={section} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};