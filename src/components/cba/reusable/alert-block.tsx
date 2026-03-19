import { cn } from "@/lib/utils";
import { Info, AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AlertVariant = "info" | "warning" | "danger" | "success";

interface AlertBlockProps {
  variant?: AlertVariant;
  title: string;
  description: string;
}

interface VariantConfig {
  wrapper: string;
  icon: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const VARIANTS: Record<AlertVariant, VariantConfig> = {
  info: {
    wrapper:     "bg-blue-50 border-blue-200/60 dark:bg-blue-950/30 dark:border-blue-800/40",
    icon:        "text-blue-500 dark:text-blue-400",
    title:       "text-blue-900 dark:text-blue-300",
    description: "text-blue-800 dark:text-blue-400",
    Icon:        Info,
  },
  warning: {
    wrapper:     "bg-amber-50 border-amber-200/60 dark:bg-amber-950/30 dark:border-amber-800/40",
    icon:        "text-amber-500 dark:text-amber-400",
    title:       "text-amber-900 dark:text-amber-300",
    description: "text-amber-800 dark:text-amber-400",
    Icon:        AlertTriangle,
  },
  danger: {
    wrapper:     "bg-red-50 border-red-200/60 dark:bg-red-950/30 dark:border-red-800/40",
    icon:        "text-red-500 dark:text-red-400",
    title:       "text-red-900 dark:text-red-300",
    description: "text-red-800 dark:text-red-400",
    Icon:        XCircle,
  },
  success: {
    wrapper:     "bg-green-50 border-green-200/60 dark:bg-green-950/30 dark:border-green-800/40",
    icon:        "text-green-600 dark:text-green-400",
    title:       "text-green-900 dark:text-green-300",
    description: "text-green-800 dark:text-green-400",
    Icon:        CheckCircle,
  },
};

export const AlertBlock = ({
  variant = "info",
  title,
  description,
}: AlertBlockProps) => {
  const config = VARIANTS[variant];
  const { Icon } = config;

  return (
    <div
      className={cn(
        "flex gap-3 items-start rounded-xl border px-4 py-3.5",
        config.wrapper
      )}
    >
      <Icon className={cn("h-4 w-4 mt-0.5 shrink-0", config.icon)} />
      <div className="flex flex-col gap-0.5">
        <span className={cn("text-sm font-medium leading-snug", config.title)}>
          {title}
        </span>
        <p className={cn("text-sm leading-relaxed", config.description)}>
          {description}
        </p>
      </div>
    </div>
  );
};