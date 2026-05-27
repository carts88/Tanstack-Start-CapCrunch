import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

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


interface IContractYearQuickFill {
    
}

export const ContractYearQuickFill = ({

} :  IContractYearQuickFill) => {
    
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
    )
}