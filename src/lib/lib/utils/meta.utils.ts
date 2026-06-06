import { nhlTeams } from "../constants/metadata"
import { TeamSlugs, TeamTricodes } from "../types/global-hockey-types";

export function getTeamMetaData(teamSlug: TeamSlugs) {
  const team = nhlTeams.filter((t) => t.teamSlug === teamSlug);
    return team[0]
}

export function getTeamMetaByTricode(teamTricode: TeamTricodes) {
  return nhlTeams.find(
    (team) => team.value === teamTricode
  );
}