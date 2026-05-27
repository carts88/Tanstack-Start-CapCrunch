import { sumArrayProperty } from "@/lib/utils/array.utils";
import { ContractYear } from "./contract-grid";
import { getYear } from "date-fns";
import { ContractTypes } from "@/lib/types/global-hockey-types";
import { error } from "console";

// constants
const EPSILON = 1;

/**
 *  The signing bonus in a contract cannot exceed 60% of the total value of the deal.
 *  Applies to all contracts (front and back loaded)
 */
const CONTRACT_SIGNING_BONUS_LIMIT = 0.6;

/**
 * does the calculation to get the amount of signing bonuses allowed within the deal based off total salary
 * 
 * @param contractTotalSalary sum of total salary in the contract of all years
 * @returns max allowed signing bonus
 */
const getMaxAllowedSigningBonus = (contractTotalSalary: number) => contractTotalSalary * CONTRACT_SIGNING_BONUS_LIMIT

/**
 * Front Loaded Year To Year compensation difference cannot exceed 20%
 * Contracts signed prior to 9-16-26 have a max allowed difference of 25%
 */

const FL_YTY_ALLOWED_SALARY_DIFF_9_16_26 = 0.20;

/**
 * Front Loaded Year To Year compensation difference cannot exceed 20%
 * Contracts signed prior to 9-16-26 have a max allowed difference of 25%
 */
const FL_YTY_ALLOWED_DIFF_PRE_2026_09_16 = 0.25;
/**
 * Front loaded contracts cannot have a salary less than 71% of the highest compensation year as  of 9-16-26
 */
const FL_MIN_TOTAL_SALARY_9_16_26  = 0.71;
/**
 * Front loaded contracts cannot have a salary less than 60% of the highest compensation year pre 9-16-2026
 */
const FL_MIN_TOTAL_SALARY_PRE_9_16_26  = 0.60;
// ========== Back Loaded ================= //






interface ContractVariabilityValidationLog {
  message: string;
  year: number;
  type: "FRONT_LOADED" | "BACK_LOADED" | "BASE_ERROR"| "THIRTY_FIVE_PLUS" | "ELC"
  level: "ERROR" | "WARNING" 
}

export const absDiff = (a: number, b: number) => Math.abs(a - b);

export const formatMoney = (value: number) =>
  value.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

// === Helpers
const getYearTotalSalary = (year: ContractYear) =>
  year.baseSalary + year.signingBonus;


const sumSalaries = (years: ContractYear[]) =>
  years.reduce((sum, year) => sum + getYearTotalSalary(year), 0);


/**
 * determineSalaryLoad
 * 
 * Front-loaded deals are defined as: 
 * -Total player compensation in first half of contract divided by # of years in first half of contract (if contract has odd # of years, half of the middle year is included in the first half) is called "First Half AAV"
 * If First Half AAV is greater than the full contract AAV, then the contract is considered front-loaded. If not, contract is considered back-loaded

 * @param contract -> contractYears of the deal you're validating
 * 
 * @returns "FRONT_LOADED" or "BACK_LOADED"
 */

export function determineSalaryLoad(
  contract: ContractYear[],
): "FRONT_LOADED" | "BACK_LOADED" {
  if (contract.length === 0) {
    throw new Error("No contract years provided.");
  }

  const midpoint = Math.ceil(contract.length / 2);

  const firstHalf = contract.slice(0, midpoint);
  const secondHalf = contract.slice(midpoint);

  const firstTotal = sumSalaries(firstHalf);
  const secondTotal = sumSalaries(secondHalf);

  if (firstTotal > secondTotal) 
    return "FRONT_LOADED"

  return "BACK_LOADED";
}



///\\\\//////\\\\//////\\\\//////\\\\//////\\\\//////\\\\//////\\\\//////\\\\//////\\\\///
export function getContractCalculations(contractYears: ContractYear[]) {
  if (!contractYears || contractYears.length === 0) {
    throw new Error("No contract years provided");
  }

  const totalYears = contractYears.length;
  const totalBaseSalary = sumArrayProperty(contractYears, "baseSalary");
  const totalSigningBonus = sumArrayProperty(contractYears, "signingBonus");
  const totalSalary = totalBaseSalary + totalSigningBonus;

  // AAV = total base salary ÷ term (signing bonuses don't count toward cap for <35 contracts)
  const caphit = totalBaseSalary / totalYears;

  // Max 60% of total money can be signing bonuses (CBA rule)
  const maxAllowedSigningBonus = totalSalary * 0.6;

  const contractLoad = determineSalaryLoad(contractYears);

  return {
    totalYears,
    totalBaseSalary,
    totalSigningBonus,
    totalSalary,
    caphit: Number(caphit.toFixed(3)), // clean float
    maxAllowedSigningBonus,
    contractLoad: contractLoad
  };
}


// export function validateContract(contractYears: ContractYearWithTS[]) {
//     let errors: ValidationError[] = [];
//     if (!Array.isArray(contractYears) || contractYears.length === 0) {
//       errors.push({ message: "Contract must have at least one year." });
//       return { isValid: false, errors };
//     }

//     const { totalSigningBonus, maxAllowedSigningBonus, contractLoad } = getContractCalculations(contractYears);;

//     // 1. Signing bonus ≤ 60% of total salary
//     if (totalSigningBonus > maxAllowedSigningBonus + 1) {
//       errors.push({
//         message: `Signing bonus ($${totalSigningBonus.toLocaleString()}) exceeds 60% of total contract value (max allowed: $${maxAllowedSigningBonus.toLocaleString(undefined, { maximumFractionDigits: 0 })}).`,
//       });
//     }

//     // 2. Front-loaded or back-loaded rules
//     if (contractLoad === "FRONT_LOADED") {
//       errors.push(...validateFrontLoadedContract(contractYears));
//     } else if (contractLoad === "back-loaded") {
//       errors.push(...validateBackLoadedContract(contractYears));
//     }

//     return errors
// }

// =============== FRONT-LOADED CONTRACT RULES ===============
export function validateFrontLoadedContract(contractYears: ContractYear[]) {
  const errors: ContractVariabilityValidationLog[] = [];

  const yr1Salary = getYearTotalSalary(contractYears[0]);
  const maxAllowedDiff = 0.2 * yr1Salary;

  // Find the actual highest salary (not just value — we need the number)
  const highestSalary = Math.max(...contractYears.map(y => y.signingBonus + y.baseSalary));
  const minAllowedSalary = 0.71 * highestSalary;

  for (let i = 0; i < contractYears.length; i++) {
    const current = getYearTotalSalary(contractYears[i]);;
    const prev = getYearTotalSalary(contractYears[i - 1])
    const next = getYearTotalSalary(contractYears[i])


    // Rule 1: No year can be < 71% of the highest year
    if (current < minAllowedSalary - 1) { // +1 for floating point
      errors.push({
        year: 2024,
        type: "FRONT_LOADED",
        level: "ERROR",
        message: `Year ${i + 1}: $${current.toLocaleString()} is below 71% of highest year ($${highestSalary.toLocaleString()}), minimum allowed: $${minAllowedSalary.toFixed(0)}.`,
      });
    }

    // Rule 2: Difference between any two consecutive years ≤ 20% of Year 1
    if (prev !== null) {
      const diff = Math.abs(current - prev);
      if (diff > maxAllowedDiff + 1) {
      errors.push({
        year: 2024,
        type: "FRONT_LOADED",
        level: "ERROR",
        message: `Year ${i} to Year ${i + 1}: Salary changes by $${diff.toFixed(0).toLocaleString()} — exceeds 20% of Year 1 salary (max diff: $${maxAllowedDiff.toFixed(0).toLocaleString()}).`,
        });
      }
    }


    if (next !== null) {
      const diff = Math.abs(next - current);
      if (diff > maxAllowedDiff + 1) {
        errors.push({
        year: 2024,
        type: "FRONT_LOADED",
        level: "ERROR",
        message: `Year ${i + 1} to Year ${i + 2}: Salary changes by $${diff.toFixed(0).toLocaleString()} — exceeds 20% of Year 1 salary (max diff: $${maxAllowedDiff.toFixed(0).toLocaleString()}).`,
      });
      }
    }
  }

  return errors;
}

// 
// =============== BACK-LOADED CONTRACT RULES ===============
export function validateBackLoadedContract(contractYears: ContractYear[]) {
  const errors: ContractVariabilityValidationLog[] = [];

  if (contractYears.length < 2) return errors;

  const y1Salary = getYearTotalSalary(contractYears[0]);
  const y2Salary = getYearTotalSalary(contractYears[1]);
  const lowerOfY1Y2 = Math.min(y1Salary, y2Salary);
  const diffOfY1Y2 = Math.abs(y1Salary - y2Salary)

  // Rule 1: Year 2 cannot be more than double the lower of Y1/Y2
  if (diffOfY1Y2 > lowerOfY1Y2 + 1) {
    errors.push({
      year: 2024,
      message: `Year 1 ($${y1Salary.toLocaleString()}) and Year 2 ($${y2Salary.toLocaleString()}): Difference exceeds the lower year. Year 2 cannot exceed double Year 1 if Year 1 is lower.`,
      level: "ERROR",
      type: "BACK_LOADED"
    });
  }

  // The code after this point is irrevant given if the term is 2, there would be no subsequent seasons after year 2
  if (contractYears.length == 2) return errors;

  const maxDecrease = lowerOfY1Y2 * .5

  for (let i = 2; i < contractYears.length; i++) {
    const prevSalary = getYearTotalSalary(contractYears[i - 1]);
    const currSalary = getYearTotalSalary(contractYears[i]);
    const diff = Math.abs(currSalary - prevSalary);

    if (currSalary > prevSalary) {
      // Increase
      if (diff > lowerOfY1Y2) {
        errors.push(
          {
            message: `Year ${i + 1}: Increase of $${diff.toFixed(0).toLocaleString()} from prior year exceeds max allowed ($${lowerOfY1Y2.toLocaleString()}), based on lower of Year 1 & 2.`,
            year: 2024,
            level: "ERROR",
            type: "BACK_LOADED"
          }
        );
      }
    } else if (currSalary < prevSalary) {
      // Decrease
      if (diff > maxDecrease) {
        errors.push({
          message: `Year ${i + 1}: Decrease of $${diff.toFixed(0).toLocaleString()} from prior year exceeds 50% of lower Year 1/2 salary (max decrease: $${maxDecrease.toFixed(0).toLocaleString()}).`,
          year: 2024,
          level: "ERROR",
          type: "BACK_LOADED"
        });
      }
    }
  }

  const backLoadedMeta = {
    maxDecrease,
    maxIncrease: lowerOfY1Y2
  }

  return errors;
}

export function validate35PlusContract (contractYears: ContractYear[], totalSigningBonus: number){
  let errors: ContractVariabilityValidationLog[] = []
  // ===== CBA QOUTED ====
  // CBA §50.5(d)(i)(B)(5) does not apply to a multi-year to a SPC
  // ...that has: (1) total compensation (Player Salary and Bonuses)
  // that is either the same as or increases from one League Year to
  // the immediately subsequent League Year, and (2) a Signing
  // Bonus, if any, that is payable in the first year of the SPC only.


  // for 35+ contracts with term
  // confirm salary decreases every year after year 1
  // OR
  // that there is signing bonuses after year 1

  if(contractYears.length > 1) {
    for (let i = 0; i < contractYears.length; i++ ) {
      const currYrTotalSalary = getYearTotalSalary(contractYears[i])
      const nextYrTotalSalary = getYearTotalSalary(contractYears[i+1])
      const yrsWithSignBonusesAfterYr1 = contractYears.filter((x, i) => i >0 && x.signingBonus > 0)
      const hasNoSigningBonusAfterYear1 = yrsWithSignBonusesAfterYr1.length == 0
      const nextSalaryDoesNotDecrease = nextYrTotalSalary >= currYrTotalSalary;
      const totalPerfBonuses = sumArrayProperty(contractYears,"performanceBonus")

      if (totalPerfBonuses > 0) {
        errors.push({
          type: "THIRTY_FIVE_PLUS",
          message: "35+ contracts cannot have a performance bonuses on multi year deals.",
          year: 2024,
          level: "ERROR"
        })
      }

      /**
       * I don't want errors to print if both are true
       */
      if(!(hasNoSigningBonusAfterYear1 && nextSalaryDoesNotDecrease)) return errors // errors would be empty

      if(hasNoSigningBonusAfterYear1) {
          errors.push({
            type: "THIRTY_FIVE_PLUS",
            message: "",
            year: 2024,
            level: "WARNING"
          })
        }

        if (nextSalaryDoesNotDecrease){
            errors.push({
              "type": "BASE_ERROR",
              "message" : `
                Total Salary must decrease year to year to satisify rules of a 35+ plus contract.
              `,
              "year": 2024,
              "level" : "WARNING"
            })
          }
    }
  }

  return errors
}


interface IValidateGenericContractRules {
  contractYears: ContractYear[]
}

export const ValidateGenericContractRules = ({
  contractYears
} :  IValidateGenericContractRules) => {
  /**
   * Throw error if base salary is below league min
   * throw error if total salary is great than league max allowed salary
   * throw error if 
   */
  
  
}


interface IValidateContract {
  sept15Age: number;
  june30Age: number;
  contractType: ContractTypes;
  contractYears: ContractYear[]
}

export const ValidateContract = ({
  sept15Age,
  june30Age,
  contractType,
  contractYears
} :  IValidateContract) => {
  let errors: ContractVariabilityValidationLog[] = []
  // const totalSigningBonus = sumArrayProperty(contractYears, "performanceBonus")
  const {
    totalYears,
    totalBaseSalary,
    totalSigningBonus,
    totalSalary,
    caphit,
    maxAllowedSigningBonus,
    contractLoad
  } = getContractCalculations(contractYears)


  if (contractLoad == "BACK_LOADED") {
    errors = [...errors, ...validateBackLoadedContract(contractYears)]
  } else {
    // validate for front loaded contracts
    errors = [...errors, ...validateFrontLoadedContract(contractYears)]
  }
  // handle 35+ contracts
  if (june30Age > 34) {
    errors = [...errors, ...validate35PlusContract(contractYears, totalSigningBonus)] /*  adds error array to errors array */

  }

  return {
    "errors": errors,
    "meta": {
      totalYears,
      totalBaseSalary,
      totalSigningBonus,
      totalSalary,
      caphit,
      maxAllowedSigningBonus,
      contractLoad
    }
  }
}