import ManageContract from '@/components/manage-contract/manage-contract'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/calculators/contract-variability',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <ManageContract 
    mode='CALCULATOR'
    age={24}
    
  />
)
}
