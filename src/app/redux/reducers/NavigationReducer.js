import { SET_USER_NAVIGATION, SET_VANUE } from "../actions/NavigationAction";

const initialState = {
  navigations: [],
  venue: {},
};

const NavigationReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAVIGATION: {
      return {
        ...state,
        navigations: action.payload,
      };
    }
    case SET_VANUE: {
      return {
        ...state,
        venue: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default NavigationReducer;
