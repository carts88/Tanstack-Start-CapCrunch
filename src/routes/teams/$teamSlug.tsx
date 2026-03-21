 import TeamMain from '@/components/team/team-main'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teams/$teamSlug')({
  component: RouteComponent,
})

function RouteComponent() {
  const {teamSlug} = Route.useParams()
  return <TeamMain />
}
