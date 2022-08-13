import { FETCH_LIST_EMPLOYEES, FETCH_LIST_REIMBURSEMENT } from "./actionType";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const loginAdmin = (credential, callback = () => {}) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(`${baseUrl}/login`, {
        email: credential.email,
        password: credential.password,
      });
      if (data.access_token) {
        const access_token = data.access_token;
        localStorage.setItem("access_token", access_token);
        callback();
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchListEmployeesSuccess = (payload) => {
  return {
    type: FETCH_LIST_EMPLOYEES,
    payload,
  };
};
export const fetchEmployees = () => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(`${baseUrl}/users`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      // console.log(data, "<<");
      dispatch(fetchListEmployeesSuccess(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchListReimbursementSuccess = (payload) => {
  return {
    type: FETCH_LIST_REIMBURSEMENT,
    payload,
  };
};
export const fetchAllReimbursement = () => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(`${baseUrl}/reimbursements`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        params: { page: getState, size: 10 },
      });
      // console.log(data, "<<");
      dispatch(fetchListReimbursementSuccess(data.response.rows));
    } catch (err) {
      console.error(err);
    }
  };
};
