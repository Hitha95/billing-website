import * as userActionTypes from "../constants/userConstants";
import { axiosInstance1, axiosInstance } from "../../axios";
import axios from "axios";
export const registerUser = (registerData) => {
  return {
    type: userActionTypes.REGISTER_A_USER,
    payload: registerData,
  };
};

export const loginUser = (token) => {
  return {
    type: userActionTypes.LOGIN_A_USER,
    payload: token,
  };
};

export const logoutUser = () => {
  return {
    type: userActionTypes.LOGOUT_A_USER,
  };
};

export const getUserInformation = (userData) => {
  return {
    type: userActionTypes.GET_USER_INFORMATION,
    payload: userData,
  };
};

export const asyncRegisterUser = (registerData, setformErrors, navigate) => {
  return (dispatch) => {
    axiosInstance1
      .post("users/register", registerData)
      .then((response) => {
        let result = response.data;
        if (result.hasOwnProperty("keyValue")) {
          let errors = {};
          if (result.keyValue.username) {
            errors.username = "username is already registered";
          }
          if (result.keyValue.email) {
            errors.email = "email is already registered";
          }
          setformErrors(errors);
        } else {
          dispatch(registerUser(registerData));
          alert("registered successfully");
          navigate("/signin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const asyncLoginUser = (loginData, setformErrors, navigate) => {
  return (dispatch) => {
    axiosInstance1
      .post("users/login", loginData)
      .then((response) => {
        let result = response.data;
        if (result.hasOwnProperty("errors")) {
          let error = {};
          error.serverErrors = "invalid email or password";
          setformErrors(error);
        } else {
          dispatch(loginUser(result.token));
          JSON.stringify(localStorage.setItem("billing-token", result.token));

          dispatch(asyncGetUserInformation());
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const asyncGetUserInformation = () => {
  console.log("hello");
  return (dispatch) => {
    axiosInstance
      .get("users/account", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("billing-token"),
        },
      })
      .then((response) => {
        let result = response.data;
        dispatch(getUserInformation(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
