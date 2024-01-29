import axios from "axios";

const jwtToken = () => {
  const instance = axios.create();

  instance.interceptors.request.use(
    config => {
      const token = sessionStorage.getItem("accessToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export default jwtToken;
