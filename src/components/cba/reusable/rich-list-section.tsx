import { SectionCard } from "./section-card";
import { cn } from "@/lib/utils";

export type RichListBadgeVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";

export interface RichListSubItem {
  label: string;
  description?: string;
}

export interface RichListItem {
  /** Primary label */
  label: string;
  /** Optional sub-description below the label */
  description?: string;
  /** Icon — any React node: a Lucide icon, emoji string, or SVG */
  icon?: React.ReactNode;
  /** Small pill badge */
  badge?: string;
  badgeVariant?: RichListBadgeVariant;
  /** Right-aligned value / stat */
  value?: string;
  valueLabel?: string;
  /** Nested sub-items rendered below the description */
  subList?: RichListSubItem[];
}

interface RichListSectionProps {
  title?: string;
  items: RichListItem[];
}

const BADGE_CLASSES: Record<RichListBadgeVariant, string> = {
  default: "bg-muted text-muted-foreground ring-1 ring-border/50",
  info:    "bg-blue-100 text-blue-800 ring-1 ring-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-800/40",
  success: "bg-green-100 text-green-800 ring-1 ring-green-200 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-800/40",
  warning: "bg-amber-100 text-amber-800 ring-1 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:ring-amber-800/40",
  danger:  "bg-red-100 text-red-800 ring-1 ring-red-200 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-800/40",
};

export const RichListSection = ({ title, items }: RichListSectionProps) => {
  return (
    <SectionCard>
      {title && (
        <div className="flex items-center gap-2.5 mb-1">
          {/* Primary accent bar */}
          <span className="h-5 w-1 rounded-full bg-primary shrink-0" />
          <h3 className="font-semibold text-xl text-foreground tracking-tight">
            {title}
          </h3>
        </div>
      )}
      <div className="w-full h-px bg-border mb-3 mt-2" />

      <ul className="flex flex-col divide-y divide-border/40">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "group flex items-start gap-3 py-3 transition-colors rounded-sm",
              idx === 0 && "pt-0",
              idx === items.length - 1 && "pb-0"
            )}
          >
            {/* Icon — primary-tinted when active */}
            {item.icon && (
              <span className="mt-0.5 h-7 w-7 shrink-0 flex items-center justify-center rounded-md bg-primary/10 text-primary text-base ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {item.icon}
              </span>
            )}

            {/* Label + description + sublist */}
            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-foreground leading-snug">
                  {item.label}
                </span>
                {item.badge && (
                  <span
                    className={cn(
                      "inline-block px-1.5 py-px text-[10px] font-semibold rounded-full leading-[1.8] shrink-0 tracking-wide",
                      BADGE_CLASSES[item.badgeVariant ?? "default"]
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Sub-list — primary accent on the border */}
              {item.subList && item.subList.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1.5 border-l-2 border-primary/30 pl-3">
                  {item.subList.map((sub, subIdx) => (
                    <li key={subIdx} className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium text-foreground/80 leading-snug">
                        {sub.label}
                      </span>
                      {sub.description && (
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {sub.description}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right value — primary color for the number */}
            {item.value && (
              <div className="shrink-0 flex flex-col items-end gap-0.5 ml-2">
                <span className="text-sm font-bold text-primary tabular-nums">
                  {item.value}
                </span>
                {item.valueLabel && (
                  <span className="text-[10px] text-muted-foreground leading-none tracking-wide uppercase">
                    {item.valueLabel}
                  </span>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
};