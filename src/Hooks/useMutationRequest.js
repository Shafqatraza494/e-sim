import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import Cookies from "js-cookie";

export function useMutationRequest(method, url, options = {}) {
  return useMutation({
    mutationFn: async (payload) => {
      const lowerMethod = method.toLowerCase();
      const token = Cookies.get("auth_token");

      const config = {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
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

      if (data && data.status === false) {
        throw new Error(data.message || "Request failed");
      }

      return data;
    },
    ...options,
  });
}
