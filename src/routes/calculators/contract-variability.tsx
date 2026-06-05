import { createFileRoute } from '@tanstack/react-router'
import { CustomContractBuilder } from '@/components/manage-contract/custom-contract-builder';

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
       <CustomContractBuilder />
    </div>
)
}
