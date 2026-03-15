import { createFileRoute } from '@tanstack/react-router'
import CbaMain from '@/components/cba/cba-main'

export const Route = createFileRoute('/cba/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CbaMain />
}