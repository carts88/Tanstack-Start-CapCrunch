import { cn } from "@/lib/utils";
import { X, Check } from "lucide-react";

interface ComparisonItem {
  text: string;
}

interface ComparisonBlockProps {
  leftLabel: string;
  rightLabel: string;
  leftItems: ComparisonItem[];
  rightItems: ComparisonItem[];
  /** Optional accent color for the right (positive) column. Defaults to "blue". */
  rightAccent?: "blue" | "green";
}

const RIGHT_ACCENT = {
  blue: {
    header: "text-blue-700 dark:text-blue-400",
    col:    "bg-blue-50/70 dark:bg-blue-950/20 border-l border-border/60",
    icon:   "text-blue-500 dark:text-blue-400",
  },
  green: {
    header: "text-green-700 dark:text-green-400",
    col:    "bg-green-50/70 dark:bg-green-950/20 border-l border-border/60",
    icon:   "text-green-600 dark:text-green-400",
  },
};

export const ComparisonBlock = ({
  leftLabel,
  rightLabel,
  leftItems,
  rightItems,
  rightAccent = "blue",
}: ComparisonBlockProps) => {
  const right = RIGHT_ACCENT[rightAccent];

  return (
    <div className="grid grid-cols-2 border border-border/60 rounded-xl overflow-hidden">
      {/* Left column */}
      <div className="bg-muted/30 px-4 py-4 flex flex-col gap-3">
        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground">
          {leftLabel}
        </span>
        <ul className="flex flex-col gap-2.5">
          {leftItems.map((item, i) => (
            <li key={i} className="flex gap-2 items-start text-sm text-muted-foreground leading-relaxed">
              <X className="h-3.5 w-3.5 mt-0.5 shrink-0 text-red-400 dark:text-red-500" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Right column */}
      <div className={cn("px-4 py-4 flex flex-col gap-3", right.col)}>
        <span className={cn("text-[10px] font-semibold tracking-[0.12em] uppercase", right.header)}>
          {rightLabel}
        </span>
        <ul className="flex flex-col gap-2.5">
          {rightItems.map((item, i) => (
            <li key={i} className="flex gap-2 items-start text-sm text-foreground leading-relaxed">
              <Check className={cn("h-3.5 w-3.5 mt-0.5 shrink-0", right.icon)} />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};