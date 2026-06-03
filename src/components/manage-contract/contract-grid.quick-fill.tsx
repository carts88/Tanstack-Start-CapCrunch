import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ClauseType } from "./contract-grid.types";
import { parseSalaryInput } from "./contract-grid.utils";

export type QuickFillKey =
  | "capHitOverride"
  | "baseSalary"
  | "signingBonus"
  | "performanceBonus"
  | "minorsSalary"
  | "clauseInfo"
  | "clause";

export interface QuickFillField {
  key: QuickFillKey;
  label: string;
  type: "salary" | "clause" | "note";
  placeholder?: string;
}

export const QUICK_FILL_FIELDS: QuickFillField[] = [
  {
    key: "baseSalary",
    label: "Base salary",
    type: "salary",
    placeholder: "e.g. 750K",
  },
  {
    key: "signingBonus",
    label: "Signing bonus",
    type: "salary",
    placeholder: "e.g. 1.5M",
  },
  {
    key: "performanceBonus",
    label: "Perf. bonus",
    type: "salary",
    placeholder: "e.g. 212.5K",
  },
  {
    key: "minorsSalary",
    label: "Minors salary",
    type: "salary",
    placeholder: "e.g. 75K",
  },
  {
    key: "clause",
    label: "Clause",
    type: "clause",
  },
  {
    key: "clauseInfo",
    label: "Clause Info",
    type: "note",
  },
];

export const CLAUSE_OPTIONS: ClauseType[] = [
  "None",
  "NMC",
  "NTC",
  "M-NTC",
  "S-NTC",
];

export interface QuickFillState {
  values: Record<QuickFillKey, string>;
  selections: Record<QuickFillKey, Set<number>>;
}

export function emptyQuickFill(): QuickFillState {
  const keys = QUICK_FILL_FIELDS.map((field) => field.key);

  return {
    values: Object.fromEntries(
      keys.map((key) => [key, ""]) 
    ) as Record<QuickFillKey, string>,
    selections: Object.fromEntries(
      keys.map((key) => [key, new Set<number>()])
    ) as Record<QuickFillKey, Set<number>>,
  };
}

interface YearChipsProps {
  yearCount: number;
  startYear: number;
  selected: Set<number>;
  onToggle: (index: number) => void;
  onToggleAll: () => void;
}

export function YearChips({
  yearCount,
  startYear,
  selected,
  onToggle,
  onToggleAll,
}: YearChipsProps) {
  const allSelected = selected.size === yearCount;
  const someSelected = selected.size > 0 && !allSelected;

  return (
    <div className="flex flex-wrap items-center gap-1.5 px-3 py-1.5 flex-1">
      <button
        type="button"
        onClick={onToggleAll}
        className={cn(
          "text-[11px] px-2.5 py-1 rounded-full border transition-all",
          allSelected
            ? "border-dashed border-primary text-foreground"
            : someSelected
            ? "border-dashed border-primary/60 text-primary-foreground"
            : "border-dashed border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
        )}
      >
        All
      </button>

      {Array.from({ length: yearCount }, (_, index) => {
        const year = startYear + index;
        const label = `${year}–${String(year + 1).slice(-2)}`;
        const isSelected = selected.has(index);

        return (
          <button
            key={index}
            type="button"
            onClick={() => onToggle(index)}
            className={cn(
              "text-[11px] px-2.5 py-1 rounded-full border transition-all whitespace-nowrap",
              isSelected
                ? "bg-primary border-primary/60 text-primary-foreground"
                : "border-border text-muted-foreground bg-background hover:border-primary hover:text-primary/60"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

interface QuickFillPanelProps {
  qf: QuickFillState;
  startYear: number;
  yearCount: number;
  onUpdateValue: (key: QuickFillKey, value: string) => void;
  onClearField: (key: QuickFillKey) => void;
  onToggleSelection: (key: QuickFillKey, index: number) => void;
  onToggleAll: (key: QuickFillKey) => void;
  onApplyField: (key: QuickFillKey) => void;
  onApplyAll: () => void;
}

export function QuickFillPanel({
  qf,
  startYear,
  yearCount,
  onUpdateValue,
  onClearField,
  onToggleSelection,
  onToggleAll,
  onApplyField,
  onApplyAll,
}: QuickFillPanelProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-[13px] font-medium text-muted-foreground uppercase tracking-wider">
          Quick fill
        </span>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 text-xs px-2"
            onClick={onApplyAll}
          >
            Apply all
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 text-xs px-2"
            onClick={() => {
              QUICK_FILL_FIELDS.forEach((field) => onClearField(field.key));
            }}
          >
            Clear all
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {QUICK_FILL_FIELDS.map((field) => (
          <div
            key={field.key}
            className="flex items-center min-h-10 border border-border rounded-md bg-muted/30 overflow-hidden"
          >
            <div className="text-xs text-muted-foreground px-3 w-27.5 shrink-0 border-r border-border self-stretch flex items-center">
              {field.label}
            </div>

            <div className="flex min-w-46 items-center gap-1 justify-center py-1 self-stretch border-r border-border shrink-0">
              {field.type === "clause" ? (
                <Select
                  value={qf.values[field.key] || "None"}
                  onValueChange={(value) => onUpdateValue(field.key, value)}
                >
                  <SelectTrigger className="w-36 h-7 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CLAUSE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  value={qf.values[field.key]}
                  placeholder={field.placeholder}
                  onChange={(e) => onUpdateValue(field.key, e.target.value)}
                  onBlur={() => {
                    if (field.type === "salary") {
                      const parsed = parseSalaryInput(qf.values[field.key]);
                      if (parsed !== null) {
                        onUpdateValue(field.key, parsed.toLocaleString("en-US"));
                      }
                    }
                  }}
                  className="w-36 h-7 text-xs"
                />
              )}

              <button
                type="button"
                onClick={() => onClearField(field.key)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Clear ${field.label}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <YearChips
              yearCount={yearCount}
              startYear={startYear}
              selected={qf.selections[field.key]}
              onToggle={(index) => onToggleSelection(field.key, index)}
              onToggleAll={() => onToggleAll(field.key)}
            />

            <div className="px-2 self-stretch flex items-center shrink-0 border-l border-border">
              <Button
                type="button"
                variant="default"
                size="sm"
                className="h-7 text-xs"
                onClick={() => onApplyField(field.key)}
                disabled={!qf.values[field.key] || qf.selections[field.key].size === 0}
              >
                Apply
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
