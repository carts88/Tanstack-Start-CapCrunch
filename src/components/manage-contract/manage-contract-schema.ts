// buyout.schema.ts
import { CURRENT_SEASON, LEAGUE_MAX_SALARY, LEAGUE_MIN_SALARY } from "@/lib/constants/hockey";
import { ClauseTypes, ContractTypes } from "@/lib/types/global-hockey-types";
import { formOptions } from "@tanstack/react-form";
import z from "zod";
import { getMaxAllowedPerformanceBonus, getMaxAllowedTerm } from "./yearly-validations";
import { getClauseEligibilty } from "@/lib/utils/player.utils";



interface IManageContractDefaultValues {
    startYear: string;
    signingDate: Date;
    signingTeam: string;
    contractType: ContractTypes;
    contractLength: number;
    contractYears: {
        season: number;  // <-- Add this (or whatever type CURRENT_SEASON is)
        baseSalary: number;
        signingBonus: number;
        performanceBonus: number;
        minorsSalary: number;
        clause: ClauseTypes | '';
        clauseInfo: string | '';
    }[]
}

export const baseContractYear: IManageContractDefaultValues["contractYears"] = [
    {
        season: CURRENT_SEASON,
        baseSalary: LEAGUE_MIN_SALARY,
        signingBonus: 0,
        performanceBonus: 0,
        minorsSalary: 0,
        clause: '' ,
        clauseInfo: ''  ,
    },
]



export const contractDefaultValues: IManageContractDefaultValues = {
    startYear: String(CURRENT_SEASON),
    signingDate: new Date(),
    signingTeam: "ANA",
    contractType: "SPC",
    contractLength: 1,
    contractYears: baseContractYear
} ;

//=====================================
// Form metadata for submission
//=====================================
type FormMeta = {
  submitAction: 'continue' | 'backToMenu' | null
}

export const defaultSubmitMeta: FormMeta = {
  submitAction: null,
}
//=====================================
// Zod SCHEMA DEFINITIONS
//=====================================

export const ManageContractInfoSchema = z.object({
    startYear: z
        .number()
        .min(2004, "Contracts not available before cap era")
        .max(CURRENT_SEASON + 1, ""),
    signingDate: z
        .date(),
    signingTeam: z
        .string(),
    contractType: z
        .enum(["SPC-EXT", "SPC-FA", "SPC", "ELC-FA", "ELC", "35Plus-FA", "35Plus-Ext"]),
    contractLength: z
        .number()
});

/**
 * MUST BE 18 on Sept 15th, of their DraftYear
 * THEREFORE - 2026 DY Must be born before or on September 15th, 2008
 */

interface IBuildContractYearSchema {
    contractType: ContractTypes;
    age: number;
    draftYear: number;
    contractLength: number
    upperLimit: number
}

export const buildContractYearSchema = ({ contractType, age, draftYear, contractLength, upperLimit }: IBuildContractYearSchema) => {
    const isContractAnELC = contractType === "ELC-FA" || contractType === "ELC";
    const maxAllowedTerm = getMaxAllowedTerm(contractType, age);
    const minAllowedTerm = isContractAnELC ? maxAllowedTerm : 1;
    const maxAllowedPerformanceBonus = getMaxAllowedPerformanceBonus({draftYear,contractType, contractLength,upperLimit}) ;
    const isClauseEligible = getClauseEligibilty(contractType, age)

    const clauseSchema = isClauseEligible
        ? z.enum(["NMC", "NTC", "M-NTC", "M-NMC"]).nullable().optional()
        : z.null("Player is ineligible for a clause").optional(); // forces null or omitted (undefined)

    const clauseInfoSchema = isClauseEligible
        ? z.string().nullable().optional()
        : z.null("Player is ineligible for a clause").optional(); // forces null or omitted (undefined)

    const zodContractYear = z.object({
        season: z
            .number(),
        baseSalary: z
            .number()
            .min(LEAGUE_MIN_SALARY, `Base salary must be >= ${LEAGUE_MIN_SALARY.toLocaleString()}`)
            .max(LEAGUE_MAX_SALARY, `Base salary must be <= ${LEAGUE_MAX_SALARY.toLocaleString()}`)
            .nonoptional("Base Salary is required"),
        signingBonus: z
            .number()
            .min(0, "Signing bonus must be >= 0"),
        performanceBonus: z
            .number()
            .min(0, "Performance bonus must be >= 0")
            .max(maxAllowedPerformanceBonus, `Cannot have a performance bonus greater than ${maxAllowedPerformanceBonus}`),
        minorsSalary: z
            .number()
            .min(0, "Minors salary must be >= 0"),
        clause: clauseSchema,
        clauseInfo: clauseInfoSchema,
    });
    
    return z.object({
    contractYears: z
        .array(zodContractYear)
        .max(maxAllowedTerm)
        .min(minAllowedTerm)

});
}

export const contractBuilderFormOpts = formOptions({
});
