 import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teams/$teamSlug')({
  component: RouteComponent,
})

function RouteComponent() {
  const {teamSlug} = Route.useParams()
  return <div>Hello "/teams/$teamSlug"! {teamSlug} </div>
}
