import * as productsActionTypes from "../constants/productConstants";
import { axiosInstance } from "../../axios";

export const asyncGetAllProducts = () => {
  return (dispatch) => {
    axiosInstance
      .get("customers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("billing-token"),
        },
      })
      .then((response) => {
        let result = response.data;
        dispatch(getAllProducts(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createProduct = (productData) => {
  return {
    type: productsActionTypes.CREATE_PRODUCT,
    payload: productData,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: productsActionTypes.DELETE_PRODUCT,
    payload: productId,
  };
};

export const getProduct = (productId) => {
  return {
    type: productsActionTypes.GET_PRODUCT,
    payload: productId,
  };
};

export const updateProduct = (product) => {
  return {
    type: productsActionTypes.UPDATE_PRODUCT,
    payload: product,
  };
};

export const getAllProducts = (products) => {
  return {
    type: productsActionTypes.GET_ALL_PRODUCTS,
    payload: products,
  };
};
