import Axios from "axios";

export const SET_CREDIT_CARD_LIST = "SET_CREDIT_CARD_LIST";

export const getCreditCardByVenueId = (id) => {
  return (dispatch) => {
    return Axios.get(`/creditcard/${id}`).then(({ data }) => {
      dispatch({
        type: SET_CREDIT_CARD_LIST,
        data,
      });
    });
  };
};

export const addCreditCard = (token, venueId) => {
  return (dispatch) => {
    return Axios.post(`/creditcard`, {
      venueId,
      token: token?.id,
      lastFour: token?.card?.last4,
      json: token?.card?.brand,
    }).then(({ data }) => {
      dispatch({
        type: SET_CREDIT_CARD_LIST,
        data,
      });
    });
  };
};

export const deleteCreditCard = ({ creditCardId, venueId }) => {
  return (dispatch) => {
    return Axios.delete(`/creditcard`, {
      data: {
        creditCardId,
        venueId,
      },
    }).then(() => {
      dispatch({
        type: SET_CREDIT_CARD_LIST,
        data: [],
      });
    });
  };
};
