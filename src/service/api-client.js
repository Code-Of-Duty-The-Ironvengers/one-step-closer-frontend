import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5005";

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN_SUPER_SAFE");

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    //   console.log("token:", token);
  }

  return config;
});

export default apiClient;

apiClient.get("/");
// hears what you want
// checks if there are interceptors defined
// if so, execute interceptros
// make call
