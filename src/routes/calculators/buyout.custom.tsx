import CustomBuyout from '@/components/buyout-calculator/custom-buyout/custom-buyout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/calculators/buyout/custom')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <CustomBuyout />
)}
