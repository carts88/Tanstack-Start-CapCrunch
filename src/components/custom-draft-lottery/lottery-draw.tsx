// lottery-draw.tsx
// Handles the actual live lottery draw — two separate draws with winner detection,
// invalid combo handling, and real-time odds updating.
import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Circle, Download, RefreshCw, Trophy } from "lucide-react";

import { Button } from "../ui/button";
import {
  combosEqual,
  findTeamByCombo,
  getBallsNeededToWinLotto,
  getRemainingValidCombos,
  handleLottery1Winner,
  handleLottery2Winner,
  isComboInvalid,
} from "./utils";
import type { TeamLotteryCombo, TeamTricodes } from "./utils";
import { getTeamMetaByTricode } from "@/lib/utils/meta.utils";
import { takeScreenshot } from '@/lib/utils';
import { LiveOddsTable } from "./live-odds-display";
import { InfoTooltip } from "../cba/reusable/info-tooltip";

interface ILotteryDraw {
  lotteryCombos: Array<TeamLotteryCombo>;
}

interface IDisplayBallsDrawn {
  combo: Array<number>;
  lottoNumber: 1 | 2;
  isComplete: boolean;
  winner: TeamLotteryCombo | null;
}

interface ICountdownPresetButtons {
  values: number[];
  setCountdown: React.Dispatch<React.SetStateAction<number>>;
  isDrawing: boolean;
  selectedCountdown: number;
}

export const CountdownPresetButtons = ({
  values,
  setCountdown,
  isDrawing,
  selectedCountdown,
}: ICountdownPresetButtons) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex items-center gap-1 rounded-lg border p-1">
        {values.map((value) => (
          <button
            key={value}
            type="button"
              onClick={() => setCountdown(value)}
                disabled={isDrawing}
                className={`
                  rounded-md px-3 py-1 text-xs font-medium transition-colors hover:bg-muted
                  ${selectedCountdown === value ? "bg-primary text-primary-foreground" : "bg-transparent"}
                  `}
              >
                {value}s
              </button>
            ))}
          </div>
          <InfoTooltip msg="Set the countdown timer for the lottery draw." />

    </div>
  );
};
const Ball = ({ num, animate }: { num: number; animate?: boolean }) => (
  <div
    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary/60 bg-primary/10 text-base font-bold tabular-nums shadow-sm transition-all
      ${animate ? "scale-110 ring-2 ring-primary/40 ring-offset-1" : ""}
    `}
  >
    {num}
  </div>
);

const EmptyBall = () => (
  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-border/50 bg-muted/30">
    <Circle className="h-3 w-3 text-border/50" />
  </div>
);

const DisplayBallsDrawn = ({ combo, lottoNumber, isComplete }: IDisplayBallsDrawn) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Lottery {lottoNumber}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {Array.from({ length: 4 }, (_, i) =>
          i < combo.length ? (
            <Ball key={i} num={combo[i]} animate={i === combo.length - 1 && !isComplete} />
          ) : (
            <EmptyBall key={i} />
          )
        )}
      </div>
    </div>
  );
};

export const LotteryDraw = ({ lotteryCombos }: ILotteryDraw) => {
  const [lottoCombo1, setLottoCombo1] = useState<Array<number>>([
    // 6, 7, 8, 9
  ]);
  const [lottoCombo2, setLottoCombo2] = useState<Array<number>>([
    // 9, 11, 12, 13
  ]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedCountdown, setSelectedCountdown] = useState(3);
  const [countdown, setCountdown] = useState<number | null>(null);
  const combosMatch =
    lottoCombo1.length === 4 &&
    lottoCombo2.length === 4 &&
    combosEqual(lottoCombo1, lottoCombo2);

  const lottery1Invalid = isComboInvalid(lottoCombo1);
  const lottery1Winner = useMemo(
    () => (lottoCombo1.length === 4 && !lottery1Invalid ? findTeamByCombo(lottoCombo1, lotteryCombos) : null),
    [lottoCombo1, lottery1Invalid, lotteryCombos]
  );

  const lottery2Winner = useMemo(
    () => (lottoCombo2.length === 4 && !isComboInvalid(lottoCombo2) ? findTeamByCombo(lottoCombo2, lotteryCombos) : null),
    [lottoCombo2, lotteryCombos]
  );

  const duplicateWinningTeam =
    lottery1Winner &&
    lottery2Winner &&
    lottery1Winner.originalOwner === lottery2Winner.originalOwner;

  const lottery2Invalid =
    isComboInvalid(lottoCombo2) || combosMatch || !!duplicateWinningTeam;

  // Determine which lottery is currently active
  const activeLottery = lottoCombo1.length < 4 ? 1 : 2;

  // Countdown tick
  useEffect(() => {
    if (!isDrawing || countdown === null || countdown === 0) return;
    const timer = setTimeout(() => setCountdown((p) => (p !== null ? p - 1 : null)), 1000);
    return () => clearTimeout(timer);
  }, [countdown, isDrawing]);


  /// Lottery result effects - recalculate remaining combos and odds after each draw, and determine if redraw is needed
  useEffect(() => {
    console.log("lottoCombo1 changed", lottoCombo1);
    const flattenedCombos = lotteryCombos.map((team) => team.combos).flat();
    const leagueWideRemainingCombos = getRemainingValidCombos(lottoCombo1, flattenedCombos);
  
    const remainingCombos = lotteryCombos.map((team) => {
      const remainingValidCombos = getRemainingValidCombos(lottoCombo1, team.combos)

      return {
        ...team,
        combos: remainingValidCombos,
        ballNeededToWin: getBallsNeededToWinLotto(lottoCombo1, remainingValidCombos),
        totalCombos: remainingValidCombos.length,
        odds: ((remainingValidCombos.length / leagueWideRemainingCombos.length) * 100).toFixed(2) + "%",
      }
    }).filter(team => team.combos.length > 0);

    
    const totalRemainingCombos = remainingCombos.reduce((sum, team) => sum + team.combos.length, 0);

    console.log("lotto1 remainingCombos" , remainingCombos)
    console.log("lotto1 totalRemainingCombos (league-wide)" , totalRemainingCombos)

  }, [lottoCombo1]);


  useEffect(() => {
    console.log("lottoCombo2 changed", lottoCombo2);
    const flattenedCombos = lotteryCombos.map((team) => team.combos).flat();
    const leagueWideRemainingCombos = getRemainingValidCombos(lottoCombo2, flattenedCombos);
  
    const remainingCombos = lotteryCombos.map((team) => {
      const remainingValidCombos = getRemainingValidCombos(lottoCombo2, team.combos)

      return {
        ...team,
        combos: remainingValidCombos,
        ballNeededToWin: getBallsNeededToWinLotto(lottoCombo2, remainingValidCombos),
        totalCombos: remainingValidCombos.length,
        odds: ((remainingValidCombos.length / leagueWideRemainingCombos.length) * 100).toFixed(2) + "%",
      }
    }).filter(team => team.combos.length > 0);

    
    const totalRemainingCombos = remainingCombos.reduce((sum, team) => sum + team.combos.length, 0);

    console.log("lotto2 remainingCombos" , remainingCombos)
    console.log("lotto2 totalRemainingCombos (league-wide)" , totalRemainingCombos)

  }, [lottoCombo2]);



  const getRandomBall = (existingCombo: Array<number>) => {
    const available = Array.from({ length: 14 }, (_, i) => i + 1).filter(
      (n) => !existingCombo.includes(n)
    );
    return available[Math.floor(Math.random() * available.length)];
  };

async function drawBall() {
  if (isDrawing) return;

  setIsDrawing(true);

  // initialize active countdown
  setCountdown(selectedCountdown);

  await new Promise((resolve) =>
    setTimeout(resolve, selectedCountdown * 1000)
  );

  if (lottoCombo1.length < 4) {
    setLottoCombo1((prev) => [...prev, getRandomBall(prev)]);
  } else if (lottoCombo2.length < 4) {
    setLottoCombo2((prev) => [...prev, getRandomBall(prev)]);
  }

  setCountdown(null);
  setIsDrawing(false);
}

function restartLottery(lotteryNumber: 1 | 2) {
    if (lotteryNumber === 1) {
      setLottoCombo1([]);
      // Also reset lottery 2 since lottery 1 determines eligible teams for lottery 2
      setLottoCombo2([]);
    } else {
      setLottoCombo2([]);
    }
  }

  const remainingCombos = lotteryCombos.map((team) => team.combos).flat().filter((combo) => {
    // Exclude combos that match the drawn numbers in either lottery
    if (lottoCombo1.length > 0 && combosEqual(combo, lottoCombo1)) return false;
    if (lottoCombo2.length > 0 && combosEqual(combo, lottoCombo2)) return false;
    return true;
  });

  console.log(remainingCombos)

  const isDrawButtonDisabled =
    isDrawing ||
    lottery1Invalid ||
    (lottoCombo1.length === 4 && lottery2Invalid && lottoCombo2.length === 4) ||
    (lottoCombo1.length === 4 && lottoCombo2.length === 4 && !lottery2Invalid);

  const initialDraftOrder = lotteryCombos.map(({ originalOwner, currentOwner, ovr }) => ({
        originalOwner,
        currentOwner,
        ovr,
        note: "",
      }))

  const draftOrderAfterLottery1 = useMemo(() => {
    if (!lottery1Winner || lottery1Invalid) {
      return initialDraftOrder;
    }

    return handleLottery1Winner(
      initialDraftOrder,
      lottery1Winner.originalOwner
    );
  }, [initialDraftOrder, lottery1Winner, lottery1Invalid]);

  const liveDraftOrder = useMemo(() => {
    // before lottery 1 complete
    if (!lottery1Winner || lottery1Invalid) {
      return initialDraftOrder;
    }

  // after lottery 1 complete but before lottery 2 valid
  if (
    !lottery2Winner ||
    lottery2Invalid
  ) {
    return draftOrderAfterLottery1;
  }

  // final order after both lotteries
  return handleLottery2Winner(
    draftOrderAfterLottery1,
    lottery2Winner.originalOwner
  );
}, [
  initialDraftOrder,
  draftOrderAfterLottery1,
  lottery1Winner,
  lottery1Invalid,
  lottery2Winner,
  lottery2Invalid,
]);


  const l1WinnerMeta = getTeamMetaByTricode(lottery1Winner?.currentOwner as TeamTricodes)
  const l2WinnerMeta = getTeamMetaByTricode(lottery2Winner?.currentOwner as TeamTricodes)

  const takeDraftOrderScreenshot = () => {
    takeScreenshot("draft-order", "custom_draft_order")
  }

  return (
  <div className="flex flex-col gap-3 w-full">
    {/* Draw button */}
    
    <div className="flex items-center justify-between">
      <CountdownPresetButtons
        values={[0.1, 1, 3, 5, 10]}
        setCountdown={setSelectedCountdown}
        isDrawing={isDrawing}
        selectedCountdown={selectedCountdown}
      />
            

  <Button
    onClick={drawBall}
    disabled={isDrawButtonDisabled}
    size="sm"
    className="min-w-30"
  >
    {isDrawing
      ? `Drawing in ${countdown}…`
      : "Draw Next Ball"}
  </Button>
</div>

    {/* Main content row — lottery panels + odds sidebar */}
    <div className="flex gap-4 items-start">
      {/* Lottery panels */}
      <div className="flex flex-col gap-3 w-72 shrink-0">
        {/* Lottery 1 */}
        <div
          className={`rounded-xl border p-5 space-y-4 transition-all duration-300 relative overflow-hidden ${
            lottery1Invalid
              ? "border-destructive/40 bg-destructive/5"
              : lottery1Winner
              ? "border-transparent"
              : activeLottery === 1
              ? "border-primary/30 bg-primary/5"
              : "border-border bg-card"
          }`}
          style={
            lottery1Winner && l1WinnerMeta
              ? {
                  backgroundColor: `${l1WinnerMeta.primaryColor}18`,
                  borderColor: `${l1WinnerMeta.primaryColor}60`,
                }
              : undefined
          }
        >
          {l1WinnerMeta && (
            <div className="pointer-events-none absolute -right-4 -bottom-4 h-36 w-36 opacity-[0.07] select-none" aria-hidden="true">
              <img src={`/logos/nhl/${l1WinnerMeta.teamSlug}.svg`} alt="" className="h-full w-full object-contain" />
            </div>
          )}
          {lottery1Winner && l1WinnerMeta && (
            <div className="flex items-center gap-2.5 relative z-10">
              <div className="h-8 w-8 rounded-md flex items-center justify-center shrink-0 p-1" style={{ backgroundColor: `${l1WinnerMeta.primaryColor}25` }}>
                <img src={`/logos/nhl/${l1WinnerMeta.teamSlug}.svg`} alt={l1WinnerMeta.label} className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold leading-tight tracking-wide" style={{ color: l1WinnerMeta.primaryColor }}>{l1WinnerMeta.label}</span>
                <span className="text-[10px] text-muted-foreground leading-tight">{l1WinnerMeta.division} Division</span>
              </div>
            </div>
          )}
          <div className="relative z-10">
            <DisplayBallsDrawn lottoNumber={1} combo={lottoCombo1} isComplete={lottoCombo1.length === 4} winner={lottery1Winner} />
          </div>
          {lottery1Invalid && (
            <div className="space-y-3 relative z-10">
              <div className="flex items-start gap-2 text-xs text-destructive">
                <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <p>Combination 11-12-13-14 is not assigned to any team. Lottery 1 must be redrawn.</p>
              </div>
              <Button variant="destructive" size="sm" onClick={() => restartLottery(1)} className="gap-1.5">
                <RefreshCw className="h-3.5 w-3.5" /> Redraw Lottery 1
              </Button>
            </div>
          )}
        </div>

        {/* Lottery 2 */}
        <div
          className={`rounded-xl border p-5 space-y-4 transition-all duration-300 relative overflow-hidden ${
            lottery2Invalid
              ? "border-destructive/40 bg-destructive/5"
              : lottery2Winner
              ? "border-transparent"
              : activeLottery === 2 && lottoCombo1.length === 4
              ? "border-primary/30 bg-primary/5"
              : "border-border bg-card"
          }`}
          style={
            lottery2Winner && l2WinnerMeta
              ? {
                  backgroundColor: `${l2WinnerMeta.primaryColor}18`,
                  borderColor: `${l2WinnerMeta.primaryColor}60`,
                }
              : undefined
          }
        >
          {l2WinnerMeta && (
            <div className="pointer-events-none absolute -right-4 -bottom-4 h-36 w-36 opacity-[0.07] select-none" aria-hidden="true">
              <img src={`/logos/nhl/${l2WinnerMeta.teamSlug}.svg`} alt="" className="h-full w-full object-contain" />
            </div>
          )}
          {lottery2Winner && l2WinnerMeta && (
            <div className="flex items-center gap-2.5 relative z-10">
              <div className="h-8 w-8 rounded-md flex items-center justify-center shrink-0 p-1" style={{ backgroundColor: `${l2WinnerMeta.primaryColor}25` }}>
                <img src={`/logos/nhl/${l2WinnerMeta.teamSlug}.svg`} alt={l2WinnerMeta.label} className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold leading-tight tracking-wide" style={{ color: l2WinnerMeta.primaryColor }}>{l2WinnerMeta.label}</span>
                <span className="text-[10px] text-muted-foreground leading-tight">{l2WinnerMeta.division} Division</span>
              </div>
            </div>
          )}
          <div className="relative z-10">
            <DisplayBallsDrawn lottoNumber={2} combo={lottoCombo2} isComplete={lottoCombo2.length === 4} winner={lottery2Winner} />
          </div>
          {lottery2Invalid && lottoCombo2.length === 4 && (
            <div className="space-y-3 relative z-10">
              <div className="flex items-start gap-2 text-xs text-destructive">
                <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <ul className="space-y-0.5 list-disc pl-3">
                  {isComboInvalid(lottoCombo2) && <li>Drew the invalid combo (11-12-13-14)</li>}
                  {combosMatch && <li>Same combination as Lottery 1</li>}
                  {duplicateWinningTeam && <li>Same team already won Lottery 1</li>}
                </ul>
              </div>
              <Button variant="destructive" size="sm" onClick={() => restartLottery(2)} className="gap-1.5">
                <RefreshCw className="h-3.5 w-3.5" /> Redraw Lottery 2
              </Button>
            </div>
          )}
          {lottoCombo1.length < 4 && lottoCombo2.length === 0 && (
            <p className="text-xs text-muted-foreground italic relative z-10">Complete Lottery 1 first</p>
          )}
        </div>
      </div>

      {/* Odds sidebar — grows to fill remaining width */}
      <LiveOddsTable
        lotteryCombos={lotteryCombos}
        drawnCombo={activeLottery === 1 ? lottoCombo1 : lottoCombo2}
        lottery1Winner={lottery1Winner}
        lottery2Winner={lottery2Winner}
        activeLottery={activeLottery}
      />
    </div>

    {/* Draft order + export — below the main row */}
    <div className="flex flex-col gap-3">
      <div className="flex justify-start">
        <Button size="sm" variant="outline" onClick={takeDraftOrderScreenshot} className="gap-1.5">
          <Download className="h-3.5 w-3.5" /> Export PNG
        </Button>
      </div>

      <div id="draft-order" className="rounded-xl border bg-card shadow-sm overflow-hidden">
        {liveDraftOrder  && (
          <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b bg-muted/30">
             <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                {lottery2Winner && !lottery2Invalid
                  ? "Final Draft Order"
                  : lottery1Winner && !lottery1Invalid
                  ? "Live Draft Order (After Lottery 1)"
                  : "Initial Draft Order"}
              </h3>

              <p className="text-xs text-muted-foreground mt-0.5">
                {lottery2Winner && !lottery2Invalid
                  ? "Reseeded after both valid lottery drawings"
                  : lottery1Winner && !lottery1Invalid
                  ? "Updated after Lottery 1"
                  : "Pre-lottery draft order"}
              </p>
              </div>
            <div
              className="grid gap-1.5 p-3"
              style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "repeat(8, auto)", gridAutoFlow: "column" }}
            >
              {liveDraftOrder.map((pick) => {
  const lottery1WinnerOwner = lottery1Winner?.originalOwner;
  const lottery2WinnerOwner = lottery2Winner?.originalOwner;

  const isLotteryWinner =
    pick.originalOwner === lottery1WinnerOwner ||
    pick.originalOwner === lottery2WinnerOwner;

  const isTraded = pick.originalOwner !== pick.currentOwner;

  const ogOwnerMeta = getTeamMetaByTricode(pick.originalOwner);
  const curOwnerMeta = getTeamMetaByTricode(pick.currentOwner);

  const originalPick =
    initialDraftOrder.find(
      x => x.originalOwner === pick.originalOwner
    )?.ovr ?? pick.ovr;

  const pickDiff = originalPick - pick.ovr;

  return (
    <div
      key={pick.originalOwner}
      className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 ${
        isLotteryWinner
          ? "border-emerald-600/30 bg-emerald-500/[0.07] dark:border-emerald-500/20"
          : "border-border bg-background"
      }`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-medium tabular-nums text-muted-foreground">
        {pick.ovr}
      </span>

      <div className="relative shrink-0">
        <img
          src={`/logos/nhl/${curOwnerMeta?.teamSlug}.svg`}
          className="h-7 w-7"
          alt=""
        />

        {isTraded && (
          <img
            src={`/logos/nhl/${ogOwnerMeta?.teamSlug}.svg`}
            className="absolute -bottom-0.5 -right-1 h-3.5 w-3.5 rounded-full border border-background bg-background"
            alt={`Originally ${pick.originalOwner}`}
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-mono text-xs font-medium leading-tight">
          {curOwnerMeta?.label}
        </p>

        {isTraded && (
          <p className="truncate text-[10px] leading-tight text-muted-foreground">
            via {ogOwnerMeta
            ?.label}
          </p>
        )}
      </div>

      {/* Pick movement */}
      {pickDiff !== 0 && (
        <div
          className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums ${
            pickDiff > 0
              ? "bg-emerald-500/10 text-emerald-600"
              : "bg-red-500/10 text-red-500"
          }`}
        >
          {pickDiff > 0
            ? `↑${pickDiff}`
            : `↓${Math.abs(pickDiff)}`}
        </div>
      )}

      {isLotteryWinner && (
        <Trophy className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
      )}
    </div>
  );
})}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
)};