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

export function addCustomer(data) {
  delete data.signature;

  return (dispatch) => {
    if (data)
      return axios.post(`/Customers`, data).then(({ data }) => {
        return data;
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

export function addWaiver(data) {
  return (dispatch, getState) => {
    let {
      waiver: { waivers = [] },
    } = getState();

    if (data)
      return axios.post(`/Waivers`, data).then(({ data }) => {
        dispatch({
          type: SET_WAIVER,
          data: {
            waivers: [...waivers, data],
          },
        });
      });
  };
}

export function updateWaiver(data) {
  return (dispatch, getState) => {
    let {
      waiver: { waivers = [] },
    } = getState();

    if (data)
      return axios.post(`/Waivers/Update`, data).then(() => {
        dispatch({
          type: SET_WAIVER,
          data: {
            waivers: waivers.map((item) => {
              if (item.waiverId === data.waiverId) return data;
              return item;
            }),
          },
        });
      });
  };
}

export function deleteWaiver(waiverId) {
  return (dispatch, getState) => {
    let {
      waiver: { waivers = [] },
    } = getState();

    if (waiverId)
      return axios.delete(`/Waivers/${waiverId}`).then(() => {
        dispatch({
          type: SET_WAIVER,
          data: {
            waivers: waivers.filter((item) => item.waiverId != waiverId),
          },
        });
      });
  };
}

export function saveSettings(data) {
  return (dispatch) => {
    if (data) return axios.post(`/Settings`, data).then(() => {});
  };
}
