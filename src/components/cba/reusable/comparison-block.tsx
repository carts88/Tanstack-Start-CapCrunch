import { cn } from "@/lib/utils";

interface ComparisonItem {
  text: string;
}

interface ComparisonBlockProps {
  leftLabel: string;
  rightLabel: string;
  leftItems: ComparisonItem[];
  rightItems: ComparisonItem[];
  rightAccent?: "blue" | "green" | "violet";
}

const ACCENTS = {
  blue: {
    label: "text-primary ",
    dot: "bg-primary",
    vs: "text-primary",
    vsBorder: "border-primary",
  },
  green: {
    label: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-400 dark:bg-emerald-500",
    vs: "text-emerald-600 dark:text-emerald-400",
    vsBorder: "border-emerald-200 dark:border-emerald-800",
  },
  violet: {
    label: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-400 dark:bg-violet-500",
    vs: "text-violet-600 dark:text-violet-400",
    vsBorder: "border-violet-200 dark:border-violet-800",
  },
};

export const ComparisonBlock = ({
  leftLabel,
  rightLabel,
  leftItems,
  rightItems,
  rightAccent = "blue",
}: ComparisonBlockProps) => {
  const accent = ACCENTS[rightAccent];

  return (
    <div className="flex items-start gap-2">
      {/* Left column */}
      <div className="flex-1 min-w-0 self-stretch rounded-lg border border-border/60 bg-muted/20 overflow-hidden flex flex-col">
        <div className="px-3 py-2 border-b border-border/50">
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-muted-foreground">
            {leftLabel}
          </span>
        </div>
        <ul className="px-3 py-2.5 flex flex-col gap-1.5">
          {leftItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0 bg-muted-foreground/30" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* VS divider */}
      <div className={cn(
        "shrink-0 self-stretch flex flex-col items-center justify-center gap-1 px-1",
      )}>
        <div className="flex-1 w-px bg-border/50" />
        <div className={cn(
          "rounded-full border px-1.5 py-0.5 text-[10px] font-bold tracking-wider",
          accent.vs, accent.vsBorder
        )}>
          vs
        </div>
        <div className="flex-1 w-px bg-border/50" />
      </div>

      {/* Right column */}
      <div className="flex-1 min-w-0 self-stretch rounded-lg border border-border/60 bg-background overflow-hidden flex flex-col">
        <div className="px-3 py-2 border-b border-border/50">
          <span className={cn("text-[10px] font-semibold tracking-[0.1em] uppercase", accent.label)}>
            {rightLabel}
          </span>
        </div>
        <ul className="px-3 py-2.5 flex flex-col gap-1.5">
          {rightItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-snug">
              <span className={cn("mt-[6px] h-1.5 w-1.5 rounded-full shrink-0", accent.dot)} />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};