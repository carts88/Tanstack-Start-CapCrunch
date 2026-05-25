import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/$staffSlug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Staff Member: </div>
}
