import * as customersActionTypes from "../constants/customerConstants";

const CUSTOMERS_INITIAL_STATE = {
  allCustomers: [],
};

export const customersReducer = (
  state = CUSTOMERS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case customersActionTypes.CREATE_CUSTOMER: {
      let stateCopy = { ...state };
      stateCopy.allCustomers = [...stateCopy.allCustomers, { ...payload }];
      return stateCopy;
    }
    case customersActionTypes.DELETE_CUSTOMER: {
      let stateCopy = { ...state };
      return stateCopy;
    }
    case customersActionTypes.GET_CUSTOMER: {
      let stateCopy = { ...state };
      return stateCopy;
    }
    case customersActionTypes.UPDATE_CUSTOMER: {
      let stateCopy = { ...state };
      return stateCopy;
    }
    case customersActionTypes.GET_ALL_CUSTOMERS: {
      let stateCopy = { ...state };
      return { ...stateCopy, allCustomers: [...payload] };
    }
    default: {
      return state;
    }
  }
};
