// live-odds-table.tsx
import { useMemo } from "react";
import { Trophy } from "lucide-react";
import type { TeamLotteryCombo, TeamTricodes } from "./utils";
import { getBallsNeededToWinLotto, getRemainingValidCombos } from "./utils";
import { getTeamMetaData } from "@/lib/utils/meta.utils";

interface ILiveOddsTable {
  lotteryCombos: Array<TeamLotteryCombo>;
  drawnCombo: Array<number>;
  lottery1Winner: TeamLotteryCombo | null;
  lottery2Winner: TeamLotteryCombo | null;
  activeLottery: 1 | 2;
}

export const LiveOddsTable = ({
  lotteryCombos,
  drawnCombo,
  lottery1Winner,
  lottery2Winner,
  activeLottery,
}: ILiveOddsTable) => {
  const ballsDrawn = drawnCombo.length;
  const showNextBalls = ballsDrawn >= 3; // 3 drawn = 1 left

  const oddsRows = useMemo(() => {
    const flatAll = lotteryCombos.map((t) => t.combos).flat();
    const leagueWideRemaining = getRemainingValidCombos(drawnCombo, flatAll);
    const leagueTotal = leagueWideRemaining.length;

    return lotteryCombos
      .map((team) => {
        const remainingCombos = getRemainingValidCombos(drawnCombo, team.combos);
        const ballsNeeded = getBallsNeededToWinLotto(drawnCombo, remainingCombos);
        const oddsValue = leagueTotal > 0 ? (remainingCombos.length / leagueTotal) * 100 : 0;
        const isL1Winner = lottery1Winner?.originalOwner === team.originalOwner;
        const isL2Winner = lottery2Winner?.originalOwner === team.originalOwner;

        return {
          originalOwner: team.originalOwner,
          currentOwner: team.currentOwner,
          ovr: team.ovr,
          remainingCombos: remainingCombos.length,
          odds: oddsValue,
          oddsDisplay: oddsValue.toFixed(1) + "%",
          ballsNeeded,
          isL1Winner,
          isL2Winner,
        };
      })
      .filter((row) => row.odds > 0 || row.isL1Winner || row.isL2Winner)
      .sort((a, b) => b.odds - a.odds);
  }, [lotteryCombos, drawnCombo, lottery1Winner, lottery2Winner]);

  const phaseLabel =
    activeLottery === 1
      ? ballsDrawn === 0
        ? "Waiting for lottery 1"
        : `Lottery 1 · ball ${ballsDrawn} of 4`
      : ballsDrawn === 0
      ? "Lottery 2 ready"
      : `Lottery 2 · ball ${ballsDrawn} of 4`;

  const totalRemaining = oddsRows.reduce((s, r) => s + r.remainingCombos, 0);

  return (
    // self-stretch makes the odds table fill the full height of the flex row,
    // matching the lottery panels on the left regardless of their combined height.
    <div className="flex flex-col flex-1 min-w-0 rounded-xl border bg-card shadow-sm overflow-hidden self-stretch">
      {/* Header */}
      <div className="px-2.5 justify-between flex py-1.5 border-b bg-muted/30 shrink-0">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          Live odds 
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {phaseLabel}
        </span>
      </div>

      {/* Rows */}
      <div className="flex-1 overflow-y-auto divide-y divide-border/50">
        {oddsRows.map((row) => {
          const meta = getTeamMetaData(row.currentOwner as TeamTricodes);
          const isWinner = row.isL1Winner || row.isL2Winner;
          const isEliminated = row.isL1Winner && activeLottery === 2;
        
          const isRedrawCandidate =
              activeLottery === 2 &&
              row.isL1Winner;

          const isFullyEliminated =
            row.isL2Winner;
        
          const showBalls =
            showNextBalls &&
            !isFullyEliminated &&
            row.ballsNeeded.length > 0;
            
            return (
            <div
              key={row.originalOwner}
              className={`px-3 py-2 transition-colors ${
                isWinner
                  ? "bg-emerald-500/[0.07]"
                  : isRedrawCandidate
                  ? "bg-amber-500/6"
                  : isFullyEliminated
                  ? "opacity-40"
                  : ""
              }`}
            >
              {/* Team row */}
            <div className="flex items-center gap-1.5">
  <img
    src={`/logos/nhl/${meta.teamSlug}.svg`}
    className="h-4.5 w-4.5 shrink-0"
    alt=""
  />

  <span className="font-mono text-[12px] font-medium flex-1 truncate">
    {row.currentOwner}
  </span>
    {isRedrawCandidate  && ballsDrawn < 4 && ballsDrawn > 0 && (
      <div className="mt-1 text-[10px] text-amber-600 font-medium">
        Matching combo results in redraw
      </div>
    )}
  {isWinner && (
    <Trophy className="h-3 w-3 text-emerald-500 shrink-0" />
  )}

  {/* Right side */}
  <div className="flex items-center gap-2 shrink-0">
    {isFullyEliminated || !showBalls ? null : (
      <div className="flex items-center gap-1">
        <span className="text-[10px] text-muted-foreground">
          needs
        </span>

        {[...row.ballsNeeded]
          .sort((a, b) => (a as unknown as number) - (b as unknown as number))
          .map((ball, i, arr) => (
            <div key={`ball-${ball}`} className="flex items-center gap-1">
              <span
                className="inline-flex h-4.5 w-4.5 items-center justify-center rounded-full text-[9px] font-semibold tabular-nums leading-none shrink-0"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1.5px solid #00000022",
                  color: "#000000",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.08)",
                }}
              >
                {ball}
              </span>

              {i < arr.length - 1 && (
                <span className="text-[10px] text-muted-foreground leading-none">
                  |
                </span>
              )}
            </div>
          ))}
      </div>
    )}

    <span
      className={`tabular-nums text-[12px] font-medium ${
        isWinner ? "text-emerald-600" : ""
      }`}
    >
      {isFullyEliminated ? "—" : row.oddsDisplay}
    </span>
  </div>
  
</div>

              {/* Bar */}
              {!isEliminated && (
                <div className="mt-1.5 h-0.5 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${row.odds.toFixed(1)}%`,
                      backgroundColor: meta.primaryColor,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-3 py-2 border-t bg-muted/30 shrink-0">
        <p className="text-[10px] text-muted-foreground tabular-nums">
          {totalRemaining} combos remaining
        </p>
      </div>
    </div>
  );
};