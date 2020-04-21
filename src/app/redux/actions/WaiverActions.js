import axios from "axios";
import history from "history.js";
import jwtAuthService from "../../services/jwtAuthService";

export const SET_USER_DATA = "USER_SET_DATA";
export const REMOVE_USER_DATA = "USER_REMOVE_DATA";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

export const SET_CUSTOMER_LIST = "SET_CUSTOMER_LIST";
export const SET_REGISTRATION_SETTINGS = "SET_REGISTRATION_SETTINGS";

export function getCustomerList() {
  return (dispatch) => {
    axios.get("/Customers").then(({ data }) => {
      dispatch({
        type: SET_CUSTOMER_LIST,
        data,
      });
    });
  };
}

export function getRegistrationSettings() {
  return (dispatch) => {
    axios.get("/RegistrationSettings").then(({ data }) => {
      dispatch({
        type: SET_REGISTRATION_SETTINGS,
        data,
      });
    });
  };
}
