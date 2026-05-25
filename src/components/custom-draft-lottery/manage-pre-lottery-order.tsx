// manage-pre-lottery-order.tsx
// Step 1 of the lottery flow — set the pre-lottery draft order, assign trades,
// add notes, and generate lottery combos to kick off the draw.

import { useMemo, useState } from "react";
import { AlertCircle, ArrowRight } from "lucide-react";
import { TeamTricodes } from "@/lib/types/global-hockey-types";
import { nhlTeams } from "@/lib/constants/metadata";
import SelectWithSearchImage from "../ui/advanced/select-with-search";
import { assignLotteryCombos, TeamLotteryCombo, LOTTERY_COMBOS_FOR_OVR } from "./utils";

const nhlTeamsWithImages = nhlTeams.map((team) => ({
  label: team.label,
  value: team.value,
  imagePath: `/logos/nhl/${team.teamSlug}.svg`,
}));

export interface DraftOrder {
  originalOwner: TeamTricodes;
  currentOwner: TeamTricodes;
  ovr: number;
  note: string;
  combos?: number[][]
  isLocked?: boolean;
}

const buildBaseOrder = (): DraftOrder[] => {
  const base: Partial<DraftOrder>[] = [
    { originalOwner: "TOR", currentOwner: "TOR" },
    { originalOwner: "SJS", currentOwner: "SJS" },
    { originalOwner: "VAN", currentOwner: "VAN" },
    { originalOwner: "CHI", currentOwner: "CHI" },
    { originalOwner: "NYR", currentOwner: "NYR" },
    { originalOwner: "CGY", currentOwner: "CGY" },
    { originalOwner: "SEA", currentOwner: "SEA" },
    { originalOwner: "WPG", currentOwner: "WPG" },
    { originalOwner: "FLA", currentOwner: "FLA" },
    { originalOwner: "NSH", currentOwner: "NSH" },
    { originalOwner: "STL", currentOwner: "STL" },
    { originalOwner: "NJD", currentOwner: "NJD" },
    { originalOwner: "NYI", currentOwner: "NYI" },
    { originalOwner: "CBJ", currentOwner: "CBJ" },
    { originalOwner: "DET", currentOwner: "STL" },
    { originalOwner: "WSH", currentOwner: "WSH" },
  ];

  return Array.from({ length: 16 }, (_, i) => ({
    ovr: i + 1,
    originalOwner: (base[i]?.originalOwner ?? "TOR") as TeamTricodes,
    currentOwner: (base[i]?.currentOwner ?? "TOR") as TeamTricodes,
    note: "",
  }));
};

interface IManagePreLotteryOrder {
  onCombosGenerated: (combos: TeamLotteryCombo[]) => void;
}

export const ManagePreLotteryOrder = ({ onCombosGenerated }: IManagePreLotteryOrder) => {
  const [order, setOrder] = useState<DraftOrder[]>(buildBaseOrder);

  const duplicateOriginals = useMemo<Set<TeamTricodes>>(() => {
    const seen = new Map<TeamTricodes, number>();
    for (const pick of order) {
      seen.set(pick.originalOwner, (seen.get(pick.originalOwner) ?? 0) + 1);
    }
    const dupes = new Set<TeamTricodes>();
    for (const [team, count] of seen) {
      if (count > 1) dupes.add(team);
    }
    return dupes;
  }, [order]);

  const hasErrors = duplicateOriginals.size > 0;
  const tradedCount = order.filter((r) => r.originalOwner !== r.currentOwner).length;

  const updateRow = (index: number, updated: DraftOrder) => {
    setOrder((prev) => prev.map((r, i) => (i === index ? updated : r)));
  };

  const handleGenerate = () => {
    const combos = assignLotteryCombos(order);
    onCombosGenerated(combos);
  };

  return (
    <div className="mx-auto w-full max-w-5xl space-y-5 p-2">
      {/* Page header */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">Pre-Lottery Draft Order</h2>
        <p className="text-sm text-muted-foreground">
          Set the worst-to-best draft order for the 16 lottery teams. If a pick has been traded,
          update the "Current Owner" column. Add any trade notes in the note field.
        </p>
      </div>

     

      {/* Error banner */}
      {hasErrors && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3">
          <AlertCircle className="h-4 w-4 text-destructive shrink-0" />
          <p className="text-sm text-destructive">
            Duplicate original owners detected:{" "}
            <strong>{[...duplicateOriginals].join(", ")}</strong>. Each team may only appear once as an
            original owner.
          </p>
        </div>
      )}

      {/* Column headers */}
      <div className="grid grid-cols-[40px_1fr_1fr_1fr_auto] gap-3 px-1">
        <div />
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Original Owner
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Current Owner
          <span className="ml-1 font-normal normal-case">(if traded)</span>
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Note
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground w-16 text-right">
          Combos
        </p>
      </div>

      {/* Order rows */}
      <div className="space-y-1.5">
        {order.map((row, index) => {
          const isTraded = row.originalOwner !== row.currentOwner;
          const isDupeOriginal = duplicateOriginals.has(row.originalOwner);

          return (
            <div
              key={row.ovr}
              className={`grid grid-cols-[40px_1fr_1fr_1fr_auto] gap-3 items-center rounded-lg border px-2 py-1 transition-colors
                ${isDupeOriginal ? "border-destructive/40 bg-destructive/5" : isTraded ? "border-amber-200 bg-amber-50/50 dark:border-amber-800/50 dark:bg-amber-950/20" : ""}
              `}
            >
              {/* Pick number */}
              <div className="flex items-center justify-center">
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold tabular-nums
                    ${row.ovr <= 3 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}
                  `}
                >
                  {row.ovr}
                </span>
              </div>

              {/* Original owner */}
              <SelectWithSearchImage
                id={`original-${row.ovr}`}
                subject="Teams"
                items={nhlTeamsWithImages as any}
                value={row.originalOwner}
                onValueChange={(value) =>
                  updateRow(index, { ...row, originalOwner: value as TeamTricodes })
                }
              />

              {/* Current owner */}
              <div className="relative">
                {isTraded && (
                  <ArrowRight className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-3 w-3 text-amber-500 z-10" />
                )}
                <SelectWithSearchImage
                  id={`current-${row.ovr}`}
                  subject="Teams"
                  items={nhlTeamsWithImages as any}
                  value={row.currentOwner}
                  onValueChange={(value) =>
                    updateRow(index, { ...row, currentOwner: value as TeamTricodes })
                  }
                />
              </div>

              {/* Note */}
              <input
                value={row.note}
                onChange={(e) => updateRow(index, { ...row, note: e.target.value })}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder={isTraded ? "Trade details…" : "Optional note…"}
              />

              {/* Combo count */}
              <div className="w-16 text-right">
                <span className="text-xs tabular-nums font-semibold text-muted-foreground">
                  {LOTTERY_COMBOS_FOR_OVR[index]}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer: summary + action */}
      <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-5 py-3">
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <span>
            <strong className="text-foreground">16</strong> picks
          </span>
          {tradedCount > 0 && (
            <span>
              <strong className="text-amber-600 dark:text-amber-400">{tradedCount}</strong> traded
            </span>
          )}
          <span>
            <strong className="text-foreground">1,001</strong> total combos
          </span>
        </div>

        <button
          onClick={handleGenerate}
          disabled={hasErrors}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Combos
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};