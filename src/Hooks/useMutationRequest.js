import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export function useMutationRequest(method, url, options = {}) {
  return useMutation({
    mutationFn: async (payload) => {
      console.log("[useMutationRequest] Method:", method);
      console.log("[useMutationRequest] URL:", url);
      console.log("[useMutationRequest] Payload:", payload);

      if (method.toLowerCase() === "get" || method.toLowerCase() === "delete") {
        const { data } = await apiClient[method.toLowerCase()](url, {
          params: payload,
        });
        return data;
      } else {
        const { data } = await apiClient[method.toLowerCase()](url, payload);
        return data;
      }
    },
    ...options,
  });
}
  