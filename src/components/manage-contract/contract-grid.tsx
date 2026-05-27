import { useMemo, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import SelectWithSearchImage from "../ui/advanced/select-with-search";
import { nhlTeamSelectData } from "@/lib/constants/metadata";
import {
  DateField,
  DateFieldDays,
  DateFieldMonths,
  DateFieldSeparator,
  DateFieldYears,
} from "../ui/date-field";
import { ContractInfo } from "./build-contract/contract-info,";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ClauseType = "None" | "NMC" | "NTC" | "M-NTC" | "S-NTC";

export interface ContractYear {
  capHitOverride: number | null;
  season?: number;
  baseSalary: number | 0;
  signingBonus: number | 0;
  performanceBonus: number | 0;
  minorsSalary: number | 0;

  clause: ClauseType;
  clauseInfo: string | null;
}

export interface ContractFormValues {
  startYear: number;
  signingDate: Date;
  signingTeam: string;
  years: ContractYear[];
}

// ---------------------------------------------------------------------------
// Salary helpers
// ---------------------------------------------------------------------------

export function parseSalaryInput(raw: string): number | null {
  const s = raw.trim().replace(/[$,\s]/g, "");

  if (!s) return 0;

  const match = s.match(/^([\d.]+)\s*([MmKk]?)$/);

  if (!match) return null;

  const num = parseFloat(match[1]);

  if (isNaN(num)) return null;

  const suffix = match[2].toUpperCase();

  if (suffix === "M") return Math.round(num * 1_000_000);
  if (suffix === "K") return Math.round(num * 1_000);

  return Math.round(num);
}

export function formatSalaryDisplay(value: number | null): string {
  if (value === null || value === 0) return "";
  return value.toLocaleString("en-US");
}

export function formatSalaryCompact(value: number | null): string {
  if (!value) return "—";

  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }

  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }

  return `$${value.toLocaleString("en-US")}`;
}

// ---------------------------------------------------------------------------
// Cap hit helpers
// ---------------------------------------------------------------------------

function getCalculatedCapHit(
  years: ContractYear[]
) {
  if (years.length === 0) return 0;

  const total = years.reduce((sum, year) => {
    return (
      sum +
      (year.baseSalary ?? 0) +
      (year.signingBonus ?? 0)
    );
  }, 0);

  return Math.round(total / years.length);
}

function getEffectiveCapHit(
  year: ContractYear,
  calculatedCapHit: number
) {
  return year.capHitOverride ?? calculatedCapHit;
}

// ---------------------------------------------------------------------------
// Derived stats
// ---------------------------------------------------------------------------

export interface ContractStats {
  totalValue: number;
  aav: number;
  totalSigningBonus: number;
  totalPerformanceBonus: number;
  yearlyAAV: (number | null)[];
}

export function deriveContractStats(
  years: ContractYear[]
): ContractStats {

  const calculatedCapHit =
    getCalculatedCapHit(years);

  let totalValue = 0;
  let totalSigningBonus = 0;
  let totalPerformanceBonus = 0;

  const yearlyAAV: (number | null)[] = [];

  for (const y of years) {
    const cap = getEffectiveCapHit(
      y,
      calculatedCapHit
    );

    totalValue += cap;

    totalSigningBonus +=
      y.signingBonus ?? 0;

    totalPerformanceBonus +=
      y.performanceBonus ?? 0;

    yearlyAAV.push(cap > 0 ? cap : null);
  }

  const n = years.length || 1;

  return {
    totalValue,
    aav: totalValue / n,
    totalSigningBonus,
    totalPerformanceBonus,
    yearlyAAV,
  };
}

function emptyYear(): ContractYear {
  return {
    capHitOverride: null,

    baseSalary: 0,
    signingBonus: 0,
    performanceBonus: 0,
    minorsSalary: 0,

    clause: "None",
    clauseInfo: null,
  };
}

// ---------------------------------------------------------------------------
// Quick-fill types
// ---------------------------------------------------------------------------

type QuickFillKey =
  | "capHitOverride"
  | "baseSalary"
  | "signingBonus"
  | "performanceBonus"
  | "minorsSalary"
  | "clauseInfo"
  | "clause";

interface QuickFillField {
  key: QuickFillKey;
  label: string;
  type: "salary" | "clause" | "note";
  placeholder?: string;
}

const QUICK_FILL_FIELDS: QuickFillField[] = [
  
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

const CLAUSE_OPTIONS: ClauseType[] = [
  "None",
  "NMC",
  "NTC",
  "M-NTC",
  "S-NTC",
];

interface QuickFillState {
  values: Record<QuickFillKey, string>;
  selections: Record<QuickFillKey, Set<number>>;
}

function emptyQuickFill(): QuickFillState {
  const keys = QUICK_FILL_FIELDS.map((f) => f.key);

  return {
    values: Object.fromEntries(
      keys.map((k) => [k, ""])
    ) as Record<QuickFillKey, string>,

    selections: Object.fromEntries(
      keys.map((k) => [k, new Set<number>()])
    ) as Record<QuickFillKey, Set<number>>,
  };
}

// ---------------------------------------------------------------------------
// Year chips
// ---------------------------------------------------------------------------

interface YearChipsProps {
  yearCount: number;
  startYear: number;
  selected: Set<number>;
  onToggle: (i: number) => void;
  onToggleAll: () => void;
}

function YearChips({
  yearCount,
  startYear,
  selected,
  onToggle,
  onToggleAll,
}: YearChipsProps) {
  const allSelected = selected.size === yearCount;

  const someSelected =
    selected.size > 0 && !allSelected;

  return (
    <div className="flex flex-wrap items-center gap-1.5 px-3 py-1.5 flex-1 min-w-0">
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

      {Array.from(
        { length: yearCount },
        (_, i) => {
          const year = startYear + i;

          const label = `${year}–${String(
            year + 1
          ).slice(-2)}`;

          const on = selected.has(i);

          return (
            <button
              key={i}
              type="button"
              onClick={() => onToggle(i)}
              className={cn(
                "text-[11px] px-2.5 py-1 rounded-full border transition-all whitespace-nowrap",
                on
                  ? "bg-primary border-primary/60 text-primary-foreground"
                  : "border-border text-muted-foreground bg-background hover:border-primary hover:text-primary/60"
              )}
            >
              {label}
            </button>
          );
        }
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

interface ContractYearGridProps {
  defaultStartYear?: number;
  defaultLength?: number;
  onChange?: (values: ContractFormValues) => void;
  onSubmit?: (
    values: ContractFormValues
  ) => Promise<void> | void;
}

export function ContractYearGrid({
  defaultStartYear = new Date().getFullYear(),
  defaultLength = 4,
  onChange,
  onSubmit,
}: ContractYearGridProps) {
  const [contract, setContract] =
    useState<ContractFormValues>({
      startYear: defaultStartYear,
      signingDate: new Date("2026-04-04"),
      signingTeam: "anaheim-ducks",
      years: Array.from(
        { length: defaultLength },
        emptyYear
      ),
    });

  const [qf, setQF] =
    useState<QuickFillState>(emptyQuickFill);
  function handleSetSigningDate(
    newDate: Date | null
  ) {
    if (!newDate) return;

    setContract((prev) => ({
      ...prev,
      signingDate: newDate,
    }));
  }

  const updateContract = useCallback(
    (
      updater: (
        prev: ContractFormValues
      ) => ContractFormValues
    ) => {
      setContract((prev) => {
        const next = updater(prev);

        onChange?.(next);

        return next;
      });
    },
    [onChange]
  );


  function handleSigningTeamChange(
    newTeam: string
  ) {
    setContract((prev) => ({
      ...prev,
      signingTeam: newTeam,
    }));
  }

  function handleLengthChange(newLen: number) {
    updateContract((prev) => {
      const years =
        newLen > prev.years.length
          ? [
              ...prev.years,
              ...Array.from(
                {
                  length:
                    newLen - prev.years.length,
                },
                emptyYear
              ),
            ]
          : prev.years.slice(0, newLen);

      return { ...prev, years };
    });

    setQF((prev) => {
      const selections = {
        ...prev.selections,
      };

      for (const key of Object.keys(
        selections
      ) as QuickFillKey[]) {
        const pruned = new Set<number>();

        for (const i of selections[key]) {
          if (i < newLen) pruned.add(i);
        }

        selections[key] = pruned;
      }

      return { ...prev, selections };
    });
  }

  function updateYearField(
    rowIndex: number,
    field: keyof ContractYear,
    value: unknown
  ) {
    updateContract((prev) => {
      const years = [...prev.years];

      years[rowIndex] = {
        ...years[rowIndex],
        [field]: value,
      };

      return { ...prev, years };
    });
  }

  function handleSalaryBlur(
    rowIndex: number,
    field: keyof ContractYear,
    raw: string
  ) {
    const parsed = parseSalaryInput(raw);

    updateContract((prev) => {
      const years = [...prev.years];

      years[rowIndex] = {
        ...years[rowIndex],
        [field]: parsed ?? 0,
      };

      return {
        ...prev,
        years,
      };
    });
  }

  function toggleChip(
    key: QuickFillKey,
    i: number
  ) {
    setQF((prev) => {
      const sel = new Set(prev.selections[key]);

      sel.has(i) ? sel.delete(i) : sel.add(i);

      return {
        ...prev,
        selections: {
          ...prev.selections,
          [key]: sel,
        },
      };
    });
  }

  function toggleAll(key: QuickFillKey) {
    const len = contract.years.length;

    setQF((prev) => {
      const allOn =
        prev.selections[key].size === len;

      const sel = allOn
        ? new Set<number>()
        : new Set(
            Array.from(
              { length: len },
              (_, i) => i
            )
          );

      return {
        ...prev,
        selections: {
          ...prev.selections,
          [key]: sel,
        },
      };
    });
  }

  function clearField(key: QuickFillKey) {
    setQF((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [key]: "",
      },
      selections: {
        ...prev.selections,
        [key]: new Set<number>(),
      },
    }));
  }

  function clearAll() {
    setQF(emptyQuickFill());
  }

  function resolveQFValue(
    key: QuickFillKey
  ): number | string | null {
    const raw = qf.values[key];

    if (!raw.trim()) return null;

    if (key === "clause") return raw;
    if (key === "clauseInfo") return raw;
    return parseSalaryInput(raw);
  }

  function applyField(key: QuickFillKey) {
    const val = resolveQFValue(key);

    if (
      val === null ||
      qf.selections[key].size === 0
    ) {
      return;
    }

    updateContract((prev) => {
      const years = [...prev.years];

      for (const i of qf.selections[key]) {
        years[i] = {
          ...years[i],
          [key]: val,
        };
      }

      return { ...prev, years };
    });

    clearField(key);
  }

  function applyAll() {
    const pending: {
      key: QuickFillKey;
      val: number | string;
      indices: Set<number>;
    }[] = [];

    for (const f of QUICK_FILL_FIELDS) {
      const val = resolveQFValue(f.key);

      if (
        val !== null &&
        qf.selections[f.key].size > 0
      ) {
        pending.push({
          key: f.key,
          val,
          indices: qf.selections[f.key],
        });
      }
    }

    if (pending.length === 0) return;

    updateContract((prev) => {
      const years = [...prev.years];

      for (const {
        key,
        val,
        indices,
      } of pending) {
        for (const i of indices) {
          years[i] = {
            ...years[i],
            [key]: val,
          };
        }
      }

      return { ...prev, years };
    });

    clearAll();
  }


  return (
    <div className="space-y-6">
      {/* Header */}
      <ContractInfo 
        contract={contract} 
        updateContract={updateContract} 
        handleLengthChange={handleLengthChange} 
        handleSigningTeamChange={handleSigningTeamChange} 
        handleSetSigningDate={handleSetSigningDate}      
      />      
      {/* Quick fill */}
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
            onClick={clearAll}
          >
            Clear all
          </Button>

          <Button
            type="button"
            size="sm"
            variant="default"
            className="h-7 text-xs px-2"
            onClick={applyAll}
          >
            Apply all
          </Button>
          </div>
        </div>

      <div className="space-y-2">
        {QUICK_FILL_FIELDS.map((f) => (
          <div
            key={f.key}
            className="flex items-center min-h-10 border border-border rounded-md bg-muted/30 overflow-hidden"
          >
            {/* Field label */}
            <div className="text-xs text-muted-foreground px-3 w-27.5 shrink-0 border-r border-border self-stretch flex items-center">
              {f.label}
            </div>

            {/* Value input */}
            <div className="flex min-w-46 items-center gap-1 justify-center py-1 self-stretch border-r border-border shrink-0">
              {f.type === "clause" ? (
                <Select
                  
                  value={qf.values[f.key] || "None"}
                  onValueChange={(v) =>
                    setQF((prev) => ({
                      ...prev,
                      values: {
                        ...prev.values,
                        [f.key]: v,
                      },
                    }))
                  }
                >
                  <SelectTrigger
                    className="w-36 h-7 text-xs">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    {CLAUSE_OPTIONS.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : f.type === "note" ? (
                <Input
                  value={qf.values[f.key]}
                  placeholder={f.placeholder}
                  onChange={(e) =>
                    setQF((prev) => ({
                      ...prev,
                      values: {
                        ...prev.values,
                        [f.key]: e.target.value,
                      },
                    }))
                  }
                  className="w-36 h-7 text-xs"
                />
              ) : (
                <Input
                  value={qf.values[f.key]}
                  placeholder={f.placeholder}
                  onChange={(e) =>
                    setQF((prev) => ({
                      ...prev,
                      values: {
                        ...prev.values,
                        [f.key]: e.target.value,
                      },
                    }))
                  }
                  onBlur={() => {
                    const parsed = parseSalaryInput(
                      qf.values[f.key]
                    );

                    if (parsed !== null) {
                      setQF((prev) => ({
                        ...prev,
                        values: {
                          ...prev.values,
                          [f.key]:
                            parsed.toLocaleString(
                              "en-US"
                            ),
                        },
                      }));
                    }
                  }}
                  className="w-36 h-7 text-xs"
                />
              )}

              <button
                type="button"
                onClick={() => clearField(f.key)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Clear ${f.label}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Year chips */}
            <YearChips
              yearCount={contract.years.length}
              startYear={contract.startYear}
              selected={qf.selections[f.key]}
              onToggle={(i) => toggleChip(f.key, i)}
              onToggleAll={() => toggleAll(f.key)}
            />

            {/* Apply */}
            <div className="px-2 self-stretch flex items-center shrink-0 border-l border-border">
              <Button
                type="button"
                variant="default"
                size="sm"
                
                className="h-7 text-xs "
                onClick={() => applyField(f.key)}
                disabled={
                  !qf.values[f.key] ||
                  qf.selections[f.key].size === 0
                }
              >
                Apply
              </Button>
            </div>
          </div>
        ))}
      </div>

      </>

      {/* Grid */}
      <div className="border border-border rounded-lg overflow-x-auto">
        <table className="w-full text-sm min-w-300">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              {[
                "Season",
                "Cap hit",
                "Base salary",
                "Signing bonus",
                "Perf. bonus",
                "Minors salary",
                "Clause",
                "Clause Info",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left text-[11px] font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {contract.years.map((row, i) => {
              const year =
                contract.startYear + i;

              const yearLabel = `${year}–${String(
                year + 1
              ).slice(-2)}`;

              const calculatedCapHit =
                  getCalculatedCapHit(contract.years);
              return (
                <tr
                  key={i}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  {/* Year */}
                  <td className="px-3 py-1.5 w-24">
                    <span className="text-xs font-medium text-muted-foreground">
                      {yearLabel}
                    </span>
                  </td>

                  {/* Cap hit */}
                  <td className="px-1 py-1">
                    <div className="flex items-center gap-1">
                      <Input
                        value={formatSalaryDisplay(
                          row.capHitOverride ?? calculatedCapHit
                        )}
                        placeholder="0"
                        onChange={(e) =>
                          updateYearField(
                            i,
                            "capHitOverride",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleSalaryBlur(
                            i,
                            "capHitOverride",
                            e.target.value
                          )
                        }
                        className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
                      />

                      {row.capHitOverride !==
                        null && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0"
                          onClick={() =>
                            updateYearField(
                              i,
                              "capHitOverride",
                              null
                            )
                          }
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </td>

                  {/* Base salary */}
                  <td className="px-1 py-1">
                    <Input
                      value={formatSalaryDisplay(
                        row.baseSalary
                      )}
                      placeholder="0"
                      onChange={(e) =>
                        updateYearField(
                          i,
                          "baseSalary",
                          e.target.value
                        )
                      }
                      onBlur={(e) =>
                        handleSalaryBlur(
                          i,
                          "baseSalary",
                          e.target.value
                        )
                      }
                      className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
                    />
                  </td>

                  {/* Signing bonus */}
                  <td className="px-1 py-1">
                    <Input
                      value={formatSalaryDisplay(
                        row.signingBonus
                      )}
                      placeholder="0"
                      onChange={(e) =>
                        updateYearField(
                          i,
                          "signingBonus",
                          e.target.value
                        )
                      }
                      onBlur={(e) =>
                        handleSalaryBlur(
                          i,
                          "signingBonus",
                          e.target.value
                        )
                      }
                      className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
                    />
                  </td>

                  {/* Perf bonus */}
                  <td className="px-1 py-1">
                    <Input
                      value={formatSalaryDisplay(
                        row.performanceBonus
                      )}
                      placeholder="0"
                      onChange={(e) =>
                        updateYearField(
                          i,
                          "performanceBonus",
                          e.target.value
                        )
                      }
                      onBlur={(e) =>
                        handleSalaryBlur(
                          i,
                          "performanceBonus",
                          e.target.value
                        )
                      }
                      className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
                    />
                  </td>

                  {/* Minors salary */}
                  <td className="px-1 py-1">
                    <Input
                      value={formatSalaryDisplay(
                        row.minorsSalary
                      )}
                      placeholder="0"
                      onChange={(e) =>
                        updateYearField(
                          i,
                          "minorsSalary",
                          e.target.value
                        )
                      }
                      onBlur={(e) =>
                        handleSalaryBlur(
                          i,
                          "minorsSalary",
                          e.target.value
                        )
                      }
                      className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
                    />
                  </td>

                  {/* Clause */}
                  <td className="px-1 py-1">
                    <div className="flex items-center gap-1">
                      <Select
                        value={row.clause}
                        onValueChange={(v) =>
                          updateYearField(
                            i,
                            "clause",
                            v as ClauseType
                          )
                        }
                      >
                        <SelectTrigger className="h-8 text-xs w-24 border-transparent shadow-none bg-transparent focus:ring-1 focus:border-violet-500">
                          <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                          {CLAUSE_OPTIONS.map(
                            (c) => (
                              <SelectItem
                                key={c}
                                value={c}
                              >
                                {c}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    
                  </td>
                  {/* Contract Clause Info */}
                  <td className="px-1 py-1">
                                          {row.clause !==
                        "None" && (
                        <Input
                          value={
                            row.clauseInfo ??
                            ""
                          }
                          onChange={(e) =>
                            updateYearField(
                              i,
                              "clauseInfo",
                              e.target.value
                            )
                          }
                          placeholder="Details…"
                          className="h-8 text-xs w-28 border-transparent bg-transparent shadow-none focus-visible:ring-1 "
                        />
                      )}

                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}