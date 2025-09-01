import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export function useMutationRequest(method, url, options = {}) {
  return useMutation({
    mutationFn: async (payload) => {
      const lowerMethod = method.toLowerCase();
      const token = localStorage.getItem("auth_token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let response;

      if (lowerMethod === "get" || lowerMethod === "delete") {
        response = await apiClient[lowerMethod](url, {
          params: payload,
          ...config,
        });
      } else {
        if (payload !== undefined) {
          response = await apiClient[lowerMethod](url, payload, config);
        } else {
          response = await apiClient[lowerMethod](url, config);
        }
      }

      const data = response.data;

      // 🔥 Treat backend `status: false` as an error
      if (data && data.status === false) {
        throw new Error(data.message || "Request failed");
      }

      return data;
    },
    ...options,
  });
}
