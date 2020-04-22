import axios from "axios";
import localStorageService from "./localStorageService";
import { API_ROOT } from "app/redux/constants";

class JwtAuthService {
  loginWithUsernameAndPassword = (username, password) => {
    return axios
      .post(`${API_ROOT}/authenticate`, {
        username,
        password,
      })
      .then(({ data }) => {
        // Save token
        this.setSession(data.token);
        // Set user
        this.setUser(data);
        return data;
      });
  };

  loginWithToken = () => {
    let data = localStorageService.getItem("auth_user");
    if (data) {
      this.setSession(data.token);
      this.setUser(data);
    }
    return data;
  };

  logout = () => {
    this.setSession(null);
    this.removeUser();
  };

  // Set token to all http request header, so you don't need to attach everytime
  setSession = (token) => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      axios.defaults.baseURL = API_ROOT;
    } else {
      localStorage.removeItem("jwt_token");
      delete axios.defaults.headers.common["Authorization"];
      delete axios.defaults.baseURL;
    }
  };

  // Save user to localstorage
  setUser = (user) => {
    localStorageService.setItem("auth_user", user);
  };
  // Remove user from localstorage
  removeUser = () => {
    localStorage.removeItem("auth_user");
  };
}

export default new JwtAuthService();
