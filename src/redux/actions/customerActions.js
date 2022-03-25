import { axiosInstance } from "../../axios";
import * as customersActionTypes from "../constants/customerConstants";

let config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("billing-token"),
  },
};

export const asyncGetAllCustomers = () => {
  return (dispatch) => {
    axiosInstance
      .get("customers", config)
      .then((response) => {
        let result = response.data;
        console.log("customers");
        dispatch(getAllCustomers(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const asyncCreateCustomer = (customerData) => {
  return (dispatch) => {
    axiosInstance
      .post("customers", customerData, config)
      .then((response) => {
        let result = response.data;
        dispatch(createCustomer(result));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const aysncUpdateCustomer = (editedData, customerId) => {
  return (dispatch) => {
    axiosInstance
      .put(`customers/${customerId}`, editedData, config)
      .then((response) => {
        let result = response.data;
        dispatch(updateCustomer(result));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const asyncDeleteCustomer = (customerId) => {
  return (dispatch) => {
    axiosInstance
      .delete(`customers/${customerId}`, config)
      .then((response) => {
        dispatch(deleteCustomer(customerId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const createCustomer = (customerData) => {
  return {
    type: customersActionTypes.CREATE_CUSTOMER,
    payload: customerData,
  };
};

export const updateCustomer = (customerData) => {
  return {
    type: customersActionTypes.UPDATE_CUSTOMER,
    payload: customerData,
  };
};

export const getAllCustomers = (customers) => {
  return {
    type: customersActionTypes.GET_ALL_CUSTOMERS,
    payload: customers,
  };
};

export const deleteCustomer = (customerId) => {
  return {
    type: customersActionTypes.DELETE_CUSTOMER,
    payload: customerId,
  };
};

export const getCustomer = (customerId) => {
  return {
    type: customersActionTypes.GET_CUSTOMER,
    payload: customerId,
  };
};
