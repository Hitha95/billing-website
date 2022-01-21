import * as productsActionTypes from "../constants/productConstants";

const PRODUCTS_INITIAL_STATE = {
  products: [],
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case productsActionTypes.CREATE_PRODUCT: {
      let stateCopy = { ...state };
      return stateCopy;
    }
    case productsActionTypes.DELETE_PRODUCT: {
      let stateCopy = { ...state };
      return stateCopy;
    }
    case productsActionTypes.GET_PRODUCT: {
      let stateCopy = { ...state };
      return stateCopy;
    }
    case productsActionTypes.UPDATE_PRODUCT: {
      //payload: product
      let stateCopy = { ...state };
      stateCopy.products = stateCopy.products.map((product) => {
        if (product._id === payload._id) {
          return payload;
        } else {
          return product;
        }
      });
      return stateCopy;
    }
    case productsActionTypes.GET_ALL_PRODUCTS: {
      let stateCopy = { ...state, products: [...payload] };
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};
