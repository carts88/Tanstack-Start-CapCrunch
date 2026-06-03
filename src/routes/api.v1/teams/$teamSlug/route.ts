// routes/hello.ts
import { getTeam } from '@/data/teams/controllers.teams';
import { CURRENT_SEASON } from '@/lib/constants/hockey';
import { TeamSlugs } from '@/lib/types/global-hockey-types';
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/api/v1/teams/$teamSlug')({
  server: {
    handlers: {
      GET: async ({ params }: { params: { teamSlug: TeamSlugs } }) => {
        const { teamSlug } = params;
        const teamSeasonParams = {season: CURRENT_SEASON, teamSlug: teamSlug }

        const [data ] = await Promise.all([
                getTeam(teamSeasonParams)
            ])

        // const {roster, team_outlook} = rawTeamData.data
        // const transformedTeamData = transformPlayerContracts(roster)

        return Response.json({
            data
        })
      },
    },
  },
})