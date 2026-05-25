import { CustomDraftLotteryMain } from '@/components/custom-draft-lottery/main'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tools/custom-draft-lottery')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div> <CustomDraftLotteryMain /></div>
}
