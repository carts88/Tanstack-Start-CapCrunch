import { getPlayerData } from '@/data/players/single-player.controller'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/api/v1/players/$playerSlug')({
  server: {
    handlers: {
      GET: async ({ params }: { params: { playerSlug: string } }) => {
        const { playerSlug } = params;
        // const teamSeasonParams = {season: CURRENT_SEASON, teamSlug: teamSlug }

        const [data ] = await Promise.all([
                getPlayerData({"player_slug": playerSlug})
            ])

        // // const {roster, team_outlook} = rawTeamData.data
        // // const transformedTeamData = transformPlayerContracts(roster)

        return Response.json({
            data
        })
      },
    },
  },
})