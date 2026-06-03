import * as React from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { API_URL, API_VERSION } from '@/lib/constants/site'

const MIN_QUERY_LENGTH = 2
const SEARCH_DEBOUNCE_MS = 300

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = React.useState(value)

  React.useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])

  return debounced
}

const fetchSearchMeta = async (searchTerm: string, signal: AbortSignal) => {
  const response = await fetch(
    `${API_URL}/${API_VERSION}/search?search=${encodeURIComponent(searchTerm)}`,
    { signal },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch search results')
  }

  const json = await response.json()
  return json
}

export function useSearch(query: string) {
  const trimmedQuery = query.trim()
  const debouncedQuery = useDebounce(trimmedQuery, SEARCH_DEBOUNCE_MS)

  const isEnabled = debouncedQuery.length >= MIN_QUERY_LENGTH
  const isDebouncing =
    trimmedQuery.length >= MIN_QUERY_LENGTH && trimmedQuery !== debouncedQuery

  const queryResult = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: ({ signal }) => fetchSearchMeta(debouncedQuery, signal),
    placeholderData: keepPreviousData,
    staleTime: 5 * 1000,
    enabled: isEnabled,
  })

  // console.log("Query Search", query)
  // console.log("Query Result", queryResult)
  return {
    ...queryResult,
    isSearching: isDebouncing || queryResult.isFetching,
  }
}
