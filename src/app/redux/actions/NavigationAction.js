import axios from "axios";
export const SET_USER_NAVIGATION = "SET_USER_NAVIGATION";

export function getNavigationByUser() {
  return (dispatch) => {
    axios.get("/venues").then(({ data }) => {
      console.log(data[0].userPages);

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
      }
    });
  };
}
