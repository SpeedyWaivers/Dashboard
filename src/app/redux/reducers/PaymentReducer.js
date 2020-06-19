import { SET_CREDIT_CARD_LIST } from "../actions/PaymentActions";

const initialState = {
  creditCardList: [],
};

const paymentReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_CREDIT_CARD_LIST: {
      return {
        ...state,
        creditCardList: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default paymentReducer;
