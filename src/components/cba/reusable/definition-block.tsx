import { SectionCard } from "./section-card";
import { cn } from "@/lib/utils";

interface DefinitionItem {
  question: string;
  answer: string;
  note?: string;
}

interface DefinitionBlockProps {
  title?: string;
  items: DefinitionItem[];
}

export const DefinitionBlock = ({ title, items }: DefinitionBlockProps) => {
  return (
    <SectionCard>
      {title && (
        <h3 className="font-medium text-sm text-foreground tracking-tight mb-3">
          {title}
        </h3>
      )}
      <div className="flex flex-col divide-y divide-border/50">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "flex flex-col gap-1.5 py-3.5",
              idx === 0 && "pt-0",
              idx === items.length - 1 && "pb-0"
            )}
          >
            <span className="text-sm font-semibold text-foreground leading-snug">
              {item.question}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
            {item.note && (
              <p className="text-xs text-muted-foreground/70 italic leading-relaxed border-l-2 border-border pl-2.5 mt-0.5">
                {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </SectionCard>
  );
};