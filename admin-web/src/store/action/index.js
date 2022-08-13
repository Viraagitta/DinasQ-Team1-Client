import { FETCH_LIST_EMPLOYEES, FETCH_LIST_REIMBURSEMENT } from "./actionType";
import axios from "axios";
const baseUrl = "http://localhost:3000";
export const fetchListEmpoleeySuccess = (payload) => {
  return {
    type: FETCH_LIST_EMPLOYEES,
    payload,
  };
};
export const fetchEmployees = () => {
  return (dispatch, getState) => {
    axios
      .get(`${baseUrl}/users`)
      .then(({ data }) => dispatch(fetchListEmpoleeySuccess(data)))
      .catch((error) => console.log(error));
  };
};

export const fetchListReimbursementSuccess = (payload) => {
  return {
    type: FETCH_LIST_REIMBURSEMENT,
    payload,
  };
};
export const fetchAllReimbursement = () => {
  return (dispatch, getState) => {
    axios
      .get(`${baseUrl}/reimbursements`)
      .then(({ data }) => dispatch(fetchListReimbursementSuccess(data)))
      .catch((error) => console.log(error));
  };
};
