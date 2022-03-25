import * as shopActionTypes from "../constants/shopConstants";

export const selectCustomer = (customer) => {
  return {
    type: shopActionTypes.CUSTOMER_DETAILS,
    payload: customer,
  };
};

export const addToCart = (product) => {
  return {
    type: shopActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const incrementQuantity = (product) => {
  return {
    type: shopActionTypes.INCREMENT_QUANTITY,
    payload: product,
  };
};

export const decrementQuantity = (product) => {
  return {
    type: shopActionTypes.DECREMENT_QUANITY,
    payload: product,
  };
};
