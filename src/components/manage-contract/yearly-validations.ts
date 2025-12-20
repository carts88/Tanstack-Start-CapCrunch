import { LEAGUE_MAX_SALARY, LEAGUE_MIN_SALARY } from "@/lib/constants/hockey";
import { ContractTypes } from "@/lib/types/global-hockey-types";


export function validateBaseSalaryForYear(baseSalary: number) {
  if (typeof baseSalary !== "number" || isNaN(baseSalary)) {
    return { message: "Must input a valid number" };
  }

  if (baseSalary < LEAGUE_MIN_SALARY) {
    return { message: `Base Salary cannot be lower than ${LEAGUE_MIN_SALARY.toLocaleString()}` };
  }
  if (baseSalary > LEAGUE_MAX_SALARY) {
    return { message: `Base Salary cannot be greater than ${LEAGUE_MAX_SALARY.toLocaleString()}` };
  }

  return true; // or undefined / null for no error
}

export function validateSigningBonusForYear(signingBonus: number) {
  if (typeof signingBonus !== "number" || isNaN(signingBonus)) {
    return { message: "Must input a valid number" };
  }

  if (signingBonus < 0) {
    return { message: `Signing bonus cannot be less than $0` };
  }
}


export function validateSigningBonusForContract(
  totalSigningBonus: number,
  maxAllowedSigningBonusThreshold: number
) {
  if (typeof totalSigningBonus !== "number" || isNaN(totalSigningBonus)) {
    return "Make sure all signing bonus inputs are valid numbers";
  }

  if (totalSigningBonus > maxAllowedSigningBonusThreshold) {
    const excess = totalSigningBonus - maxAllowedSigningBonusThreshold;
    return `Total signing bonuses cannot exceed ${maxAllowedSigningBonusThreshold.toLocaleString()}. Remove ${excess.toLocaleString()} in signing bonuses.`;
  }
}

export function validatePerformanceBonusForYear(
  performanceBonus: number,
  contractType: ContractTypes,
  term: number,
  maxPerformanceThreshold: number
) {
  if (typeof performanceBonus !== "number" || isNaN(performanceBonus)) {
    return {message: "Performance bonus must be a valid number"}
  }

  if (performanceBonus < 0) {
    return {message: "Performance bonus cannot be negative"}
  }

  if (performanceBonus === 0) return true;

  const isELC = contractType === "ELC" || contractType === "ELC-FA";

  if (!isELC && term > 1) {
    return {message: "Multi-year contracts cannot have performance bonuses"}
  }

  if (performanceBonus > maxPerformanceThreshold) {
    if (isELC) {
      return {message: `Performance bonus cannot exceed ELC max of ${maxPerformanceThreshold.toLocaleString()}`}
    } else {
      return {message: `Performance bonus cannot exceed max limit of ${maxPerformanceThreshold.toLocaleString()}`}
    }
  }

  return true;
}

export function validateClauseForYear(
  isEligibleForClause: boolean,
  seasonIndex: number
) {
  if (!isEligibleForClause) {
    return `Player is not eligible for a trade clause in year ${seasonIndex + 1} of the contract.`;
  }
  return true;
}




export function validationClauseInfo(
) {
}




function getTermForELC(sept15Age: number) {
    if (sept15Age <= 21) return 3;
    else if (sept15Age <= 23) return 2;
    else if (sept15Age <= 25) return 1;
    else return 1; 
}
function getTermForSPCor35Plus (contractType: ContractTypes,
) {
    if(contractType == "SPC-FA" || contractType == "35Plus-FA")
        return 6
    else
        return 7
}

export function getMaxAllowedTerm(
    contractType: ContractTypes,
    sept15Age: number
) {
    switch (contractType) {
        case "ELC":
        case "ELC-FA":
            return getTermForELC(sept15Age);
        default:
            return getTermForSPCor35Plus(contractType)
    }
}
