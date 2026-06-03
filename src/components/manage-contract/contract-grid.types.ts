export type ClauseType = "None" | "NMC" | "NTC" | "M-NTC" | "S-NTC";

export interface ContractYear {
  capHitOverride: number | null;
  season?: number;
  baseSalary: number | 0;
  signingBonus: number | 0;
  performanceBonus: number | 0;
  minorsSalary: number | 0;
  clause: ClauseType;
  clauseInfo: string | null;
}

export interface ContractFormValues {
  startYear: number;
  signingDate: Date;
  signingTeam: string;
  years: ContractYear[];
}

export interface ContractStats {
  totalValue: number;
  aav: number;
  totalSigningBonus: number;
  totalPerformanceBonus: number;
  yearlyAAV: (number | null)[];
}
