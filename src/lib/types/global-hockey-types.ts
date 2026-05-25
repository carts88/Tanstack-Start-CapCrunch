import { nhlTeams, contractTypes, seasons} from "../constants/metadata";

export type PositionTypes = 'C' | 'LW' | 'RW' | 'RD' | 'LD' | 'G';
export type PlayerStatusTypes = 'NHL' | 'AHL' | 'IR' | 'LTIR' | 'WAIVERS' | 'JUNIOR' | 'SOIR' | 'SEIR' | 'EUROPE';
export type AcquisitionMethodTypes = 'TRADE' | 'DRAFTED' | 'SIGNED' | 'EXPANSION' | 'CLAIMED'
export type CaptaincyRoles = 'CAPTAIN' | 'ALTERNATE'
export type CoachRoles = 'Head' | 'Assistant' | 'Associate' | 'Strength' | 'Goalie' | 'Video'
export type FrontOfficeRoles = 'GM' | 'AGM' | 'SAGM' | 'POHO' | 'POBO' | 'OWNER'
export type ContractTypes = (typeof contractTypes)[number]["value"];
export type ClauseTypes = "NMC" | "NTC" | "M-NTC" | "M-NMC" | "NMC*" | "NTC*" | "M-NTC*" | "M-NMC*" 
export type VariabilityStructure = "FRONT-LOADED" | "BACK-LOADED"
export type ShootsCatchesType = "L" | "R";
export type ExpiryStatus = "UFA" | "UFA G6" | "RFA" | "RFA" | "10.2(c)" | "ARB" | "UFA NO QO"
export type TeamTricodes = (typeof nhlTeams)[number]["value"];
export type TeamSlugs = (typeof nhlTeams)[number]["teamSlug"];
export type Seasons = (typeof seasons)[number]["value"];