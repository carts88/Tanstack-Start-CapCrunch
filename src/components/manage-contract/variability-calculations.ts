import { sumArrayProperty } from "@/lib/utils/array.utils";
import { ContractYears } from "./manage-contract-utils";

export function determineSalaryLoad(contract: ContractYears[]): string {
    const contractLength = contract.length;
    const halfTerm = contractLength / 2
    if (contractLength === 0) throw Error("No contract years were passed through.")


    // Split into first and second half
    const firstHalf = contract.slice(0, halfTerm);
    const secondHalf = contract.slice(halfTerm);

    // Sum total compensation (base + signing bonus) for each half
    const firstHalfTotal = firstHalf.reduce((sum, year) => 
        sum + year.baseSalary + year.signingBonus, 0
    );
    const secondHalfTotal = secondHalf.reduce((sum, year) => 
        sum + year.baseSalary + year.signingBonus, 0
    );


     if (firstHalfTotal > secondHalfTotal) {
        return 'Front-Loaded';
    } else {
        return 'Back-Loaded';
    }
}


///\\\\//////\\\\//////\\\\//////\\\\//////\\\\//////\\\\//////\\\\//////\\\\//////\\\\///
export function getContractCalculations(contractYears: any[]) {
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
    contractLoad: contractLoad.toLowerCase() as "even" | "front-loaded" | "back-loaded",
  };
}


export function validateContract(contract: any) {
  let errors = [];
  try {
    const { contractYears } = contract;
    if (!Array.isArray(contractYears) || contractYears.length === 0) {
      errors.push({ message: "Contract must have at least one year." });
      return { isValid: false, errors };
    }

    const calcs = getContractCalculations(contractYears);
    const { totalSigningBonus, maxAllowedSigningBonus, contractLoad } = calcs;

    // 1. Signing bonus ≤ 60% of total salary
    if (totalSigningBonus > maxAllowedSigningBonus + 1) {
      errors.push({
        message: `Signing bonus ($${totalSigningBonus.toLocaleString()}) exceeds 60% of total contract value (max allowed: $${maxAllowedSigningBonus.toLocaleString(undefined, { maximumFractionDigits: 0 })}).`,
      });
    }

    // 2. Front-loaded or back-loaded rules
    if (contractLoad === "front-loaded") {
      errors.push(...validateFrontLoadedContract(contractYears));
    } else if (contractLoad === "back-loaded") {
      errors.push(...validateBackLoadedContract(contractYears));
    }
    // "even" contracts have no additional restrictions

  } catch (err: any) {
    errors.push({ message: err.message || "Unknown validation error" });
  }

  return errors
}

// =============== FRONT-LOADED CONTRACT RULES ===============
export function validateFrontLoadedContract(contractYears: ContractYears[]) {
  const errors = [];

  const yearOneSalary = contractYears[0].totalSalary;
  const maxAllowedDiff = 0.2 * yearOneSalary;

  // Find the actual highest salary (not just value — we need the number)
  const highestSalary = Math.max(...contractYears.map(y => y.totalSalary));
  const minAllowedSalary = 0.71 * highestSalary;

  for (let i = 0; i < contractYears.length; i++) {
    const current = contractYears[i].totalSalary;
    const prev = i > 0 ? contractYears[i - 1].totalSalary : null;
    const next = i < contractYears.length - 1 ? contractYears[i + 1].totalSalary : null;

    // Rule 1: No year can be < 71% of the highest year
    if (current < minAllowedSalary - 1) { // +1 for floating point
      errors.push({
        message: `Year ${i + 1}: $${current.toLocaleString()} is below 71% of highest year ($${highestSalary.toLocaleString()}), minimum allowed: $${minAllowedSalary.toFixed(0)}.`,
      });
    }

    // Rule 2: Difference between any two consecutive years ≤ 20% of Year 1
    if (prev !== null) {
      const diff = Math.abs(current - prev);
      if (diff > maxAllowedDiff + 1) {
        errors.push({
          message: `Year ${i} to Year ${i + 1}: Salary changes by $${diff.toFixed(0).toLocaleString()} — exceeds 20% of Year 1 salary (max diff: $${maxAllowedDiff.toFixed(0).toLocaleString()}).`,
        });
      }
    }
    if (next !== null) {
      const diff = Math.abs(next - current);
      if (diff > maxAllowedDiff + 1) {
        errors.push({
          message: `Year ${i + 1} to Year ${i + 2}: Salary changes by $${diff.toFixed(0).toLocaleString()} — exceeds 20% of Year 1 salary (max diff: $${maxAllowedDiff.toFixed(0).toLocaleString()}).`,
        });
      }
    }
  }

  return errors;
}

// =============== BACK-LOADED CONTRACT RULES ===============
export function validateBackLoadedContract(contractYears: ContractYears[]) {
  const errors: any[] = [];

  if (contractYears.length < 2) return errors;

  const y1Salary = contractYears[0].totalSalary;
  const y2Salary = contractYears[1].totalSalary;
  const lowerOfY1Y2 = Math.min(y1Salary, y2Salary);
  const diffOfY1Y2 = Math.abs(y1Salary - y2Salary)

  // Rule 1: Year 2 cannot be more than double the lower of Y1/Y2
  if (diffOfY1Y2 > lowerOfY1Y2 + 1) {
    errors.push({
      message: `Year 1 ($${y1Salary.toLocaleString()}) and Year 2 ($${y2Salary.toLocaleString()}): Difference exceeds the lower year. Year 2 cannot exceed double Year 1 if Year 1 is lower.`,
    });
  }

  const maxDecrease = lowerOfY1Y2 * 0.5;

  for (let i = 1; i < contractYears.length; i++) {
    const prevSalary = contractYears[i - 1].totalSalary;
    const currSalary = contractYears[i].totalSalary;
    const diff = Math.abs(currSalary - prevSalary);

    if (currSalary > prevSalary) {
      // Increase
      if (diff > lowerOfY1Y2) {
        errors.push({
          message: `Year ${i + 1}: Increase of $${diff.toFixed(0).toLocaleString()} from prior year exceeds max allowed ($${lowerOfY1Y2.toLocaleString()}), based on lower of Year 1 & 2.`,
        });
      }
    } else if (currSalary < prevSalary) {
      // Decrease
      if (diff > maxDecrease) {
        errors.push({
          message: `Year ${i + 1}: Decrease of $${diff.toFixed(0).toLocaleString()} from prior year exceeds 50% of lower Year 1/2 salary (max decrease: $${maxDecrease.toFixed(0).toLocaleString()}).`,
        });
      }
    }
  }

  return errors;
}