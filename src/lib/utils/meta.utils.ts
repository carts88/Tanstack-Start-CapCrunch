import { nhlTeams } from "../constants/metadata"

export function getTeamMetaData(tricode: string) {
  const team = nhlTeams.filter((t) => t.value === tricode);
    return team[0]
}