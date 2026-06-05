import { getDraftByYear } from '@/data/draft/draft.queries';
import { getPlayerData } from '@/data/players/single-player.controller'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/api/v1/drafts/$draftYear')({
  server: {
    handlers: {
      GET: async ({ params }: { params: { draftYear: number } }) => {
        const { draftYear } = params;
        
        const [rawDraftData] = await Promise.all([
            getDraftByYear({ "year" : draftYear})
        ])

        // // const {roster, team_outlook} = rawTeamData.data
        // // const transformedTeamData = transformPlayerContracts(roster)

        return Response.json({
            rawDraftData
        })
      },
    },
  },
})