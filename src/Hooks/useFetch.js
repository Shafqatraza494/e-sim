import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export function useFetch(key, url, options = {}) {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await apiClient.get(url);
      return data;
    },
    ...options,
  });
}
