import { BURIED_CAPHIT, BURIED_CAPHIT_35PLUS, LEAGUE_MAX_SALARY, LEAGUE_MIN_SALARY } from "@/lib/constants/hockey";
import { ContractTypes } from "@/lib/types/global-hockey-types";
const EUROPE_LEAGUES = ['SHL', 'J20', 'Liiga', 'KHL', 'MHL', 'VHL', 'AllSvenskan']

export function buildContractYears (contractYears: any[], startYear: number) {
  return contractYears.map((year, i) => ({
    season: startYear + i,
    baseSalary: year.baseSalary,
    signingBonus: year.signingBonus,
    totalSalary: Number(year.baseSalary) + Number(year.signingBonus),
    performanceBonus: year.performanceBonus,
    minorsSalary: year.minorsSalary,
    clause: year.clause || null,
    clauseInfo: year.clauseInfo|| null
  }));
}

  export function buildContract(contract: any) {
  return {
    ...contract,
    contractYears: buildContractYears(contract.contractYears, 2024)
  }
}




export interface ContractYears {
    season: number;
    baseSalary: number;
    signingBonus: number;
    totalSalary: number
}

export function sumArrayProperty<T extends Record<keyof T, number>>(
  array: T[],
  key: keyof T
) {
  return array.reduce((sum, item) => sum + item[key], 0);
}


/**
 * ------------ Functions --------------
 * DetermineQualifyingOffer x
 * DetermineBuriedCaphit x
 * is35PlusContract x 
 * ValidateContract
 * DetermineContractLoad ---- Front Loaded or Back Loaded
 * HandleFrontLoadedContractErrors
 * HandleBackLoadedContractErrors
 * HandleBasicContractErrors
 * IsPerfBonusEligible
 * DetermineCriteriaOfELC
 * determineLengthOfELC
 * DetermineMaxPerfBonusOfELC
 */


/**
 * ---------------- CONTRACT YEAR RULES ----------------
 * 1. BaseSalary must be >= LEAGUE MIN
 * 2. TotalSalary must be <= 20% of the Upper Limit
 * 3. (2025 & beyond) SigningBonus in contract must be >= 60% of TotalSalary in the deal.
 * I.) Front-Loaded (Adjusted in 2025 CBA)
 *     A.) The difference between Subsquent Salaries ((n-1.salary) - n.salary), n+1) cannot exceed 20% of compensation in year 1
 *     B.) Salary in each year must be greater than 71% of the highest salary year
 * II.) Back-Loaded
 *     A.) The salary difference in year 1 and 2, cannot be greater than the lower salary of the 2 years
 *     B.) Each year thereafter cannot have an salary increase exceeding the lower compensation in year 1 or 2
 *     C.) Any year to year decrease cannot exceed 50% of the lower salary year 1 or 2
 * 
 */

export function wasDraftedFromEurope(amateurLeague: string) {
    return EUROPE_LEAGUES.includes(amateurLeague)
}

export function HandleSPCErrors(contractYear: ContractYears){
    if(contractYear.baseSalary < LEAGUE_MIN_SALARY)
    {
        throw Error(`${contractYear.season} base salary cannot be lower than league min (${LEAGUE_MIN_SALARY}) `)
    }
    if(contractYear.totalSalary < LEAGUE_MAX_SALARY)
    {
        throw Error(`${contractYear.season} total salary cannot be greater than league max (${LEAGUE_MAX_SALARY}) `)
    }

}



// export function determineELCSpecificCriteria(contractType: ContractTypes, sept15Age: number, nationality: string, draftYear: number, amateurLeague: string) {
//     if(contractType != 'ELC-FA' && contractType != 'ELC' ) throw Error('Contract Type is not ELC. Contract type checking not working');
//     const draftedFromEurope = wasDraftedFromEurope(amateurLeague) 
//     const maxMinorLeagueSalary = 85000; // automate later
//     const maxTotalSalary = 975000 // automate later
//     const maxELCLength = determineLengthOfELC(sept15Age, draftedFromEurope)
//     const maxPerfBonus = determineMaxPerfBonusForELC(draftYear)

//     return {
//         draftedFromEurope,
//         maxMinorLeagueSalary,
//         maxELCLength,
//         maxPerfBonus,
//         maxTotalSalary
//     }
// }

export function is35PlusContract(contractYears: ContractYears[], june30Age: number): boolean {
    if (june30Age < 35) return false;

    const firstYear = contractYears[0];

    for (let i = 1; i < contractYears.length; i++) {
        const currentYear = contractYears[i];
        const totalCompSameOrIncreased = currentYear.totalSalary >= firstYear.totalSalary;
        const noSigningBonusAfterYear1 = currentYear.signingBonus === 0;

        // If either condition fails → it's a 35+ contract
        if (!totalCompSameOrIncreased || !noSigningBonusAfterYear1) {
            return true;
        }
    }

    // If we get here: total comp never decreased AND no signing bonuses after Year 1
    // → NOT a 35+ contract
    return false;
}

// function determineMaxPerfBonusForELC(draftYear: number){
//     if(draftYear >= 2024)
//         return 3500000
//     else 
//         return 3000000
// }

// function determineLengthOfELC(sept15Age: number, wasDraftedFromEurope: boolean)
// {
//     if(sept15Age >= 18 && sept15Age <= 21 )
//     {
//         return 3;
//     } else if(sept15Age == 22 || sept15Age == 23)
//     {
//         return 2;
//     } else if (sept15Age === 24)
//     {
//         return 1;
//     }
//     else if (sept15Age >= 25 && sept15Age <= 27 && wasDraftedFromEurope)
//     {
//         return 1;
//     }
// }

// function determineQualifyingOfferPost2025(prevYearSalary: number)
// {
//     if (prevYearSalary <=  1250000)
//         return prevYearSalary * 1.10
//     else if (prevYearSalary < 1750000)
//         return prevYearSalary * 1.05
//     else
//         prevYearSalary
// }

// function determineQualifyingOfferPre2025(
//   prevYearSalary: number,
//   prevContractSigningDate: Date,
//   capHit: number
// ): number {
//   const cutoffDate = new Date("2020-07-01");

//   // Salaries under $1M → 105% up to a max of $1.0M
//   if (prevYearSalary >= 750000 && prevYearSalary <= 999999) {
//     return Math.min(prevYearSalary * 1.05, 1000000);
//   }

//   // Contracts signed BEFORE July 2020 → 100% of salary
//   if (prevYearSalary >= 1000000 && prevContractSigningDate < cutoffDate) {
//     return prevYearSalary;
//   }

//   // Contracts signed AFTER July 2020 → lesser of (100% salary, 120% of cap hit)
//   if (prevYearSalary >= 1000000 && prevContractSigningDate >= cutoffDate) {
//     return Math.min(prevYearSalary, capHit * 1.2);
//   }

//   // Default: return the same salary (fallback)
//   return prevYearSalary;
// }

export function determineBuriedCaphit(contractType: ContractTypes, caphit: number)
{
    if(contractType == "35Plus" || contractType == '35Plus-FA')
    {
        return {
            buriedRelief: BURIED_CAPHIT_35PLUS,
            buriedCaphit: caphit - BURIED_CAPHIT_35PLUS,
        }
    }
    else
    {
        return {
            buriedRelief: BURIED_CAPHIT,
            buriedCaphit: caphit - BURIED_CAPHIT,
        }
    }
}



export const initializeContractYears = (initContractYears: any[]) => {
  
}
