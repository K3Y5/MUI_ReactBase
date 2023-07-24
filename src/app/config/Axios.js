import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Router from "../providers/Router";

/* Axios Params */
const uriApiParams = "api";
const TokenVariable = "AuthToken";
const AuthorizationHeader = "Bearer";
const UriAuthFailed_Callback = "/auth";

/* Setup Axios Client Option/Config */
const AxiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/${uriApiParams}/`,
  headers: {
    withCredentials: true
  }
});

/* Set default auth header */
AxiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `${AuthorizationHeader} ${secureLocalStorage.getItem(
    TokenVariable
  )}`;
  return config;
});

/* Set callback url when failed auth */
AxiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      Router.navigate(UriAuthFailed_Callback);
      return error;
    }
    throw error;
  }
);

export default AxiosClient;
