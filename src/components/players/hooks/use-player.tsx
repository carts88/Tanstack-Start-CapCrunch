import { API_URL, API_VERSION } from "@/lib/constants/site"
import { useQuery } from "@tanstack/react-query"


export const fetchPlayerBySlug = async (playerSlug: string) => {
    const response = await fetch(
        `${API_URL}/${API_VERSION}/players/${playerSlug}`
    )
    const json = await response.json()
    return json
}


export const usePlayerBySlug = (playerSlug: string) => {
    const playerQuery = useQuery({
        queryKey: ['player', playerSlug],
        queryFn: () => fetchPlayerBySlug(playerSlug),
        enabled: !!playerSlug,
        staleTime: 5 * 1000
    })


    return playerQuery
}