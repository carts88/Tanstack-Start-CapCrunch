import type { ContractTypes, VariabilityStructure, ClauseTypes, PositionTypes, PlayerStatusTypes, ShootsCatchesType, AcquisitionMethodTypes} from "./global-hockey-types";

// StaffId
export type SeasonId = number;
export type ContractId = `${number}-${number}`;
export type ContractYearId = `${ContractId}-${number}`;
export type PlayerId = number;
export type DraftPickId = number;
export type StaffId = `STA${number}`;
export type StaffTenureId = `${StaffId}-${number}`;
export type TradeId = `${number}`;


// Player Based iNFO
export interface IPlayerBios {
    playerId: PlayerId;
    firstName: string;
    lastName: string;
    fullName: string;
    position: PositionTypes;
    age: number;
}

export interface IPlayerMisc {
    status: PlayerStatusTypes;
    acquisitionMethod: AcquisitionMethodTypes;
}

export interface IPlayerVitals {
    birthDate: string;
    height: number;
    weight: number;
    shootsCatches: ShootsCatchesType;

}

export interface IPlayerDraftInfo {
    draftPickId: DraftPickId;
    draftYear: number;
    draftTeam: string;
    draftRound: number;
    draftOverall: number;
    draftOverallInRound: number;
}

export interface IPlayerBirthplace {
    city: string;
    state: string;
    country: string;
}

// Player Contract Information

export interface IContract {
    contractId: ContractId;
    signingDate: string;
    signingTeam: string;
    signingGM: string;
    contractType: ContractTypes;
    variability: VariabilityStructure
    contractYears: IContractYear[];
}


export interface IContractYear {
    contractYearId: ContractYearId;
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

