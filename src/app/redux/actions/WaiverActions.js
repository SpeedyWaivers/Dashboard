import axios from "axios";

export const SET_CUSTOMER_LIST = "SET_CUSTOMER_LIST";
export const SET_WAIVER = "SET_WAIVER";

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

export function getWaiver(venueId) {
  return (dispatch) => {
    if (venueId)
      axios.get(`/Waivers/${venueId}`).then(({ data }) => {
        dispatch({
          type: SET_WAIVER,
          data,
        });
      });
  };
}

export function saveSettings(data) {
  return (dispatch) => {
    if (data)
      return axios.post(`/Settings`, data).then(() => {
        dispatch({
          type: SET_WAIVER,
          data: { selectedWaiver: data },
        });
      });
  };
}

export function saveWaiver(data) {
  return (dispatch) => {
    if (data)
      return axios.post(`/Waivers/Update`, data).then(() => {
        dispatch({
          type: SET_WAIVER,
          data: { selectedWaiver: data },
        });
      });
  };
}

export function deleteWaiver(waiverId) {
  return (dispatch) => {
    if (waiverId)
      return axios.delete(`/Waivers/${waiverId}`).then(({ data }) => {
        console.log(data);

        // dispatch({
        //   type: SET_WAIVER,
        //   data,
        // });
        return data;
      });
  };
}
