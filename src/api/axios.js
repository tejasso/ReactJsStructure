// api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // handle the response error
    if (error.response.status === 401) {
      // handle unauthorized access, you may want to redirect to login page
      // logoutUser();
      console.error("Unauthorized access");
    } else {
      // You can even send the error information to a logging service.
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
