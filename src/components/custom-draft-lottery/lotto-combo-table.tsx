// lotto-combo-table.tsx
// Displays each team's assigned lottery combinations with odds and expandable combo lists.

import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { TeamLotteryCombo } from "./utils";

interface ILottoComboTable {
  lotteryCombos: TeamLotteryCombo[];
}

export const LottoComboTable = ({ lotteryCombos }: ILottoComboTable) => {
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  const totalCombos = useMemo(
    () => lotteryCombos.reduce((sum, t) => sum + t.combos.length, 0),
    [lotteryCombos]
  );

  const maxCombos = useMemo(
    () => Math.max(...lotteryCombos.map((t) => t.combos.length)),
    [lotteryCombos]
  );

  return (
    <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b bg-muted/30">
        <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
          Lottery Combo Assignments
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {totalCombos} total combinations across {lotteryCombos.length} teams — click a row to view assigned combos
        </p>
      </div>

      {/* Table */}
      <div className="max-h-150 overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10 bg-background border-b">
            <tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide w-12">
                Pick
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Original Owner
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Current Owner
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide w-32">
                Combos
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide w-40">
                Draft Odds
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border/50">
            {lotteryCombos.map((team) => {
              const odds =
                totalCombos === 0
                  ? 0
                  : (team.combos.length / totalCombos) * 100;
              const isExpanded = expandedTeam === team.originalOwner;
              const isTraded = team.originalOwner !== team.currentOwner;
              const barWidth = maxCombos > 0 ? (team.combos.length / maxCombos) * 100 : 0;

              return (
                <>
                  <tr
                    key={team.originalOwner}
                    className={`transition-colors cursor-pointer hover:bg-muted/40 ${
                      isExpanded ? "bg-muted/30" : ""
                    }`}
                    onClick={() =>
                      setExpandedTeam(isExpanded ? null : team.originalOwner)
                    }
                  >
                    {/* Pick # */}
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-xs font-bold tabular-nums">
                        {team.ovr}
                      </span>
                    </td>

                    {/* Original owner */}
                    <td className="px-4 py-3">
                      <span className="font-mono font-semibold text-sm">{team.originalOwner}</span>
                    </td>

                    {/* Current owner */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-semibold text-sm">{team.currentOwner}</span>
                        {isTraded && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 font-medium">
                            TRADED
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Combo count */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {isExpanded ? (
                          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        ) : (
                          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        )}
                        <span className="tabular-nums font-medium">{team.combos.length}</span>
                      </div>
                    </td>

                    {/* Odds with bar */}
                    <td className="px-4 py-3">
                      <div className="space-y-1">
                        <span className="tabular-nums text-sm font-semibold">{odds.toFixed(2)}%</span>
                        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary/70 transition-all"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded combo list */}
                  {isExpanded && (
                    <tr key={`${team.originalOwner}-expanded`}>
                      <td colSpan={5} className="px-4 pb-4 pt-1 bg-muted/20">
                        <div className="rounded-lg border border-border/60 bg-background p-3">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                            Assigned Combinations
                          </p>
                          <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-1 max-h-48 overflow-auto">
                            {team.combos.map((combo, i) => (
                              <span
                                key={i}
                                className="font-mono text-xs px-2 py-1 rounded bg-muted/60 text-muted-foreground"
                              >
                                {combo.join(" · ")}
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer summary */}
      <div className="px-5 py-3 border-t bg-muted/20 flex items-center gap-6 text-xs text-muted-foreground">
        <span>
          <strong className="text-foreground">{totalCombos}</strong> total combos
        </span>
        <span>
          <strong className="text-foreground">{lotteryCombos.length}</strong> teams eligible
        </span>
        <span>
          Top odds: <strong className="text-foreground">
            {((lotteryCombos[0]?.combos.length ?? 0) / totalCombos * 100).toFixed(2)}%
          </strong>
        </span>
      </div>
    </div>
  );
};