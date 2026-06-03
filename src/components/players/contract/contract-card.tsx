import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExpiryStatusPill } from '@/components/ui/misc/expiry-status-pill';
import type { ExpiryStatus } from "@/lib/types/global-hockey-types";

// icons
import { ArrowUpDown } from 'lucide-react';
import { CURRENT_SEASON } from '@/lib/constants/hockey';
import { Link } from '@tanstack/react-router';
type StatField =
  | { label: string; value: string | number; link?: never }
  | { label: string; value: string; link: { to: string; params: Record<string, string> } };

const expiryStyle: Record<string, { bg: string; text: string; border: string }> = {
  UFA:  { bg: "bg-red-500",    text: "text-red-800",    border: "border-red-800"    },
  RFA:  { bg: "bg-blue-500",   text: "text-blue-800",   border: "border-blue-800"   },
  ARFA: { bg: "bg-purple-50", text: "text-purple-800", border: "border-purple-300" },
  ARB:  { bg: "bg-purple-50", text: "text-purple-800", border: "border-purple-300" },
};

const cols = [
  { key: "sept15Age",                label: "Age*"   },
  { key: "caphit",             label: "Cap hit"      },
  { key: "capPct",             label: "Cap %"        },
  { key: "baseSalary",         label: "Base salary"  },
  { key: "signingBonus",     label: "Signing b."},
  { key: "performanceBonus", label: "Perf. b"  },
  { key: "totalSalary",        label: "Total. sal" },
  { key: "minorsSalary",       label: "Minors"       },
  {key: "clause", label: "clause"}
] as const;

type ColKey = typeof cols[number]["key"];

type ContractDetail = {
  season: number;
  clause?: string;
  capHit: string;
  aav: string;
  performanceBonus: string;
  signingBonus: string;
  baseSalary: string;
  totalSalary: string;
  minorsSalary: string;
  salaryCap?: number;
};

export type ContractPerformance = {
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  costPerPoint: string
  toiPerGame: string;
};

type Contract = {
  contractType: string;
  signedBy: string;
  length: string;
  value: string;
  expiryStatus: string;
  capPercent: string;
  signingTeam: string;
  signingDate: string;
  signingGm: string;
  signingGmSlug: string
  contractYears: ContractDetail[];
  qualifyingOffer?: string;
  buriedCaphit: string;
  loadType: "back-loaded" | "front-loaded"
};




const isBonus = (val: string) => val !== "$0" && val !== "" && val !== "—";

const PerfStat = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-xs font-medium text-foreground tabular-nums">{value}</span>
    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{label}</span>
  </div>
);




export const ContractCard = ({
  contract,
  performance,
}: {
  contract: Contract;
  currentSeason?: string;
  performance?: ContractPerformance;
}) => {
  // const expiryStyle_ = expiryStyle[contract.expiryStatus];

  const statFields: StatField[] = [
    {
      label: "Signed by",
      value: contract.signingGm,
      link: { to: "/staff/$staffSlug", params: { staffSlug: contract.signingGmSlug } },
    },
    {
      label: "Team",
      value: contract.signingTeam,
      link: { to: "/teams/$team", params: { team: contract.signingTeam } },
    },
    { label: "Signing date", value: contract.signingDate },
    { label: "Length",       value: contract.contractYears.length },

    ...(contract.qualifyingOffer
      ? [{ label: "Qualifying offer", value: contract.qualifyingOffer }]
      : []),
  ];


  const totals: Record<string, number> = {
    capHit: 0, baseSalary: 0, signingBonus: 0,
    performanceBonus: 0, totalSalary: 0, minorsSalary: 0,
  };
  // contract.contractYears.forEach(row => {
  //   Object.keys(totals).forEach(k => {
  //     totals[k] += parseDollar(row[k as keyof ContractDetail] as string);
  //   });
  // });

  const getCell = (row: ContractDetail, key: ColKey): { value: string; cls: string } => {
    
    if (key === "capPct") {
      return { value: "-", cls: "text-muted-foreground" };
    }
    const val = row[key as keyof ContractDetail] as string || "—";
    const bonus = (key === "signingBonus" || key === "performanceBonus") && isBonus(val);
    const muted = key === "minorsSalary";
    return {
      value: val,
      cls: bonus ? "text-sky-600" : muted ? "text-muted-foreground" : "text-foreground",
    };
  };


  return (
    <Card className="w-full p-0 overflow-hidden bg-card text-card-foreground">
      <CardContent className="p-0">

        {/* Header */}
          <div className="px-4 py-3 border-b border-border bg-muted/40">
          <div className="flex items-center justify-between gap-3">
            <span className="text-md font-semibold text-foreground shrink-0">
              {contract.contractType}
            </span>
            
            {/* {expiryStyle_ && (
              <ExpiryStatusPill status={contract.expiryStatus as ExpiryStatus} />
            )} */}
          </div>
        </div>

        {/* Stat grid */}
        <div
          className="border-b border-border divide-x divide-border"
          style={{ display: "grid", gridTemplateColumns: `repeat(${statFields.length}, minmax(0, 1fr))` }}
        >
          {statFields.map(f => (
            <div key={f.label} className="px-4 py-2.5 bg-muted/20 flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
                {f.label}
              </span>
              {f.link ? (
                <Link to={f.link.to} params={f.link.params}>
                  <span className="text-sm font-semibold text-foreground hover:text-primary/40 transition-colors">
                    {f.value}
                  </span>
                </Link>
              ) : (
                <span className="text-sm font-semibold text-foreground">{f.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Season breakdown table */}
        <div className="overflow-x-auto ">
          <Table className="w-full text-xs">
            <TableHeader>
              <TableRow className="bg-muted/40 text-muted-foreground">
                <TableHead className="px-3 py-2 text-left font-medium uppercase tracking-wide">Season</TableHead>
                {cols.map(c => (
                  <TableHead key={c.key} className="px-3 py-2 text-right font-medium uppercase tracking-wide whitespace-nowrap">
                    {c.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-border">
              {contract.contractYears.map(row => {
                const isCurrent = row.season === CURRENT_SEASON;
                const isTwoWay = row.totalSalary != row.minorsSalary
                return (
                  <TableRow
                    key={row.season}
                    className={[
                      isCurrent && "bg-primary/35",
                    ].join(" ") }
                  >
                    <TableCell className="px-3 py-2 flex gap-2 items-center font-medium text-muted-foreground">
                      {row.season}
                      {isTwoWay && <ArrowUpDown className='h-3 w-3 text-green-700' />}
                    </TableCell>
                    {cols.map(c => {
                      const { value, cls } = getCell(row, c.key);
                      return (
                        <TableCell key={c.key} className={`px-3 py-2 text-right tabular-nums ${cls}`}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
            <tfoot>
              <tr className="border-t border-border bg-muted/40 font-medium">
                <td className="px-3 py-2 text-xs text-muted-foreground">Totals</td>
                {cols.map(c => {
                  if (c.key === "capPct") {
                    return <td key={c.key} className="px-3 py-2 text-right text-xs text-muted-foreground">—</td>;
                  }
                  return (
                    <td key={c.key} className="px-3 py-2 text-right text-xs tabular-nums text-foreground">
                      {/* {total > 0 ? fmtDollar(total) : "—"} */}
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </Table>
        </div>

        {/* Footer: performance (left) + fan rating (center) + buyout (right) */}
       <div className="px-3 py-2.5 border-t border-border bg-muted/20 flex items-center gap-4 flex-wrap">
  {/* Contract performance — inline subtle stats */}
  {performance && (
    <div className="flex items-center gap-2 divide-x divide-border">
      <div className="px-4 ">
        <PerfStat label="GP" value={String(performance.gamesPlayed)} />
      </div>
      <div className="px-4">
        <PerfStat label="G" value={String(performance.goals)} />
      </div>
      <div className="px-4">
        <PerfStat label="A" value={String(performance.assists)} />
      </div>
      <div className="px-4">
        <PerfStat label="Pts" value={String(performance.points)} />
      </div>
      <div className="px-4">
        <PerfStat label="TOI/GP" value={performance.toiPerGame} />
      </div>
      <div className="px-4 last:pr-0">
        <PerfStat label="$/pt" value={performance.costPerPoint} />
      </div>
    </div>
  )}

  {/* Spacer */}
  <div className="flex-1 min-w-4" />

  {/* Fan rating */}
  {/* <div className="flex items-center gap-2">
    <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
      Fan rating
    </span>
    <StarRating />
  </div> 
 */}
  <button className="text-[11px] font-medium text-muted-foreground hover:text-foreground border border-border hover:border-border/80 rounded px-2.5 py-1 bg-transparent hover:bg-muted/40 transition-colors cursor-pointer">
    Buyout
  </button>
   
   <button className="text-[11px] font-medium text-muted-foreground hover:text-foreground border border-border hover:border-border/80 rounded px-2.5 py-1 bg-transparent hover:bg-muted/40 transition-colors cursor-pointer">
    Comparables
  </button>
</div>

      </CardContent>
    </Card>
  );
};