import { cn } from "@/lib/utils";

type DeltaVariant = "up" | "down" | "neutral";

interface Stat {
  value: string;
  label: string;
  delta?: string;
  deltaVariant?: DeltaVariant;
}

interface StatCalloutProps {
  stats: Stat[];
  cols?: 2 | 3 | 4;
}

const COL_MAP: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const deltaClasses: Record<DeltaVariant, string> = {
  up:      "text-green-600 dark:text-green-400",
  down:    "text-red-600 dark:text-red-400",
  neutral: "text-muted-foreground",
};

const deltaPrefix: Record<DeltaVariant, string> = {
  up:      "↑ ",
  down:    "↓ ",
  neutral: "",
};

export const StatCallout = ({ stats, cols = 3 }: StatCalloutProps) => {
  return (
    <div className={`grid grid-cols-1 ${COL_MAP[cols] ?? "md:grid-cols-3"} gap-3`}>
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-muted/50 rounded-xl px-5 py-4 flex flex-col gap-1 text-center"
        >
          <span className="text-3xl font-semibold tracking-tight text-foreground leading-none">
            {stat.value}
          </span>
          <span className="text-xs text-muted-foreground leading-snug mt-1">
            {stat.label}
          </span>
          {stat.delta && (
            <span
              className={cn(
                "text-[11px] font-medium mt-0.5",
                deltaClasses[stat.deltaVariant ?? "neutral"]
              )}
            >
              {deltaPrefix[stat.deltaVariant ?? "neutral"]}
              {stat.delta}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};