import { ContractTypes } from "../types/global-hockey-types";

export function getClauseEligibilty(contractType: ContractTypes, age: number) {
  if(age <= 25)
    return false;
  else if (age <= 27 && contractType === "ELC" || contractType === "ELC-FA")
    return false
  else true
}


export const getDraftYearForBirthDate = (birthdate: Date) => {
    const birthYear = birthdate.getFullYear();
    const birthMonth = birthdate.getMonth(); // 0-based
    const birthDay = birthdate.getDate();

    // Year the player turns 18
    const turn18Year = birthYear + 18;

    // Check if they turn 18 on or before September 15 of that year
    if (
        birthMonth < 8 || // Before September
        (birthMonth === 8 && birthDay <= 15) // September 1-15
    ) {
        return turn18Year;
    } else {
        // Turns 18 after September 15 → first eligible next year
        return turn18Year + 1;
    }
};