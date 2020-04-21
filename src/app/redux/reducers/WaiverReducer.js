import { SET_CUSTOMER_LIST } from "../actions/WaiverActions";

const initialState = {
  customerList: [],
};

const waiverReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_CUSTOMER_LIST: {
      return {
        ...state,
        customerList: [...action.data],
      };
    }
    default: {
      return state;
    }
  }
};

export default waiverReducer;
