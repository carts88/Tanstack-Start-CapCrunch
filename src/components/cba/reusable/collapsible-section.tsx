import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { RenderSubSection } from "../render-subsection";
import type { SubSection } from "../types";
import { ChevronDown } from "lucide-react";

interface ICollapsibleSection {
  title: string;
  description: string;
  subSections: SubSection[];
}

export const CollapsibleSection = ({
  title,
  description,
  subSections,
}: ICollapsibleSection) => {
  return (
    <Collapsible className="w-full group">
      <CollapsibleTrigger className="w-full text-left">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-0.5 h-3.5 bg-primary rounded-sm shrink-0" />
          <span className="text-14 font-bold tracking-[0.22em] uppercase text-muted-foreground">
            {title}
          </span>
          <div className="h-px flex-1 bg-border/60" />
          <ChevronDown
            className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
          />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
        <div className="mt-1 rounded-b-xl px-2 py-4 space-y-4">
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          )}
          {subSections?.map((section, idx) => (
            <RenderSubSection key={idx} section={section} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};