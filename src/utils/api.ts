import axios from "axios";

/**
 * Defines the hook props interface
 */
interface Config {
  mock: boolean;
}

export const getApiClient = (config: Config) => {
  const { mock } = config;

  /**
   * Handles getting the base api url
   */
  const getApiUrl = () => {
    if (process.env.NODE_ENV === "development") {
      if (mock) return "/";
      return process.env.REACT_APP_LOCAL_API;
    }
    return process.env.REACT_APP_STAGING_API;
  };

  const apiClient = axios.create({
    baseURL: getApiUrl(),
  });

  return { apiClient };
};
