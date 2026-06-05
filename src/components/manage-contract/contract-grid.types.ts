import { ClauseTypes, ContractTypes } from "@/lib/types/global-hockey-types";

// export type ClauseType = "None" | "NMC" | "NTC" | "M-NTC" | "S-NTC";

export interface ContractYear {
  capHit: number;        // always kept in sync with the calculation
  capHitOverride: number | null;  // user-set escape hatch
  season: number;
  baseSalary: number;
  signingBonus: number;
  performanceBonus: number;
  minorsSalary: number;
  clause: ClauseTypes | null;
  clauseInfo: string | null;
}

export interface ContractFormValues {
  startYear: number;
  signingDate: Date;
  signingTeam: string;
  contractType: ContractTypes
  years: ContractYear[];
}

export interface ContractStats {
  totalValue: number;
  aav: number;
  totalSigningBonus: number;
  totalPerformanceBonus: number;
  yearlyAAV: (number | null)[];
}