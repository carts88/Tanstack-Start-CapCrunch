import { fetchPlayerBySlug, usePlayerBySlug } from '@/components/players/hooks/use-player'
import PlayerMain from '@/components/players/player-main'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/players/$playerSlug')( {
  head: ({}) => (
    {
    
    meta: [
      // twitter
      // {
      //   name: "twitter:card",
      //   content: "summary_large_image",
      // },
      // {
      //   name: "twitter:title",
      //   content: loaderData.data.playerInfo.fullName,
      // },
      // {
      //   name: "twitter:description",
      //   content: "Tyson Foerster is a good player"
      // },
      // {
      //   name: "twitter:image",
      //   content: loaderData.data.playerInfo.headshotUrl
      // },

      // Base WEbsite Meta
      // { title: `CapCrunch - ${loaderData.data.playerInfo.fullName}`},
      {
        name: 'description',
        content: 'Welcome to My App, a platform for...',
      },
    ],
  }),
  component: RouteComponent,
  loader: async ({ params }) => {
    const { playerSlug } = params
    const player = fetchPlayerBySlug(playerSlug)
    
    return player
  },

})

function RouteComponent() {
  const { playerSlug } = Route.useParams()
  const {data, isPending} = usePlayerBySlug(playerSlug)

  if (isPending || !data?.data) {
    return <div>Loading...</div>
  }

  const {playerInfo, contracts, transactions } = data?.data

  // console.log(
  //   "ROUTE COMPONENT PLAYER", player
  // )

  // console.log(
  //   "ROUTE COMPONENT CONTRRACTS", contracts
  // )

  // console.log(
  //   "ROUTE COMPONENT TRANSACTIONS", transactions
  // )
  
    if (isPending) {
        return <div>Loading...</div>
    }
  return <PlayerMain 
      playerInfo={playerInfo}
      contracts={contracts}
      transactions={transactions}
    />
}


