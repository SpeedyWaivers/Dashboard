import { SET_REGISTRATION_FIELDS } from "../actions/RegistrationActions";

const initialState = {
  registrationFields: [],
  settings: [],
};

const registrationReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_REGISTRATION_FIELDS: {
      return {
        ...state,
        ...action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default registrationReducer;
