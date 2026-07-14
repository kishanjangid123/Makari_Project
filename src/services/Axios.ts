
import axios from "axios";

const axiosInstance = axios.create({
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = "123456789";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Request Config:", config);

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
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log("Unauthorized");
          break;

        case 403:
          console.log("Forbidden");
          break;

        case 404:
          console.log("Not Found");
          break;

        case 500:
          console.log("Internal Server Error");
          break;

        default:
          console.log("Something went wrong");
      }
    } else {
      console.log("Network Error");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;