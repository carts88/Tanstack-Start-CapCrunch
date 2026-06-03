import { useCallback, useEffect, useState } from "react";
import { ContractInfo } from "./build-contract/contract-info,";
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
  emptyYear,
  getCalculatedCapHit,
  parseSalaryInput,
} from "./contract-grid.utils";
import { ContractValidationLog } from "./contract-validation/contract-validation-log";
import { ValidateContract } from "./variability-calculations";


interface ContractYearGridProps {
  defaultStartYear?: number;
  defaultLength?: number;
  onChange?: (values: ContractFormValues) => void;
  onSubmit?: (values: ContractFormValues) => Promise<void> | void;
}

export function ContractYearGrid({
  defaultStartYear = new Date().getFullYear(),
  defaultLength = 1,
  onChange,
  onSubmit,
}: ContractYearGridProps) {
  const [contract, setContract] = useState<ContractFormValues>({
    startYear: defaultStartYear,
    signingDate: new Date("2026-04-04"),
    signingTeam: "ducks",
    years: Array.from({ length: defaultLength }, emptyYear),
  });

    console.log(contract.years)
  const [qf, setQF] = useState<QuickFillState>(emptyQuickFill);

      // useEffect(() => {
        

      // }, [contract.years]);


    // const {errors, meta} = ValidateContract({
    //       sept15Age: 33,
    //       june30Age: 32,
    //       contractType: "SPC-FA",
    //       contractYears: contract.years
    //     })

        
      function handleSetSigningDate(newDate: Date | null) {
    if (!newDate) return;

    setContract((prev) => ({
      ...prev,
      signingDate: newDate,
    }));
  }

  const updateContract = useCallback(
    (updater: (prev: ContractFormValues) => ContractFormValues) => {
      setContract((prev) => {
        const next = updater(prev);
        onChange?.(next);
        return next;
      });
    },
    [onChange]
  );

  function handleSigningTeamChange(newTeam: string) {
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
              ...Array.from({ length: newLen - prev.years.length }, emptyYear),
            ]
          : prev.years.slice(0, newLen);

      return { ...prev, years };
    });

    setQF((prev) => {
      const selections = { ...prev.selections };

      for (const key of Object.keys(selections) as QuickFillKey[]) {
        const pruned = new Set<number>();
        for (const index of selections[key]) {
          if (index < newLen) pruned.add(index);
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
      years[rowIndex] = { ...years[rowIndex], [field]: value };
      return { ...prev, years };
    });
  }

  function handleSalaryBlur(rowIndex: number, field: keyof ContractYear, raw: string) {
    const parsed = parseSalaryInput(raw);
    updateContract((prev) => {
      const years = [...prev.years];
      years[rowIndex] = { ...years[rowIndex], [field]: parsed ?? 0 };
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
    const length = contract.years.length;
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



  const calculatedCapHit = getCalculatedCapHit(contract.years);

  return (
<div className="flex w-7xl m-auto gap-3">
     
   

      <div className="space-y-6 w-fit">
        <ContractInfo
          contract={contract}
          updateContract={updateContract}
          handleLengthChange={handleLengthChange}
          handleSigningTeamChange={handleSigningTeamChange}
          handleSetSigningDate={handleSetSigningDate}
        />

        <QuickFillPanel
          qf={qf}
          startYear={contract.startYear}
          yearCount={contract.years.length}
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
              {contract.years.map((row, index) => {
                const year = contract.startYear + index;
                const yearLabel = `${year}–${String(year + 1).slice(-2)}`;
                return (
                  <ContractYearRow
                    key={index}
                    row={row}
                    index={index}
                    yearLabel={yearLabel}
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
    {/* <ContractValidationLog 
        logs={errors}
      /> */}
    </div>
  );
}

export type { ContractFormValues, ContractYear, ClauseType } from "./contract-grid.types";
