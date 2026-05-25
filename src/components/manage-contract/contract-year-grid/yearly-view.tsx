"use client";

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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ClauseType = "None" | "NMC" | "NTC" | "M-NTC" | "S-NTC";

export interface ContractYear {
  capHit: number | null;
  baseSalary: number | null;
  signingBonus: number | null;
  performanceBonus: number | null;
  clause: ClauseType;
  clauseInfo: string;
}

export interface ContractFormValues {
  startYear: number;
  years: ContractYear[];
}

// ---------------------------------------------------------------------------
// Salary shorthand parser  →  "1.5M" | "870K" | "850.5k" | "5000000"
// ---------------------------------------------------------------------------

export function parseSalaryInput(raw: string): number | null {
  const s = raw.trim().replace(/[$,\s]/g, "");
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
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value.toLocaleString("en-US")}`;
}

// ---------------------------------------------------------------------------
// Derived stats — pure function, drop it in a useMemo
// ---------------------------------------------------------------------------

export interface ContractStats {
  totalValue: number;
  aav: number;
  totalSigningBonus: number;
  totalPerformanceBonus: number;
  yearlyAAV: (number | null)[];
}

export function deriveContractStats(years: ContractYear[]): ContractStats {
  let totalValue = 0;
  let totalSigningBonus = 0;
  let totalPerformanceBonus = 0;
  const yearlyAAV: (number | null)[] = [];

  for (const y of years) {
    const cap    = y.capHit           ?? 0;
    const base   = y.baseSalary       ?? 0;
    const signing = y.signingBonus    ?? 0;
    const perf   = y.performanceBonus ?? 0;

    const rowValue = cap || (base + signing + perf);
    totalValue           += rowValue;
    totalSigningBonus    += signing;
    totalPerformanceBonus += perf;
    yearlyAAV.push(rowValue > 0 ? rowValue : null);
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
    capHit: null,
    baseSalary: null,
    signingBonus: null,
    performanceBonus: null,
    clause: "None",
    clauseInfo: "",
  };
}

// ---------------------------------------------------------------------------
// Quick-fill types
// ---------------------------------------------------------------------------

type QuickFillKey =
  | "capHit"
  | "baseSalary"
  | "signingBonus"
  | "performanceBonus"
  | "clause";

interface QuickFillField {
  key: QuickFillKey;
  label: string;
  type: "salary" | "clause";
  placeholder?: string;
}

const QUICK_FILL_FIELDS: QuickFillField[] = [
  { key: "capHit",           label: "Cap hit",       type: "salary",  placeholder: "e.g. 5M" },
  { key: "baseSalary",       label: "Base salary",   type: "salary",  placeholder: "e.g. 750K" },
  { key: "signingBonus",     label: "Signing bonus", type: "salary",  placeholder: "e.g. 1.5M" },
  { key: "performanceBonus", label: "Perf. bonus",   type: "salary",  placeholder: "e.g. 212.5K" },
  { key: "clause",           label: "Clause",        type: "clause" },
];

const CLAUSE_OPTIONS: ClauseType[] = ["None", "NMC", "NTC", "M-NTC", "S-NTC"];

interface QuickFillState {
  values: Record<QuickFillKey, string>;
  selections: Record<QuickFillKey, Set<number>>;
}

function emptyQuickFill(): QuickFillState {
  const keys = QUICK_FILL_FIELDS.map((f) => f.key);
  return {
    values:     Object.fromEntries(keys.map((k) => [k, ""])) as Record<QuickFillKey, string>,
    selections: Object.fromEntries(keys.map((k) => [k, new Set<number>()])) as Record<QuickFillKey, Set<number>>,
  };
}

// ---------------------------------------------------------------------------
// YearChips sub-component
// ---------------------------------------------------------------------------

interface YearChipsProps {
  yearCount: number;
  startYear: number;
  selected: Set<number>;
  onToggle: (i: number) => void;
  onToggleAll: () => void;
}

function YearChips({ yearCount, startYear, selected, onToggle, onToggleAll }: YearChipsProps) {
  const allSelected  = selected.size === yearCount;
  const someSelected = selected.size > 0 && !allSelected;

  return (
    <div className="flex flex-wrap items-center gap-1.5 px-3 py-1.5 flex-1 min-w-0">
      <button
        type="button"
        onClick={onToggleAll}
        className={cn(
          "text-[11px] px-2.5 py-1 rounded-full border transition-all",
          allSelected
            ? "border-dashed border-violet-500 text-violet-600"
            : someSelected
            ? "border-dashed border-violet-300 text-violet-400"
            : "border-dashed border-border text-muted-foreground hover:border-violet-300 hover:text-violet-500"
        )}
      >
        All
      </button>

      {Array.from({ length: yearCount }, (_, i) => {
        const year = startYear + i;
        const label = `${year}–${String(year + 1).slice(-2)}`;
        const on = selected.has(i);
        return (
          <button
            key={i}
            type="button"
            onClick={() => onToggle(i)}
            className={cn(
              "text-[11px] px-2.5 py-1 rounded-full border transition-all whitespace-nowrap",
              on
                ? "bg-violet-600 border-violet-600 text-white"
                : "border-border text-muted-foreground bg-background hover:border-violet-300 hover:text-violet-600"
            )}
          >
            {label}
          </button>
        );
      })}
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
  onSubmit?: (values: ContractFormValues) => Promise<void> | void;
}

export function ContractYearGrid({
  defaultStartYear = new Date().getFullYear(),
  defaultLength = 4,
  onChange,
  onSubmit,
}: ContractYearGridProps) {

  // ── Core contract state ────────────────────────────────────────────────────
  const [contract, setContract] = useState<ContractFormValues>({
    startYear: defaultStartYear,
    years: Array.from({ length: defaultLength }, emptyYear),
  });

  // Notify parent whenever contract changes
  const updateContract = useCallback((updater: (prev: ContractFormValues) => ContractFormValues) => {
    setContract((prev) => {
      const next = updater(prev);
      onChange?.(next);
      return next;
    });
  }, [onChange]);

  // ── Quick-fill state (transient UI — not part of contract data) ────────────
  const [qf, setQF] = useState<QuickFillState>(emptyQuickFill);

  // ── Derived stats (pure, cheap) ────────────────────────────────────────────
  const stats = useMemo(() => deriveContractStats(contract.years), [contract.years]);

  // ── Length change ──────────────────────────────────────────────────────────
  function handleLengthChange(newLen: number) {
    updateContract((prev) => {
      const years =
        newLen > prev.years.length
          ? [...prev.years, ...Array.from({ length: newLen - prev.years.length }, emptyYear)]
          : prev.years.slice(0, newLen);
      return { ...prev, years };
    });
    // Prune QF selections that are now out of range
    setQF((prev) => {
      const selections = { ...prev.selections };
      for (const key of Object.keys(selections) as QuickFillKey[]) {
        const pruned = new Set<number>();
        for (const i of selections[key]) { if (i < newLen) pruned.add(i); }
        selections[key] = pruned;
      }
      return { ...prev, selections };
    });
  }

  // ── Per-cell year update helpers ───────────────────────────────────────────
  function updateYearField(rowIndex: number, field: keyof ContractYear, value: unknown) {
    updateContract((prev) => {
      const years = [...prev.years];
      years[rowIndex] = { ...years[rowIndex], [field]: value };
      return { ...prev, years };
    });
  }

  // Parse shorthand on blur, then auto-fill capHit if empty
  function handleSalaryBlur(rowIndex: number, field: keyof ContractYear, raw: string) {
    const parsed = parseSalaryInput(raw);
    const value  = parsed !== null ? parsed : (raw === "" ? null : raw);

    updateContract((prev) => {
      const years = [...prev.years];
      const year  = { ...years[rowIndex], [field]: value };

      // Auto-fill capHit from components if still empty
      if (!year.capHit && field !== "capHit") {
        const auto =
          (year.baseSalary       ?? 0) +
          (year.signingBonus     ?? 0) +
          (year.performanceBonus ?? 0);
        if (auto > 0) year.capHit = auto;
      }

      years[rowIndex] = year;
      return { ...prev, years };
    });
  }

  // ── Quick-fill helpers ─────────────────────────────────────────────────────
  function toggleChip(key: QuickFillKey, i: number) {
    setQF((prev) => {
      const sel = new Set(prev.selections[key]);
      sel.has(i) ? sel.delete(i) : sel.add(i);
      return { ...prev, selections: { ...prev.selections, [key]: sel } };
    });
  }

  function toggleAll(key: QuickFillKey) {
    const len = contract.years.length;
    setQF((prev) => {
      const allOn = prev.selections[key].size === len;
      const sel   = allOn
        ? new Set<number>()
        : new Set(Array.from({ length: len }, (_, i) => i));
      return { ...prev, selections: { ...prev.selections, [key]: sel } };
    });
  }

  function clearField(key: QuickFillKey) {
    setQF((prev) => ({
      ...prev,
      values:     { ...prev.values,     [key]: "" },
      selections: { ...prev.selections, [key]: new Set<number>() },
    }));
  }

  function clearAll() { setQF(emptyQuickFill()); }

  function resolveQFValue(key: QuickFillKey): number | string | null {
    const raw = qf.values[key];
    if (!raw.trim()) return null;
    if (key === "clause") return raw;
    return parseSalaryInput(raw);
  }

  function applyField(key: QuickFillKey) {
    const val = resolveQFValue(key);
    if (val === null || qf.selections[key].size === 0) return;
    updateContract((prev) => {
      const years = [...prev.years];
      for (const i of qf.selections[key]) {
        years[i] = { ...years[i], [key]: val };
      }
      return { ...prev, years };
    });
    clearField(key);
  }

  function applyAll() {
    const pending: { key: QuickFillKey; val: number | string; indices: Set<number> }[] = [];
    for (const f of QUICK_FILL_FIELDS) {
      const val = resolveQFValue(f.key);
      if (val !== null && qf.selections[f.key].size > 0) {
        pending.push({ key: f.key, val, indices: qf.selections[f.key] });
      }
    }
    if (pending.length === 0) return;
    updateContract((prev) => {
      const years = [...prev.years];
      for (const { key, val, indices } of pending) {
        for (const i of indices) {
          years[i] = { ...years[i], [key]: val };
        }
      }
      return { ...prev, years };
    });
    clearAll();
  }

  // ── Stat cards ─────────────────────────────────────────────────────────────
  const statCards = [
    { label: "AAV",                 value: formatSalaryCompact(stats.aav) },
    { label: "Total value",         value: formatSalaryCompact(stats.totalValue) },
    { label: "Total signing bonus", value: formatSalaryCompact(stats.totalSigningBonus) },
    { label: "Total perf. bonus",   value: formatSalaryCompact(stats.totalPerformanceBonus) },
  ];

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">

      {/* Header controls */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Label className="text-xs text-muted-foreground whitespace-nowrap">Start year</Label>
          <Input
            type="number"
            min={1990}
            max={2040}
            value={contract.startYear}
            onChange={(e) =>
              updateContract((prev) => ({ ...prev, startYear: Number(e.target.value) }))
            }
            className="w-24 h-8 text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <Label className="text-xs text-muted-foreground">Length</Label>
          <Select
            value={String(contract.years.length)}
            onValueChange={(v) => handleLengthChange(Number(v))}
          >
            <SelectTrigger className="w-24 h-8 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} {n === 1 ? "yr" : "yrs"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stat summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {statCards.map((c) => (
          <div key={c.label} className="rounded-lg bg-muted/50 px-4 py-3">
            <p className="text-[11px] text-muted-foreground mb-1">{c.label}</p>
            <p className="text-lg font-medium tabular-nums">{c.value}</p>
          </div>
        ))}
      </div>

      {/* Quick fill */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
            Quick fill
          </span>
          <Button type="button" variant="ghost" size="sm" className="h-7 text-xs px-2" onClick={clearAll}>
            Clear all
          </Button>
          <Button
            type="button"
            size="sm"
            className="h-7 text-xs px-3 ml-auto bg-violet-600 hover:bg-violet-700 text-white"
            onClick={applyAll}
          >
            Apply all
          </Button>
        </div>

        <div className="space-y-2">
          {QUICK_FILL_FIELDS.map((f) => (
            <div
              key={f.key}
              className="flex items-center border border-border rounded-md bg-muted/30 overflow-hidden"
            >
              {/* Field label */}
              <div className="text-xs text-muted-foreground px-3 min-w-[110px] shrink-0 border-r border-border self-stretch flex items-center">
                {f.label}
              </div>

              {/* Value input */}
              <div className="flex items-center gap-1 px-2 py-1.5 border-r border-border shrink-0">
                {f.type === "clause" ? (
                  <Select
                    value={qf.values[f.key] || "None"}
                    onValueChange={(v) =>
                      setQF((prev) => ({ ...prev, values: { ...prev.values, [f.key]: v } }))
                    }
                  >
                    <SelectTrigger className="w-28 h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CLAUSE_OPTIONS.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    value={qf.values[f.key]}
                    placeholder={f.placeholder}
                    onChange={(e) =>
                      setQF((prev) => ({ ...prev, values: { ...prev.values, [f.key]: e.target.value } }))
                    }
                    onBlur={() => {
                      const parsed = parseSalaryInput(qf.values[f.key]);
                      if (parsed !== null) {
                        setQF((prev) => ({
                          ...prev,
                          values: { ...prev.values, [f.key]: parsed.toLocaleString("en-US") },
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

              {/* Per-field apply */}
              <div className="px-2 shrink-0 border-l border-border">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs border-violet-300 text-violet-700 hover:bg-violet-50 hover:border-violet-500"
                  onClick={() => applyField(f.key)}
                  disabled={!qf.values[f.key] || qf.selections[f.key].size === 0}
                >
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contract year grid */}
      <div className="border border-border rounded-lg overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              {["Year", "Cap hit", "Base salary", "Signing bonus", "Perf. bonus", "Clause", "AAV"].map((h) => (
                <th key={h} className="text-left text-[11px] font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contract.years.map((row, i) => {
              const year      = contract.startYear + i;
              const yearLabel = `${year}–${String(year + 1).slice(-2)}`;
              const aav       = stats.yearlyAAV[i];

              return (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">

                  {/* Year */}
                  <td className="px-3 py-1.5 w-24">
                    <span className="text-xs font-medium text-muted-foreground">{yearLabel}</span>
                  </td>

                  {/* Cap hit */}
                  <td className="px-1 py-1">
                    <Input
                      value={formatSalaryDisplay(row.capHit)}
                      placeholder="0"
                      onChange={(e) => updateYearField(i, "capHit", e.target.value)}
                      onBlur={(e)  => handleSalaryBlur(i, "capHit", e.target.value)}
                      className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:border-violet-500"
                    />
                  </td>

                  {/* Base salary */}
                  <td className="px-1 py-1">
                    <Input
                      value={formatSalaryDisplay(row.baseSalary)}
                      placeholder="0"
                      onChange={(e) => updateYearField(i, "baseSalary", e.target.value)}
                      onBlur={(e)  => handleSalaryBlur(i, "baseSalary", e.target.value)}
                      className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:border-violet-500"
                    />
                  </td>

                  {/* Signing bonus */}
                  <td className="px-1 py-1">
                    <Input
                      value={formatSalaryDisplay(row.signingBonus)}
                      placeholder="0"
                      onChange={(e) => updateYearField(i, "signingBonus", e.target.value)}
                      onBlur={(e)  => handleSalaryBlur(i, "signingBonus", e.target.value)}
                      className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:border-violet-500"
                    />
                  </td>

                  {/* Performance bonus */}
                  <td className="px-1 py-1">
                    <Input
                      value={formatSalaryDisplay(row.performanceBonus)}
                      placeholder="0"
                      onChange={(e) => updateYearField(i, "performanceBonus", e.target.value)}
                      onBlur={(e)  => handleSalaryBlur(i, "performanceBonus", e.target.value)}
                      className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:border-violet-500"
                    />
                  </td>

                  {/* Clause */}
                  <td className="px-1 py-1">
                    <div className="flex items-center gap-1">
                      <Select
                        value={row.clause}
                        onValueChange={(v) => updateYearField(i, "clause", v as ClauseType)}
                      >
                        <SelectTrigger className="h-8 text-xs w-24 border-transparent shadow-none bg-transparent focus:ring-1 focus:border-violet-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CLAUSE_OPTIONS.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {row.clause !== "None" && (
                        <Input
                          value={row.clauseInfo}
                          onChange={(e) => updateYearField(i, "clauseInfo", e.target.value)}
                          placeholder="Details…"
                          className="h-8 text-xs w-28 border-transparent bg-transparent shadow-none focus-visible:ring-1 focus-visible:border-violet-500"
                        />
                      )}
                    </div>
                  </td>

                  {/* AAV (computed) */}
                  <td className="px-3 py-1.5 w-28">
                    <span className="text-sm font-medium tabular-nums">
                      {aav
                        ? formatSalaryCompact(aav)
                        : <span className="text-muted-foreground">—</span>
                      }
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Submit */}
      {onSubmit && (
        <div className="flex justify-end">
          <Button
            type="button"
            onClick={() => onSubmit(contract)}
            className="bg-violet-600 hover:bg-violet-700 text-white"
          >
            Save contract
          </Button>
        </div>
      )}
    </div>
  );
}