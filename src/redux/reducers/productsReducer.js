import * as productsActionTypes from "../constants/productConstants";

const PRODUCTS_INITIAL_STATE = {
  allProducts: [],
  oneProduct: {},
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case productsActionTypes.CREATE_PRODUCT: {
      let stateCopy = { ...state };
      stateCopy.allProducts = [{ ...payload }, ...stateCopy.allProducts];
      return stateCopy;
    }
    case productsActionTypes.DELETE_PRODUCT: {
      let stateCopy = { ...state };
      stateCopy.allProducts = stateCopy.allProducts.filter((product) => {
        return product._id !== payload;
      });
      return stateCopy;
    }
    case productsActionTypes.UPDATE_PRODUCT: {
      //payload: product
      let stateCopy = { ...state };
      stateCopy.allProducts = stateCopy.allProducts.map((product) => {
        return product._id === payload._id ? payload : product;
      });
      return stateCopy;
    }
    case productsActionTypes.GET_PRODUCT: {
      //payload: id
      let stateCopy = { ...state };
      stateCopy.oneProduct = stateCopy.allProducts.find((product) => {
        return product._id === payload;
      });
      return stateCopy;
    }

    case productsActionTypes.GET_ALL_PRODUCTS: {
      let stateCopy = { ...state };
      stateCopy.allProducts = [...payload];
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};
