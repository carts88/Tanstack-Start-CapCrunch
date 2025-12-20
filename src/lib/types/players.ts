export type ContractTypes = "SPC-FA" | "SPC-EXT" | "SPC" |"ELC" | "ELC-FA" | "35Plus" | "35Plus-EXT" | "35Plus-FA"
export type ClauseTypes = "NMC" | "NTC" | "M-NTC" | "M-NMC" | "NMC*" | "NTC*" | "M-NTC*" | "M-NMC*" 
export type VariabilityStructure = "FRONT-LOADED" | "BACK-LOADED"

export interface IContract {
    signingDate: string;
    signingTeam: string;
    signingGM: string;
    contractType: ContractTypes;
    variability: VariabilityStructure
    contractYears: IContractYear[];
}

export interface IContractYear {
    season: number;
    caphit: number;
    baseSalary: number;
    signingBonus: number;
    totalSalary?: number;
    performanceBonus: number;
    minorsSalary: number;
    clause: ClauseTypes;
    clauseInfo: string;
    retention?: IRetention[]
}

export interface IRetention {
    team: string;
    retainedAmount: number
}