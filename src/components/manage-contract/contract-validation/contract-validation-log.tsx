import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { AlertTriangle, XCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
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

// ─── Sub-components ───────────────────────────────────────────────────────────

function LevelBadge({ level }: { level: ContractVariabilityValidationLog["level"] }) {
  const isError = level === "ERROR";
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1 text-[10px] font-medium px-1.5 py-0 h-5 uppercase tracking-wide shrink-0",
        isError
          ? "border-destructive/40 bg-destructive/10 text-destructive"
          : "border-yellow-500/40 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
      )}
    >
      {isError
        ? <XCircle className="h-2.5 w-2.5" />
        : <AlertTriangle className="h-2.5 w-2.5" />}
      {level}
    </Badge>
  );
}

function TypeBadge({ type }: { type: ContractVariabilityValidationLog["type"] }) {
  return (
    <Badge variant="secondary" className="text-[10px] font-medium px-1.5 py-0 h-5 shrink-0">
      {TYPE_LABELS[type]}
    </Badge>
  );
}

// ─── Column definitions ───────────────────────────────────────────────────────

const columns: ColumnDef<ContractVariabilityValidationLog>[] = [
  {
    accessorKey: "level",
    header: () => <span className="text-xs font-medium text-muted-foreground">Level</span>,
    cell: ({ getValue }) => (
      <LevelBadge level={getValue<ContractVariabilityValidationLog["level"]>()} />
    ),
    size: 80,
  },
  {
    accessorKey: "type",
    header: () => <span className="text-xs font-medium text-muted-foreground">Type</span>,
    cell: ({ getValue }) => (
      <TypeBadge type={getValue<ContractVariabilityValidationLog["type"]>()} />
    ),
    size: 96,
  },
  {
    accessorKey: "year",
    header: () => <span className="text-xs font-medium text-muted-foreground">Yr</span>,
    cell: ({ getValue }) => (
      <span className="text-xs font-mono text-muted-foreground tabular-nums">
        {getValue<number>()}
      </span>
    ),
    size: 28,
  },
  {
    accessorKey: "message",
    header: () => <span className="text-xs font-medium text-muted-foreground">Message</span>,
    cell: ({ getValue }) => (
      <p className="text-xs leading-relaxed text-foreground/90 min-w-0">
        {getValue<string>()}
      </p>
    ),
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

interface ContractValidationLogProps {
  logs: ContractVariabilityValidationLog[];
}

export function ContractValidationLog({ logs }: ContractValidationLogProps) {
  const errorCount = logs.filter((l) => l.level === "ERROR").length;
  const warnCount = logs.filter((l) => l.level === "WARNING").length;

  const table = useReactTable({
    data: logs,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rows = table.getRowModel().rows;

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

      {/* Column headers */}
      <div className="px-3 py-1.5 border-b border-border bg-muted/30">
        {table.getHeaderGroups().map((hg) => (
          <div key={hg.id} className="flex items-center gap-2">
            {hg.headers.map((header) => (
              <div
                key={header.id}
                style={{
                  width: header.column.columnDef.size,
                  flexShrink: header.id === "message" ? 1 : 0,
                  flexGrow: header.id === "message" ? 1 : 0,
                }}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Rows */}
      <ScrollArea className="flex-1">
        {rows.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2">
            <ShieldCheck className="h-6 w-6 opacity-30" />
            <p className="text-xs">No issues found</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {rows.map((row) => {
              const isError = row.original.level === "ERROR";
              return (
                <div
                  key={row.id}
                  className={cn(
                    "flex items-start gap-2 px-3 py-2.5",
                    isError
                      ? "border-l-2 border-l-destructive"
                      : "border-l-2 border-l-yellow-500/60"
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <div
                      key={cell.id}
                      style={{
                        width: cell.column.columnDef.size,
                        flexShrink: cell.column.id === "message" ? 1 : 0,
                        flexGrow: cell.column.id === "message" ? 1 : 0,
                        minWidth: 0,
                      }}
                      className="flex items-start pt-px"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  ))}
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