import * as billsActionTypes from "../constants/billConstants";

const BILLS_INITIAL_STATE = {
  allBills: [],
};

export const billsReducer = (
  state = BILLS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case billsActionTypes.CREATE_BILL: {
      //payload: one bill object
      let stateCopy = { ...state };
      stateCopy.allBills = [...stateCopy.allBills, { ...payload }];
      return stateCopy;
    }
    case billsActionTypes.DELETE_BILL: {
      //payload:id
      let stateCopy = { ...state };
      stateCopy.allBills = stateCopy.allBills.filter((bill) => {
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
      //payload: all allBills
      let stateCopy = { ...state };
      return { ...stateCopy, allBills: [...payload] };
    }
    default: {
      return state;
    }
  }
};
