import { CURRENT_SEASON } from "@/lib/constants/hockey";
import { ContractYear, ContractStats, ContractFormValues } from "./contract-grid.types";

export function parseSalaryInput(raw: string): number | null {
  const s = raw.trim().replace(/[$,\s]/g, "");
  if (!s) return 0;

  const match = s.match(/^([\d.]+)\s*([MmKk]?)$/);
  if (!match) return null; // caller should handle null explicitly

  const num = parseFloat(match[1]);
  if (isNaN(num)) return null;

  const suffix = match[2].toUpperCase();
  if (suffix === "M") return Math.round(num * 1_000_000);
  if (suffix === "K") return Math.round(num * 1_000);
  return Math.round(num);
}

export function emptyYear(): ContractYear {
  return {
    capHit: 0,
    season: CURRENT_SEASON,
    capHitOverride: null,  // removed duplicate `caphit`
    baseSalary: 0,
    signingBonus: 0,
    performanceBonus: 0,
    minorsSalary: 0,
    clause: null,
    clauseInfo: null,
  };
}
export function formatSalaryDisplay(value: number | null): string {
  if (value === null || value === 0) return "";
  return value.toLocaleString("en-US");
}

export function formatSalaryCompact(value: number | null): string {
  if (!value) return "—";
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString("en-US")}`;
}

export function getCalculatedCapHit(years: ContractYear[]) {
  if (years.length === 0) return 0;

  const total = years.reduce((sum, year) => {
    return sum + (year.baseSalary ?? 0) + (year.signingBonus ?? 0);
  }, 0);

  return Math.round(total / years.length);
}

export function getEffectiveCapHit(
  year: ContractYear,
  calculatedCapHit: number
) {
  return year.capHitOverride ?? calculatedCapHit;
}

export function deriveContractStats(years: ContractYear[]): ContractStats {
  const calculatedCapHit = getCalculatedCapHit(years);

  let totalValue = 0;
  let totalSigningBonus = 0;
  let totalPerformanceBonus = 0;
  const yearlyAAV: (number | null)[] = [];

  for (const year of years) {
    const cap = getEffectiveCapHit(year, calculatedCapHit);
    totalValue += cap;
    totalSigningBonus += year.signingBonus ?? 0;
    totalPerformanceBonus += year.performanceBonus ?? 0;
    yearlyAAV.push(cap > 0 ? cap : null);
  }

  const n = years.length || 1;

  return {
    totalValue,
    aav: totalValue / n,
    totalSigningBonus,
    totalPerformanceBonus,
    yearlyAAV,
  };
}



// const ONE_YEAR_ELC_TEMPLATE: ContractFormValues = {
//   // startYear: 0,
//   // signingDate: null,
//   // signingTeam: "",
//   contractType: "ELC",
//   years: [
//     {
//       capHit: 775000,   // always kept in sync with the calculation
//       capHitOverride: null, // user-set escape hatch
//       season: 2024,
//       baseSalary: null,
//       signingBonus: null,
//       performanceBonus: null,
//       minorsSalary: null,
//       clause: null,
//       clauseInfo: null,
//     }
//   ]
// }

export function generateELCTemplate(prev: ContractFormValues, term: number): ContractFormValues {
  return {
    ...prev,
    years: [
      {
        capHit: 0,
        capHitOverride: null,
        season: 0,
        baseSalary: 775,
        signingBonus: 0,
        performanceBonus: 0,
        minorsSalary: 0,
        clause: null,
        clauseInfo: null
      }
    ]
  }
}