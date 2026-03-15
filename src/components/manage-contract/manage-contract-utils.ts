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


export function createInitialContractYears(term: number, startYear: number) {
  return Array.from({ length: term }, (_, i) => ({
    season: Number(startYear) + Number(i),
    baseSalary: 0,
    signingBonus: 0,
    performanceBonus: 0,
    minorsSalary: 0,
    clause: null,
    clauseInfo: null,
  }));
}

export function buildContract(contract: any) {
  return {
    ...contract,
    contractYears: buildContractYears(contract.contractYears, 2024)
  }
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

interface IContractYear {
    ContractYearId: number;
    season: number;
    baseSalary: number;
    signingBonus: number;
    totalSalary: number;
}


export function is35PlusContract(contractYears: IContractYear[], june30Age: number): boolean {
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
