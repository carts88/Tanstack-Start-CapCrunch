import { PlayerAnalyticCard } from '@/components/players/player-analytic-card/player-analytic-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/$staffSlug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PlayerAnalyticCard />
}
