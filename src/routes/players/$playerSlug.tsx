import { usePlayerBySlug } from '@/components/players/hooks/use-player'
import PlayerMain from '@/components/players/player-main'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/players/$playerSlug')({
  component: RouteComponent,
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


