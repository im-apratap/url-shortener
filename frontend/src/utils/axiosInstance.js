import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // any status code within the range of 2xx
  },
  (error) => {
    // Hande different types of error
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error("Bad Request:", data);
          break;
        case 401:
          console.error("Unauthorized:", data);
          break;
        case 403:
          console.error("Forbidden", data);
          break;
        case 404:
          console.error("Not Found", data);
          break;
        case 500:
          console.error("Server Error", data);
          break;
        default:
          console.error(`Error (${status})`);
      }
    }
    else if(error.request){
        console.error(`Network Error: No response received ${error.request}`);
    }
    else{
        console.error(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
