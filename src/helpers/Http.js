import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
// import { useHistory } from "react-router-dom";

export const API_URL = import.meta.env.VITE_BASE_API_URL;

class Http {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 10000,
    });

    // Add a request interceptor
    this.api.interceptors.request.use(
      function (config) {
        const token = Cookies.get("accessToken");

        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 403) {
          const refreshToken = Cookies.get("refreshToken");

          if (refreshToken) {
            try {
              // Attempt to refresh the access token
              const { data } = await axios.post(`${API_URL}auth/refreshToken`, {
                refreshToken,
              });

              // Save the new access token and retry the original request
              Cookies.set("refreshToken", data.refreshToken);
              Cookies.set("accessToken", data.accessToken);
              originalRequest.headers[
                "Authorization"
              ] = `Bearer ${data.accessToken}`;
              return this.api(originalRequest);
            } catch (refreshError) {
              toast.error("Session expired. Please log in again.");
              Cookies.remove("accessToken");
              Cookies.remove("refreshToken");
              window.location.href = "/login";
              // Optionally redirect to login page
              return this.handleError(refreshError);
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }

  async get(url, config = {}) {
    try {
      const response = await this.api.get(url, config);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async post(url, data, config = {}) {
    try {
      const response = await this.api.post(url, data, config);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async put(url, data, config = {}) {
    try {
      const response = await this.api.put(url, data, config);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async patch(url, data, config = {}) {
    try {
      const response = await this.api.patch(url, data, config);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async delete(url) {
    try {
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response && error.response.data) {
      if (error.response.data.message === "The email has already been taken.") {
        toast.error(
          "Account creation failed, email already exists in the system!"
        );
      } else {
        toast.error(
          `Error: ${error.response.data.message || "An error occurred!"}`
        );
      }
      return error.response.data;
    } else {
      toast.error("An unexpected error occurred!");
      return { message: "An unexpected error occurred!" };
    }
  }
}

export default Http;
