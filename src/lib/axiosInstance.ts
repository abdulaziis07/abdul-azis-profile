import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_GITHUB_PROFILE_API_BASE_URL}`,
  timeout: 1000
});
