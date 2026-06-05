import { API_URL, API_VERSION } from "@/lib/constants/site";
import { useQuery } from "@tanstack/react-query";

// =============================================
// Fetch Function (Data Layer)
// =============================================

export const fetchPlayerBySlug = async (
  playerSlug: string,
  signal?: AbortSignal
): Promise<string> => {                    // ← Add proper typing
  if (!playerSlug) throw new Error("Player slug is required");

  const response = await fetch(
    `${API_URL}/${API_VERSION}/players/${playerSlug}`,
    { signal }                                // ← Support cancellation
  );

  if (!response.ok) {
    // Better error handling
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Failed to fetch player: ${response.status}`
    );
  }

  return response.json();
};

// =============================================
// Hook (Presentation Layer)
// =============================================

export const usePlayerBySlug = (playerSlug: string) => {
  return useQuery({
    queryKey: ["player", playerSlug],           // Good! Keep it simple
    queryFn: ({ signal }) => fetchPlayerBySlug(playerSlug, signal),
    
    enabled: !!playerSlug && playerSlug.length > 0,
    
    // Caching strategy
    staleTime: 30 * 1000,          // 30 seconds (adjust based on how often data changes)
    gcTime: 5 * 60 * 1000,         // 5 minutes (formerly cacheTime)
    
    // Optional but recommended
    retry: (failureCount, error) => {
      if (error instanceof Error && error.message.includes("404")) return false;
      return failureCount < 2;
    },
    
    refetchOnWindowFocus: false,   // Usually better for player profiles
    refetchOnReconnect: true,
  });
};