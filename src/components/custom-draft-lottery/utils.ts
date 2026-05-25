// utils.ts

import type { TeamTricodes } from "@/lib/types/global-hockey-types";
import type { DraftOrder } from "./manage-pre-lottery-order";

export type { TeamTricodes };

export interface TeamLotteryCombo {
  originalOwner: TeamTricodes;
  currentOwner: TeamTricodes;
  ovr: number;
  combos: number[][];
}

export const LOTTERY_COMBOS_FOR_OVR = [
  185, 135, 115, 95,
  85, 75, 65, 60,
  50, 35, 30, 25,
  20, 15, 5, 5,
];

export const INVALID_COMBO = [11, 12, 13, 14];

export const normalizeCombo = (combo: number[]) =>
  [...combo].sort((a, b) => a - b);

export const combosEqual = (
  a: number[],
  b: number[]
) => {
  const aa = normalizeCombo(a);
  const bb = normalizeCombo(b);

  return aa.every((num, i) => num === bb[i]);
};

export const generatePickCombos = (): number[][] => {
  const combos: number[][] = [];

  for (let a = 1; a <= 11; a++) {
    for (let b = a + 1; b <= 12; b++) {
      for (let c = b + 1; c <= 13; c++) {
        for (let d = c + 1; d <= 14; d++) {
          const combo = [a, b, c, d];

          if (
            combo[0] === 11 &&
            combo[1] === 12 &&
            combo[2] === 13 &&
            combo[3] === 14
          ) {
            continue;
          }

          combos.push(combo);
        }
      }
    }
  }

  return combos;
};

export const shuffleArray = <T,>(array: T[]): T[] => {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

export const assignLotteryCombos = (
  order: DraftOrder[]
): TeamLotteryCombo[] => {
  const shuffledCombos = shuffleArray(
    generatePickCombos()
  );

  let currentIndex = 0;

  return order.map((pick, index) => {
    const comboCount =
      LOTTERY_COMBOS_FOR_OVR[index];

    const assignedCombos =
      shuffledCombos.slice(
        currentIndex,
        currentIndex + comboCount
      );

    currentIndex += comboCount;

    return {
      originalOwner: pick.originalOwner,
      currentOwner: pick.currentOwner,
      ovr: pick.ovr,
      combos: assignedCombos,
    };
  });
};

export const findTeamByCombo = (
  combo: number[],
  lotteryCombos: TeamLotteryCombo[]
): TeamLotteryCombo | null => {
  for (const team of lotteryCombos) {
    const found = team.combos.some(
      (teamCombo) =>
        combosEqual(teamCombo, combo)
    );

    if (found) {
      return team;
    }
  }

  return null;
};

export const isComboInvalid = (
  combo: number[]
) => {
  if (combo.length !== 4) return false;

  return combosEqual(combo, INVALID_COMBO);
};



type DraftSlot = DraftOrder & {
  isLocked?: boolean
}

type LockedTeam = {
  team: TeamTricodes
  newOvr: number
}

/**
 * Returns the next available unlocked pick
 *
 * Example:
 * locked = [1, 5]
 * desired = 5
 * returns 6
 */
export const findNextAvailablePick = (
  desiredPick: number,
  lockedMap: Map<number, DraftSlot>
): number => {

  let pick = desiredPick

  while (lockedMap.has(pick)) {
    pick++
  }

  return pick
}

/**
 * Team can only jump 10 spots
 *
 * 12 -> 2
 * 13 -> 3
 * 14 -> 4
 * etc.
 *
 * Top 11 teams can win 1OA directly
 */


export const calculateLotteryPick = (
  originalOvr: number
): number => {

  if (originalOvr <= 11) {
    return 1
  }

  return originalOvr - 10
}

/**
 * Core draft reorder function
 *
 * Takes:
 * - original draft order
 * - locked picks
 *
 * Returns:
 * fully reseeded draft order
 */
export const reorderDraft = (
  originalOrder: DraftOrder[],
  lockedTeams: LockedTeam[]
): DraftSlot[] => {

  const lockedMap = new Map<number, DraftSlot>()

  // create locked picks
  for (const lock of lockedTeams) {

    const teamObj = originalOrder.find(
      x => x.originalOwner === lock.team
    )!

    lockedMap.set(lock.newOvr, {
      ...teamObj,
      ovr: lock.newOvr,
      isLocked: true
    })
  }

  // remove locked teams from remaining pool
  const remainingTeams = originalOrder.filter(team =>
    !lockedTeams.some(
      locked => locked.team === team.originalOwner
    )
  )

  const finalOrder: DraftSlot[] = []

  let remainingIndex = 0

  for (let pick = 1; pick <= originalOrder.length; pick++) {

    // locked pick
    if (lockedMap.has(pick)) {
      finalOrder.push(lockedMap.get(pick)!)
      continue
    }

    // next available team slides upward
    const nextTeam = remainingTeams[remainingIndex++]

    finalOrder.push({
      ...nextTeam,
      ovr: pick
    })
  }

  return finalOrder
}

/**
 * Handles first lottery drawing
 */
export const handleLottery1Winner = (
  originalDraftOrder: DraftOrder[],
  lotto1Winner: TeamTricodes
): DraftSlot[] => {

  const winnerObj = originalDraftOrder.find(
    x => x.originalOwner === lotto1Winner
  )!

  const lockedTeams: LockedTeam[] = []

  // winner gets 1OA directly
  if (winnerObj.ovr <= 11) {

    lockedTeams.push({
      team: lotto1Winner,
      newOvr: 1
    })

  } else {

    // worst team keeps 1OA
    const worstTeam = originalDraftOrder.find(
      x => x.ovr === 1
    )!

    lockedTeams.push({
      team: worstTeam.originalOwner,
      newOvr: 1
    })

    // lottery winner jumps 10 spots
    lockedTeams.push({
      team: lotto1Winner,
      newOvr: winnerObj.ovr - 10
    })
  }

  return reorderDraft(originalDraftOrder, lockedTeams)
}

/**
 * Handles second lottery drawing
 *
 * Uses RESEEDED order from lottery #1
 */
export const handleLottery2Winner = (
  draftOrderAfterLottery1: DraftSlot[],
  lotto2Winner: TeamTricodes
): DraftSlot[] => {

  // already locked from lottery 1
  const lockedTeams: LockedTeam[] = draftOrderAfterLottery1
    .filter(x => x.isLocked)
    .map(x => ({
      team: x.originalOwner,
      newOvr: x.ovr
    }))

  const lockedMap = new Map<number, DraftSlot>()

  for (const locked of lockedTeams) {

    const obj = draftOrderAfterLottery1.find(
      x => x.originalOwner === locked.team
    )!

    lockedMap.set(locked.newOvr, obj)
  }

  const lotto2WinnerObj = draftOrderAfterLottery1.find(
    x => x.originalOwner === lotto2Winner
  )!

  /**
   * 2nd lottery winner can never win pick #1, unless 2nd lottery winner is the #1overall team
   */

  let desiredPick: number

  if (lotto2WinnerObj.ovr <= 12 && lotto2WinnerObj.ovr > 1) {
    desiredPick = 2
  } else {
    desiredPick = lotto2WinnerObj.ovr - 10
  }

  // cannot land on locked slot
  const actualPick = findNextAvailablePick(
    desiredPick,
    lockedMap
  )

  lockedTeams.push({
    team: lotto2Winner,
    newOvr: actualPick
  })

  return reorderDraft(
    draftOrderAfterLottery1,
    lockedTeams
  )
}

/**
 * Full simulation
 */
export const generateDraftOrderAfterLottery = (
  originalDraftOrder: DraftOrder[],
  lotto1Winner: TeamTricodes,
  lotto2Winner: TeamTricodes,
): DraftSlot[] => {

  const afterLottery1 = handleLottery1Winner(
    originalDraftOrder,
    lotto1Winner
  )

  return handleLottery2Winner(
    afterLottery1,
    lotto2Winner
  )
}
/**
 * Returns all remaining valid lottery number combinations based on
 * the numbers already drawn.
 *
 * @param currentLottoNumbers - The lottery numbers that have already
 * been drawn in the current sequence.
 *
 * @param teamCombos - A collection of valid team lottery combinations.
 * Each combo is typically represented as an array of numbers.
 *
 * @returns An array of remaining valid combinations that are still
 * possible given the current drawn numbers.
 */
export const getRemainingValidCombos = (
  currentLottoNumbers: number[],
  teamCombos: number[][]
) => {
  return teamCombos.filter(combo =>
    currentLottoNumbers.every(num => combo.includes(num))
  )
}


/**
 * Returns all remaining valid lottery number combinations based on
 * the numbers already drawn.
 *
 * @param currentLottoNumbers - The lottery numbers that have already
 * been drawn in the current sequence.
 *
 * @param validTeamCombos - A collection of valid team lottery combinations.
 * Each combo is typically represented as an array of numbers.
 *
 * @returns An array of numbers needed to complete each valid combo.
 *
 * For example:
 * if currentLottoNumbers = [1, 2]
 * and validTeamCombos = [
 *   [1, 2, 3, 4],
 *   [1, 5, 2, 7],
 * ]
 *
 * it would return:
 * [
 *   [3, 4],
 *   [5, 7]
 * ]
 */
export const getBallsNeededToWinLotto = (
  currentLottoNumbers: number[],
  validTeamCombos: number[][]
) => {
  return validTeamCombos.map(combo =>
    combo.filter(num => !currentLottoNumbers.includes(num))
  )
}