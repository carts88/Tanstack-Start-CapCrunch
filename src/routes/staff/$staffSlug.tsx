import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/$staffSlug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/$staffSlug"!</div>
}
