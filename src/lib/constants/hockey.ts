import { getObjectOfArrayByKey } from "../utils/array.utils";

export const UPPER_LIMIT_2025 = 95_500_000;
export const UPPER_LIMIT_2026 = 104_500_000;
export const UPPER_LIMIT_2027 = 113_500_000;

export const CURRENT_SEASON = 2025;
export const LEAGUE_MAX_SALARY = UPPER_LIMIT_2025 * .2;
export const LEAGUE_MIN_SALARY = 775_000;
export const BURIED_CAPHIT = 1_150_000;
export const BURIED_CAPHIT_35PLUS = 375_000;

export function getCalculatedSeasonMeta(
    upperLimit: number
) {
    const maxTeamRetention = .15 * upperLimit
    
    return {
        maxTeamRetention,

    }
}

export const SEASON_METADATA = [
    {
        value: 2024,
        label: "2024-25",
        upperLimit: 88_000_000,
        lowerLimit: 68_000_000,
        minSalary: 775_000,
        confirmedDate: "2024-06-08",
    },
    {
        value: 2025,
        label: "2025-26",
        upperLimit: 95_500_000,
        lowerLimit: 72_000_000,
        minSalary: 775_000,
        confirmedDate: ""
    }
 ]

export const CURRENT_SEASON_METADATA = getObjectOfArrayByKey(SEASON_METADATA, "value", 2024)

export const TEAMS_METADATA = [
    {
        value: "anaheim-ducks",
        label: "Anaheim Ducks",
        city: "Anaheim",
        name: "Ducks",
        established: ""
    }
]



export const clauseOptions = [
    {
      value: "NMC",
      label: "NMC"
    },
    {
      value: "M-NMC",
      label: "M-NMC",
    },
    {
      value: "NTC",
      label: "NTC"
    },
    {
      value: "M-NTC",
      label: "M-NTC",
    },
    {
      value: "NMC*",
      label: "Conditional NMC"
    },
    {
      value: "M-NMC*",
      label: "Conditional M-NMC",
    },
    {
      value: "NTC*",
      label: "Conditional NTC"
    },
    {
      value: "M-NTC*",
      label: "Conditional M-NTC",
    },
]