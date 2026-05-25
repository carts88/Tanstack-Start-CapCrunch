import * as React from "react"
import { useQuery } from "@tanstack/react-query"

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = React.useState(value)

  React.useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])

  return debounced
}

interface SearchResponse {
  success: boolean
  data?: {
    players: any[]
    staff: any[]
  }
}

export function useSearch(query: string) {
  const debouncedQuery = useDebounce(query, 300)

  const queryResult = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: async (): Promise<SearchResponse> => {
      const res = await fetch(
        `/api/v1/search?search=${encodeURIComponent(debouncedQuery)}`
      )

      if (!res.ok) {
        throw new Error("Search request failed")
      }

      return res.json()
    },
    enabled: debouncedQuery.trim().length >= 2,
    staleTime: 1000 * 60, // 1 min cache
  })

  return {
    ...queryResult,
    players: queryResult.data?.data?.players ?? [],
    staff: queryResult.data?.data?.staff ?? [],
    query: debouncedQuery,
  }
}