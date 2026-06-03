import { ContractYearGrid } from '@/components/manage-contract/contract-grid'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/calculators/contract-variability',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div
      className='my-5 m-auto'
    >
        <ContractYearGrid />
    </div>
)
}
