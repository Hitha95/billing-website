import * as userActionTypes from "../constants/userConstants";

const USER_INITIAL_STATE = {};

export const userReducer = (state = USER_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.GET_USER_INFORMATION: {
      let stateCopy = { ...state };
      return { ...stateCopy, userDetails: payload };
    }
    case userActionTypes.LOGIN_A_USER: {
      let stateCopy = { ...state };
      return { ...stateCopy, token: payload };
    }
    default: {
      return state;
    }
  }
};
