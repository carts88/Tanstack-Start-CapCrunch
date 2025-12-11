import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teams/$teamSlug/daily-cap')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/teams/$teamSlug/daily-cap"!</div>
}
