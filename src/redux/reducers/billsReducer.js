import * as billsActionTypes from "../constants/billConstants";

const BILLS_INITIAL_STATE = {
  bills: [],
};

export const billsReducer = (
  state = BILLS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case billsActionTypes.CREATE_BILL: {
      //payload: one bill object
      let stateCopy = { ...state };
      stateCopy.bills = [...stateCopy.bills, { ...payload }];
      return stateCopy;
    }
    case billsActionTypes.DELETE_BILL: {
      //payload:id
      let stateCopy = { ...state };
      stateCopy.bills = stateCopy.bills.filter((bill) => {
        return bill._id !== payload;
      });
      return stateCopy;
    }
    case billsActionTypes.GET_BILL: {
      //payload: id
      let stateCopy = { ...state };
      return stateCopy;
    }
    case billsActionTypes.GET_ALL_BILLS: {
      //payload: all bills
      let stateCopy = { ...state };
      return { ...stateCopy, bills: [...payload] };
    }
    default: {
      return state;
    }
  }
};
