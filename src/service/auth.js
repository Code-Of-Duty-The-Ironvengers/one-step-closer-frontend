import apiClient from "./api-client";

export function getMe() {
  return apiClient.get("/auth/get-me");
}
