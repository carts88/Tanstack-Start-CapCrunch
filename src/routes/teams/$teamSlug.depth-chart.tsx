import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teams/$teamSlug/depth-chart')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/teams/$teamSlug/depth-chart"!</div>
}
