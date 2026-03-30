
export const createContractID = (
    playerId: number,
    signingDate: string
) => `${playerId}-${signingDate}`

export const createContractYearID = (playerId: number, signingDate: string, season: number) => `${playerId}-${signingDate}-${season}`
export const createPickID = (draftYear: number, teamTricode: string, draftRound: number ) => `${draftYear}-${teamTricode}-${draftRound}`

export const createStaffID = () => {
  
}

export const createStaffTenureID = () => {}
