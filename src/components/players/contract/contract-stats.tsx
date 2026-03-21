import { Card, CardContent } from "@/components/ui/card";

const fmtDollar = (n: number): string => {
  if (n === 0) return "—";
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
};

interface IContractStats {
  projCareerSalary: number;
  totalContracts: number;
  totalGTDMoney: number;
  contractTypeBreakDown: {
    elc: number;
    spc: number;
    _35Plus: number;
  };
}

const contractTypeLabel: Record<string, string> = {
  elc:     "ELC",
  spc:     "SPC",
  _35Plus: "35+",
};

const contractTypeBadgeStyle: Record<string, string> = {
  elc:     "bg-sky-50 text-sky-800 border-sky-300",
  spc:     "bg-amber-50 text-amber-800 border-amber-300",
  _35Plus: "bg-rose-50 text-rose-800 border-rose-300",
};

export const ContractStats = ({
  projCareerSalary,
  totalContracts,
  totalGTDMoney,
  contractTypeBreakDown,
}: IContractStats) => {
  const activeTypes = (Object.entries(contractTypeBreakDown) as [string, number][]).filter(
    ([, count]) => count > 0
  );

  const stats = [
    { label: "Proj. Career Salary", value: fmtDollar(projCareerSalary) },
    { label: "Total Contracts",     value: String(totalContracts) },
    { label: "Guaranteed Money",    value: fmtDollar(totalGTDMoney) },
  ];

  return (
    <Card className="w-full p-0 overflow-hidden bg-card text-card-foreground">
      <CardContent className="p-0">

        {/* Header */}
        <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between gap-3 flex-wrap">
          <span className="text-md font-semibold text-foreground">Career Contract Summary</span>
          <div className="flex items-center gap-1.5">
            {activeTypes.map(([type, count]) => (
              <span
                key={type}
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${contractTypeBadgeStyle[type] ?? "bg-muted text-muted-foreground border-border"}`}
              >
                {count} {contractTypeLabel[type] ?? type}
              </span>
            ))}
          </div>
        </div>

        {/* Stat grid */}
        <div
          className="divide-x divide-border"
          style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
        >
          {stats.map((f) => (
            <div key={f.label} className="px-4 py-2.5 bg-muted/20 flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">{f.label}</span>
              <span className="text-sm font-semibold text-foreground tabular-nums">{f.value}</span>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  );
};