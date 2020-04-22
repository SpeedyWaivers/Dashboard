import { SET_CUSTOMER_LIST, SET_WAIVER } from "../actions/WaiverActions";

const initialState = {
  customerList: [],
  waivers: [],
  selectedWaiver: {},
};

const waiverReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_CUSTOMER_LIST: {
      return {
        ...state,
        customerList: [...action.data],
      };
    }
    case SET_WAIVER: {
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

export default waiverReducer;
