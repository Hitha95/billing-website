import * as shopActionTypes from "../constants/shopConstants";

const initialState = {
  // customerName: JSON.parse(localStorage.getItem("Shop")).customerName || "",
  // customerId: JSON.parse(localStorage.getItem("Shop")).customerId || "",
  customerName: "",
  customerId: "",
  cart: [],
  totalBill: 0,

  // cart: JSON.parse(localStorage.getItem("Shop")).cart || [],
  // totalBill: JSON.parse(localStorage.getItem("Shop")).totalBill || 0,
};

export const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case shopActionTypes.CUSTOMER_DETAILS: {
      let stateCopy = { ...state };
      stateCopy.customerName = payload.name;
      stateCopy.customerId = payload._id;
      stateCopy.cart = [];
      localStorage.setItem("Shop", JSON.stringify(stateCopy));
      return stateCopy;
    }
    case shopActionTypes.ADD_TO_CART: {
      let stateCopy = { ...state };
      stateCopy.cart = [...stateCopy.cart, { product: payload, quantity: 1 }];
      localStorage.setItem("Shop", JSON.stringify(stateCopy));
      return stateCopy;
    }
    case shopActionTypes.INCREMENT_QUANTITY: {
      let stateCopy = { ...state };
      stateCopy.cart = stateCopy.cart.map((item) => {
        if (item.product._id === payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem("Shop", JSON.stringify(stateCopy));
      return stateCopy;
    }
    case shopActionTypes.DECREMENT_QUANITY: {
      let stateCopy = { ...state };
      stateCopy.cart = stateCopy.cart.map((item) => {
        if (item.product._id === payload._id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem("Shop", JSON.stringify(stateCopy));
      return stateCopy;
    }
    case shopActionTypes.REMOVE_FROM_CART: {
      let stateCopy = { ...state };
      localStorage.setItem("Shop", JSON.stringify(stateCopy));
      return stateCopy;
    }

    default: {
      return state;
    }
  }
};
