// buyout.schema.ts
import { CURRENT_SEASON, LEAGUE_MAX_SALARY, LEAGUE_MIN_SALARY } from "@/lib/constants/hockey";
import { ClauseTypes, ContractTypes } from "@/lib/types/global-hockey-types";
import { formOptions } from "@tanstack/react-form";
import z from "zod";
import { getMaxAllowedTerm } from "./yearly-validations";
import { getClauseEligibilty } from "@/lib/utils/player.utils";


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


// export const ManageContractFormSteps = [
//     ManageContractInfoSchema.pick({
//         startYear: true,
//         signingTeam: true,
//         signingDate: true,
//         contractType: true,
//     }),
//     ManageContractSchema.pick({
//         contractYears: true,
//     })
// ]



interface IManageContractDefaultValues {
    startYear: string;
    signingDate: Date;
    signingTeam: string;
    contractType: ContractTypes;
    contractLength: number;
    contractYears: {
        baseSalary: number;
        signingBonus: number;
        performanceBonus: number;
        minorsSalary: number;
        clause:  ClauseTypes | null;
        clauseInfo:   string | null;
    }[]
}
export const baseContractYear = [
    {
        baseSalary: LEAGUE_MIN_SALARY,
        signingBonus: 0,
        performanceBonus: 0,
        minorsSalary: 0,
        clause: null ,
        clauseInfo:   null,
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

export const contractBuilderFormOpts = formOptions({
});


/**
 * MUST BE 18 on Sept 15th, of their DraftYear
 * THEREFORE - 2026 DY Must be born before or on September 15th, 2008
 */

export const getMaxELCBonus = (draftYear: number) => {
  if(draftYear >= 2023)
    return 3_500_000;
    else return 3_000_000
}



interface IGetMaxAllowedPerformanceBonus {
    draftYear: number;
    contractType: ContractTypes;
    contractLength: number;
    upperLimit: number;
}

export const getMaxAllowedPerformanceBonus = ({
  draftYear,
  contractType,
  contractLength,
  upperLimit,
}: IGetMaxAllowedPerformanceBonus) => {
  // Rule 1: If it's NOT an Entry-Level Contract (ELC) AND the contract is longer than 1 year,
  // performance bonuses are not allowed
  if (contractType !== 'ELC' && contractLength > 1) {
    return 0;
  }

  // Rule 2: If it IS an Entry-Level Contract, use the specific ELC bonus rules
  if (contractType === 'ELC') {
    return getMaxELCBonus(draftYear);
  }

  // Rule 3: Otherwise (non-ELC, but 1-year contract), max bonus is 7.5% of the upper limit
  return upperLimit * 0.075;
};



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
