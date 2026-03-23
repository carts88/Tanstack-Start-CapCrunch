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
  default: "bg-muted text-muted-foreground",
  info:    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  danger:  "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export const RichListSection = ({ title, items }: RichListSectionProps) => {
  return (
    <SectionCard>
      {title && (
  <h3 className="font-medium text-xl text-foreground ">
    {title}
  </h3>
    )}
    <div className="w-full h-px bg-muted mb-3 mt-1.5" />

      <ul className="flex flex-col divide-y divide-border/50">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "flex items-start gap-3 py-3",
              idx === 0 && "pt-0",
              idx === items.length - 1 && "pb-0"
            )}
          >
            {/* Icon */}
            {item.icon && (
              <span className="mt-0.5 h-7 w-7 shrink-0 flex items-center justify-center rounded-md bg-muted text-muted-foreground text-base">
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
                      "inline-block px-1.5 py-px text-[10px] font-medium rounded-full leading-[1.8] shrink-0",
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

              {/* Sub-list */}
              {item.subList && item.subList.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1.5 border-l-2 border-border/50 pl-3">
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

            {/* Right value */}
            {item.value && (
              <div className="shrink-0 flex flex-col items-end gap-0.5 ml-2">
                <span className="text-sm font-semibold text-foreground tabular-nums">
                  {item.value}
                </span>
                {item.valueLabel && (
                  <span className="text-[10px] text-muted-foreground leading-none">
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