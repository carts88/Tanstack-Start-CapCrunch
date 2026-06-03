import { createFileRoute } from '@tanstack/react-router'
import { ContractFormValues, ContractYearGrid } from '@/components/manage-contract/contract-grid'
import { emptyYear } from '@/components/manage-contract/contract-grid.utils';
import { CustomContractBuilder } from '@/components/manage-contract/custom-contract-builder';

export function createDefaultContract(
  startYear: number,
  length: number
): ContractFormValues {
  return {
    startYear,
    signingDate: new Date("2026-04-04"),
    signingTeam: "ducks",
    years: Array.from({ length }, emptyYear),
  };
}

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
