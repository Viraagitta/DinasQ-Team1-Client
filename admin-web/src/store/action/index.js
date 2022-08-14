import { FETCH_LIST_EMPLOYEES, LOGIN_USER } from "./actionType";
import axios from "axios";
const baseUrl = "http://localhost:3000";
export const fetchListEmpoleeySuccess = (payload) => {
  return {
    type: FETCH_LIST_EMPLOYEES,
    payload,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const fetchEmployees = () => {
  return (dispatch, getState) => {
    axios
      .get(`${baseUrl}/users`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => dispatch(fetchListEmpoleeySuccess(data)))
      .catch((error) => console.log(error));
  };
};

export const loginUser = (input) => {
  return (dispatch, getState) => {
    axios
      .post(`${baseUrl}/login`, {
        email: input.email,
        password: input.password,
      })
      .then(({ data }) =>
        localStorage.setItem("access_token", data.access_token)
      )
      .catch((error) => console.log(error));
  };
};
