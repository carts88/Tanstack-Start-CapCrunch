import { cn } from "@/lib/utils";

interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  /** Filled dot = past/active, hollow = upcoming */
  status?: "past" | "active" | "upcoming";
}

interface TimelineBlockProps {
  events: TimelineEvent[];
}

export const TimelineBlock = ({ events }: TimelineBlockProps) => {
  return (
    <div className="flex flex-col">
      {events.map((event, idx) => {
        const isLast = idx === events.length - 1;
        const status = event.status ?? "upcoming";

        return (
          <div key={idx} className="flex gap-4">
            {/* Left rail */}
            <div className="flex flex-col items-center w-8 shrink-0">
              {/* Dot */}
              <span
                className={cn(
                  "mt-1 h-2.5 w-2.5 rounded-full border-2 shrink-0 transition-colors",
                  status === "past"
                    ? "bg-muted-foreground border-muted-foreground"
                    : status === "active"
                    ? "bg-primary border-primary"
                    : "bg-background border-primary"
                )}
              />
              {/* Connector line */}
              {!isLast && (
                <span className="flex-1 w-px bg-border/60 mt-1" />
              )}
            </div>

            {/* Content */}
            <div className={cn("pb-5 flex flex-col gap-0.5", isLast && "pb-0")}>
              <span className="text-[11px] font-semibold text-primary tracking-wide">
                {event.date}
              </span>
              <span className="text-sm font-medium text-foreground leading-snug">
                {event.title}
              </span>
              {event.description && (
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  {event.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};