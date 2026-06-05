import { nhlTeams, CONTRACT_TYPES, seasons, nhlTeams2} from "../constants/metadata";

export type PositionTypes = 'C' | 'LW' | 'RW' | 'RD' | 'LD' | 'G';
export type AcquisitionMethodTypes = 'TRADE' | 'DRAFTED' | 'SIGNED' | 'EXPANSION' | 'CLAIMED'
export type CaptaincyRoles = 'CAPTAIN' | 'ALTERNATE'
export type CoachRoles = 'Head' | 'Assistant' | 'Associate' | 'Strength' | 'Goalie' | 'Video'
export type FrontOfficeRoles = 'GM' | 'AGM' | 'SAGM' | 'POHO' | 'POBO' | 'OWNER'
export type ContractTypes = (typeof CONTRACT_TYPES)[number]["value"];
export type ClauseTypes = "NMC" | "NTC" | "M-NTC" | "M-NMC" | "NMC*" | "NTC*" | "M-NTC*" | "M-NMC*" 
export type VariabilityStructure = "FRONT-LOADED" | "BACK-LOADED"
export type ShootsCatchesType = "L" | "R";
export type ExpiryStatus = "UFA" | "UFA G6" | "RFA" | "RFA" | "10.2(c)" | "ARB" | "UFA NO QO"
export type TeamTricodes = (typeof nhlTeams)[number]["value"];
export type TeamSlugs = (typeof nhlTeams2)[number]["value"];
export type Seasons = (typeof seasons)[number]["value"];
export type PlayerStatusTypes = 'NHL' | 'AHL' | 'IR' | 'LTIR' | 'WAIVERS' | 'JUNIOR' | 'SOIR' | 'SEIR' | 'EUROPE' | 'PAID_SUSPENSION' | 'UNPAID_SUSPENSION' | 'RETIRED' | 'FA' | 'PTO' | 'NHLPAP' | 'UNKNOWN'

// ContractTypes = "ELC" | "SPC-FA" | "SPC-EXT" | "SPC" | "ELC-FA" | "35Plus-FA" | "35Plus-EXT"

export type TransactionTypes = 
        ContractTypes 
        | "TO_NHL"
        | "TO_MINORS"
        | "TO_LTIR"
        | "TO_IR"
        | "TO_SOIR"
        | "TO_SEIR"
        | "TO_NHLPAP"
        | "WAIVERS"
        | "LOAN_EUROPE"
        | "CONDITIONING_LOAN_MINORS"
        | "RETIREMENT"
        | "TERMINATION"
        | "BUYOUT"
        | "ACQUIRED"
        | "ACTIVATED_FROM_LTIR"
        | "ACTIVATED_FROM_IR"
        | "ACTIVATED_FROM_SOIR"
        | "ACTIVATED_FROM_SEIR"
        | "EMERGENCY_NHL_LOAN"
        | "CLEARED_WAIVERS"
        | "WAIVER_CLAIM"
        | "PAID_SUSPENSION"
        | "UNPAID_SUSPENSION"
        | "ACTIVATED_FROM_SUSPENSION"
        | "OFFERSHEET"
        | "OFFERSHEET_MATCHED"
        | "OFFERSHEET_NOT_MATCHED"
        | "SIGNED_PTO"
        | "QO_EXTENDED"
        | "QO_REJECTED"



export type ContractYearStatus = 'ACTIVE' | 'BOUGHTOUT' | 'TERMINATED' | 'TOLLED' | 'SLIDE'