// routes/hello.ts
import { queryStaffBios } from '@/data/staff/staff.queries'
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/v1/')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const staff = await queryStaffBios()
        return json(staff)
      },
    },
  },
})