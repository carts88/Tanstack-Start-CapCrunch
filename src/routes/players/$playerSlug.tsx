import PlayerMain from '@/components/players/player-main'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/players/$playerSlug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><PlayerMain /></div>
}
