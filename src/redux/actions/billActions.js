import * as billsActionTypes from "../constants/billConstants";

export const createCustomer = (billData) => {
  return {
    type: billsActionTypes.CREATE_BILL,
    payload: billData,
  };
};

export const deleteCustomer = (billId) => {
  return {
    type: billsActionTypes.DELETE_BILL,
    payload: billId,
  };
};

export const getCustomer = (billId) => {
  return {
    type: billsActionTypes.GET_BILL,
    payload: billId,
  };
};

export const getAllCustomers = () => {
  return {
    type: billsActionTypes.GET_ALL_BILLS,
  };
};
