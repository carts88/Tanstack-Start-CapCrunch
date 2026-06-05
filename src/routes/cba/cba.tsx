import { Outlet, createFileRoute } from '@tanstack/react-router'
import CbaMain from '@/components/cba/cba-main'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { CBASidebar } from '@/components/cba/navigation/cba-sidebar'

export const Route = createFileRoute('/cba/cba')({
  component: RouteComponent,  
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <CBASidebar />
      <main className='m-10 w-full'>
          <Outlet /> 
      </main>
    </SidebarProvider>
  )
}
