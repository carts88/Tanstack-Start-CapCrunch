import { sumArrayProperty } from "@/lib/utils/array.utils";

interface IContractYear {
  contractid?: number;
  season: number;
  baseSalary: number;
  signingBonus: number;
  caphit: number;
}


export const calculateBuyoutRatio = (age: number): number => age > 26 ? 2 / 3 : 1 / 3;

export function calculateBuyoutCaphit(
  originalCaphit: number,
  baseSalary: number,
  annualBuyoutCost: number
): number {
  return (originalCaphit - baseSalary) + annualBuyoutCost;
}


export function calculateBuyout(
  contractYears: IContractYear[],
  age: number
) {
  const totalBaseSalary = sumArrayProperty(contractYears, 'baseSalary');
  const buyoutRatio = calculateBuyoutRatio(age);
  const contractLength = contractYears.length;
  const buyoutLength = contractLength * 2;

  const totalBuyoutCost = totalBaseSalary * buyoutRatio;
  const annualBuyoutCost = totalBuyoutCost / buyoutLength;

  const results = [];

  for (let i = 0; i < buyoutLength; i++) {
    // Only original contract years have caphit/baseSalary
    const originalYear = contractYears[i];
    const caphit = originalYear?.caphit ?? 0;
    const baseSalary = originalYear?.baseSalary ?? 0;
    const buyoutCaphit = calculateBuyoutCaphit(caphit, baseSalary, annualBuyoutCost);
    const capSavings = caphit - buyoutCaphit;

    // Season: continue sequence from last contract year
    const lastSeason = contractYears[contractYears.length - 1].season;
    const season = lastSeason + 1 - contractLength + i;

    results.push({
      ...originalYear,
      season,
      buyoutCaphit,
      capSavings
    });
  }

  return results;
}

