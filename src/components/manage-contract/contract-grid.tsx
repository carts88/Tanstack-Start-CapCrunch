import { useCallback, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import {
  QuickFillPanel,
  QuickFillKey,
  QuickFillState,
  emptyQuickFill,
  QUICK_FILL_FIELDS,
} from "./contract-grid.quick-fill";
import { ContractYearRow } from "./contract-grid.row";
import { ContractFormValues, ContractYear } from "./contract-grid.types";
import {
  getCalculatedCapHit,
  parseSalaryInput,
} from "./contract-grid.utils";
import { CURRENT_SEASON } from "@/lib/constants/hockey";
export function seasonLabel(season: number): string {
  return `${season}–${String(season + 1).slice(-2)}`;
}

interface ContractYearGridProps {
  contract?: ContractFormValues
  setContract: Dispatch<SetStateAction<ContractFormValues>>;
  calculatedCapHit: number
}

export function ContractYearGrid({
  contract,
  setContract,
  calculatedCapHit
}: ContractYearGridProps) {
  const [qf, setQF] = useState<QuickFillState>(emptyQuickFill);
        


  const updateContract = useCallback(
    (updater: (prev: ContractFormValues) => ContractFormValues) => {
      setContract((prev) => {
        const next = updater(prev);

        const calculatedCapHit = getCalculatedCapHit(next.years);

        const years = next.years.map((year, index) => ({
          ...year,
          season: next.startYear + index,
          capHit: calculatedCapHit,
        }));

        return { ...next, years };
      });
    },
    [setContract]
  )

  
  function updateYearField(
    rowIndex: number,
    field: keyof ContractYear,
    value: unknown
  ) {
    updateContract((prev) => {
      const years = [...prev.years];
      years[rowIndex] = { ...years[rowIndex], [field]: value };
      return { ...prev, years };
    });
  }

    function handleSalaryBlur(rowIndex: number, field: keyof ContractYear, raw: string) {
      const parsed = parseSalaryInput(raw);
      if (parsed === null) return; // reject invalid input, don't zero it out
      updateContract((prev) => {
        const years = [...prev.years];
        years[rowIndex] = { ...years[rowIndex], [field]: parsed };
        return { ...prev, years };
      });
    }


  function toggleChip(key: QuickFillKey, index: number) {
    setQF((prev) => {
      const selection = new Set(prev.selections[key]);
      selection.has(index) ? selection.delete(index) : selection.add(index);
      return {
        ...prev,
        selections: {
          ...prev.selections,
          [key]: selection,
        },
      };
    });
  }

  function toggleAll(key: QuickFillKey) {
    const length = contract ? contract.years.length: 1;
    setQF((prev) => {
      const allOn = prev.selections[key].size === length;
      const selection = allOn
        ? new Set<number>()
        : new Set(Array.from({ length }, (_, index) => index));

      return {
        ...prev,
        selections: {
          ...prev.selections,
          [key]: selection,
        },
      };
    });
  }

  function clearField(key: QuickFillKey) {
    setQF((prev) => ({
      ...prev,
      values: { ...prev.values, [key]: "" },
      selections: { ...prev.selections, [key]: new Set<number>() },
    }));
  }

  function clearAll() {
    setQF(emptyQuickFill());
  }

  function resolveQFValue(key: QuickFillKey): number | string | null {
    const raw = qf.values[key];
    if (!raw.trim()) return null;
    if (key === "clause" || key === "clauseInfo") return raw;
    return parseSalaryInput(raw);
  }

  function applyField(key: QuickFillKey) {
    const value = resolveQFValue(key);
    if (value === null || qf.selections[key].size === 0) return;

    updateContract((prev) => {
      const years = [...prev.years];
      for (const index of qf.selections[key]) {
        years[index] = { ...years[index], [key]: value };
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
     
   

      <div className="space-y-6 w-fit">
   
        <QuickFillPanel
          qf={qf}
          startYear={contract ? contract.startYear: CURRENT_SEASON}
          yearCount={contract ? contract.years.length: 1}
          onUpdateValue={(key, value) =>
            setQF((prev) => ({
              ...prev,
              values: { ...prev.values, [key]: value },
            }))
          }
          onClearField={clearField}
          onToggleSelection={toggleChip}
          onToggleAll={toggleAll}
          onApplyField={applyField}
          onApplyAll={applyAll}
        />

        <div className="border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
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
                ].map((header) => (
                  <th
                    key={header}
                    className="text-left text-[11px] font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contract && contract.years.map((row, index) => {
                const year = contract.startYear + index;
                return (
                  <ContractYearRow
                    key={index}
                    row={row}
                    index={index}
                    yearLabel={seasonLabel(year)}   // derived from row.season
                    calculatedCapHit={calculatedCapHit}
                    updateYearField={updateYearField}
                    handleSalaryBlur={handleSalaryBlur}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        
      </div>
    );
}

export type { ContractFormValues, ContractYear } from "./contract-grid.types";
