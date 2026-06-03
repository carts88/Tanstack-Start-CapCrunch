import { getSearchData } from '@/data/search-bar/queries.search-bar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/v1/search')({
server: {
    handlers: {
        GET: async ({ request }) => {
            const url = new URL(request.url)
            const search = url.searchParams.get('search') ?? ''

            if (!search.trim()) {
                return Response.json({
                success: false,
                code: 400,
                message: "Search query is required",
                }, { status: 400 })
            }

            const data = await getSearchData({ search })

            
            return Response.json(data.data, { status: data.code })
            },
    },
  },
})