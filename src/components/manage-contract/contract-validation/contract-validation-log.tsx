import { AlertTriangle, XCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ContractVariabilityValidationLog {
  message: string;
  year: number;
  type: "FRONT_LOADED" | "BACK_LOADED" | "BASE_ERROR" | "THIRTY_FIVE_PLUS" | "ELC";
  level: "ERROR" | "WARNING";
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<ContractVariabilityValidationLog["type"], string> = {
  FRONT_LOADED: "Front loaded",
  BACK_LOADED: "Back loaded",
  BASE_ERROR: "Base error",
  THIRTY_FIVE_PLUS: "35+ rule",
  ELC: "ELC",
};

// ─── Main component ───────────────────────────────────────────────────────────

interface ContractValidationLogProps {
  logs: ContractVariabilityValidationLog[];
}

export function ContractValidationLog({ logs }: ContractValidationLogProps) {
  const errorCount = logs.filter((l) => l.level === "ERROR").length;
  const warnCount = logs.filter((l) => l.level === "WARNING").length;

  return (
    <div className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden w-72 shrink-0">

      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-border">
        <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          Validation
        </div>
        <div className="flex items-center gap-1.5">
          {errorCount > 0 && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
              <XCircle className="h-2.5 w-2.5" />
              {errorCount}
            </span>
          )}
          {warnCount > 0 && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20">
              <AlertTriangle className="h-2.5 w-2.5" />
              {warnCount}
            </span>
          )}
          {errorCount === 0 && warnCount === 0 && (
            <span className="text-[10px] font-medium text-green-600 dark:text-green-400 flex items-center gap-0.5">
              <ShieldCheck className="h-3 w-3" />
              All clear
            </span>
          )}
        </div>
      </div>

      {/* Log entries */}
      <ScrollArea className="flex-1">
        {logs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2">
            <ShieldCheck className="h-6 w-6 opacity-30" />
            <p className="text-xs">No issues found</p>
          </div>
        ) : (
          <div className="flex flex-col gap-1.5 p-2">
            {logs.map((log, i) => {
              const isError = log.level === "ERROR";
              return (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col gap-1.5 rounded-md px-3 py-2.5 border",
                    isError
                      ? "bg-destructive/5 border-destructive/20 border-l-2 border-l-destructive"
                      : "bg-yellow-500/5 border-yellow-500/20 border-l-2 border-l-yellow-500/60"
                  )}
                >
                  {/* Meta row */}
                  <div className="flex items-center gap-1.5">
                    {isError
                      ? <XCircle className="h-3 w-3 text-destructive shrink-0" />
                      : <AlertTriangle className="h-3 w-3 text-yellow-500 shrink-0" />}
                    <span
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-wide",
                        isError ? "text-destructive" : "text-yellow-600 dark:text-yellow-400"
                      )}
                    >
                      {log.level}
                    </span>
                    <span className="text-muted-foreground/40 text-[10px]">·</span>
                    <span className="text-[10px] text-muted-foreground font-medium">
                      {TYPE_LABELS[log.type]}
                    </span>
                    <span className="ml-auto text-[10px] text-muted-foreground/60 font-mono tabular-nums">
                      Yr {log.year}
                    </span>
                  </div>

                  {/* Message */}
                  <p className="text-xs text-foreground/80 leading-relaxed">
                    {log.message}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </ScrollArea>

      {/* Footer */}
      <div className="px-3 py-1.5 border-t border-border bg-muted/20">
        <span className="text-[10px] text-muted-foreground">
          {logs.length} issue{logs.length !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}