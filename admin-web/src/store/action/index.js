import { FETCH_LIST_EMPLOYEES } from "./actionType";
// import axios from "axios";
const baseUrl = "http://localhost:3000";
export const fetchListEmpoleeySuccess = (payload) => {
  return {
    type: FETCH_LIST_EMPLOYEES,
    payload,
  };
};

export const fetchEmployees = () => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/users`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw { name: "Something went wrong" };
        }
      })
      .then((data) => dispatch(fetchListEmpoleeySuccess(data)))
      .catch((error) => console.log(error));
  };
};
