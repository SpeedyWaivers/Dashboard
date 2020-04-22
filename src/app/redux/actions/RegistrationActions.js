import Axios from "axios";

export const SET_REGISTRATION_FIELDS = "SET_REGISTRATION_FIELDS";

export function getRegistrationSettings(venueId) {
  return (dispatch) => {
    if (venueId)
      Axios.get(`/RegistrationSettings/${venueId}`).then(({ data }) => {
        if (data) {
          dispatch({
            type: SET_REGISTRATION_FIELDS,
            data,
          });
        }
      });
  };
}

export function setRegistrationFields(venueId, registrationFields) {
  return (dispatch) => {
    if (venueId)
      return Axios.post(`/RegistrationSettings`, {
        venueId,
        registrationFields,
      }).then(({ data }) => {
        if (data && data.registrationFields) {
          dispatch({
            type: SET_REGISTRATION_FIELDS,
            data: data,
          });
        }
        return data;
      });
  };
}
