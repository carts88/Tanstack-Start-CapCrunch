import DndExample from "@/components/drag-and-drop/example";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DndExample />
}
