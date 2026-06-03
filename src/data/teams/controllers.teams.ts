import { TeamSlugs } from "@/lib/types/global-hockey-types";
import { getActiveTeamStaff, getTeamData, getTeamDeadcaps, getTeamStaff, getTeamDraftPicks } from "./queries.teams";
import { transformPlayerContracts } from "./utils";
import { CURRENT_SEASON } from "@/lib/constants/hockey";


export async function getTeam(teamSeasonParams: {season: number, teamSlug: TeamSlugs}) {
    const {season, teamSlug} = teamSeasonParams
    // const rawPlayerStats = getPlayerStatsByTeam(teamSlug)
    // const rawDeadcaps = getTeamDeadcap(teamSeasonParams)
    // const rawDraftPicks = getTeamDraftPicks({...teamSeasonParams, yearsShown: 4})

    const [rawTeamData, rawTeamDeadcaps, rawStaff, rawDraftPicks] = await Promise.all([
        getTeamData(teamSeasonParams),
        getTeamDeadcaps(teamSeasonParams),
        getActiveTeamStaff(teamSlug),
        getTeamDraftPicks(teamSlug, CURRENT_SEASON, (CURRENT_SEASON + 3))
    ])

    const {roster, team_outlook} = rawTeamData
    const {
        deadcaps,
        outlook
    } = rawTeamDeadcaps

    console.log(
        "roster", roster,
        "teamoutlook", team_outlook
    )

    const transformedRoster = transformPlayerContracts(roster)
    const transformedOutlooks = team_outlook

    console.log("Getting team data for teamSlug: ", teamSlug, "and season: ", season, "!")

    
    return{
        // teamMeta
        "teamOutlook": transformedOutlooks,
        "staff": rawStaff,
        "roster": transformedRoster,
        "draftPicks": rawDraftPicks,
        "deadcap": deadcaps,
        "outlook": outlook,
        // staff
        // draftpicks
        // deadcaps
        
}

}