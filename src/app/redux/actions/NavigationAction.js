import axios from "axios";
import { logoutUser } from "./UserActions";
export const SET_USER_NAVIGATION = "SET_USER_NAVIGATION";
export const SET_VANUE = "SET_VANUE";

export function getNavigationByUser() {
  return (dispatch) => {
    axios
      .get("/venues")
      .then(({ data }) => {
        if (data && data[0] && data[0].userPages) {
          let navigations = data[0].userPages.map((item) => ({
            name: item.name,
            path: item.route.toLowerCase(),
            icon: "dashboard",
          }));

          dispatch({
            type: SET_USER_NAVIGATION,
            payload: navigations,
          });

          delete data[0].userPages;
          delete data[0].userInformation;

          dispatch({
            type: SET_VANUE,
            payload: data[0],
          });
        }
      })
      .catch(() => dispatch(logoutUser()));
  };
}
