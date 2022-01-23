import * as productsActionTypes from "../constants/productConstants";
import { axiosInstance } from "../../axios";
import { deleteCustomer } from "./customerActions";

let config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("billing-token"),
  },
};

export const asyncGetAllProducts = () => {
  return (dispatch) => {
    axiosInstance
      .get("products", config)
      .then((response) => {
        let result = response.data;
        dispatch(getAllProducts(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const asyncCreateProduct = (productData) => {
  return (dispatch) => {
    axiosInstance
      .post("products", productData, config)
      .then((response) => {
        let result = response.data;
        dispatch(createProduct(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const aysncUpdateProduct = (editedData, productId) => {
  return (dispatch) => {
    axiosInstance
      .put(`products/${productId}`, editedData, config)
      .then((response) => {
        let result = response.data;
        dispatch(updateProduct(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const asyncDeleteProduct = (productId) => {
  return (dispatch) => {
    axiosInstance
      .delete(`products/${productId}`, config)
      .then((response) => {
        dispatch(deleteProduct(productId));
      })
      .catch((error) => {
        console.log(error);
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

export const updateProduct = (productData) => {
  return {
    type: productsActionTypes.UPDATE_PRODUCT,
    payload: productData,
  };
};

export const getAllProducts = (products) => {
  return {
    type: productsActionTypes.GET_ALL_PRODUCTS,
    payload: products,
  };
};
