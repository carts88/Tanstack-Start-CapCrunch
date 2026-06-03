import { nhlTeams } from "../constants/metadata"

export function getTeamMetaData(teamSlug: string) {
  const team = nhlTeams.filter((t) => t.teamSlug === teamSlug);
    return team[0]
}