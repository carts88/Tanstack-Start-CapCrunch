import { CustomDraftLotteryMain } from '@/components/custom-draft-lottery/main'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tools/custom-draft-lottery')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div> <CustomDraftLotteryMain /></div>
}
