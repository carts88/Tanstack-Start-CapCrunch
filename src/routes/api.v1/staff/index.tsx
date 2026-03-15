// routes/staff.tsx
import { getStaff } from '@/data/staff/staff.server-function'
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/v1/staff/')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const staff = await getStaff()

        return json({...staff})
      },
    },
  },
})