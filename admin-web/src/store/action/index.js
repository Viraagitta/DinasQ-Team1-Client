import {
  CREATE_USER,
  EDIT_USER_DETAIL,
  FETCH_LIST_EMPLOYEES,
  FETCH_LIST_OFFICIALLETTERS,
  FETCH_LIST_REIMBURSEMENT,
  FETCH_LIST_REIMBURSEMENT_BY_OFFICIALLETTERID,
  FETCH_USER_DETAIL,
  LOGIN_USER,
  DELETE_USER,
  DETAILS_USER,
  EDIT_USER,
  UPDATE_STATUS_REIMBURSE,
  GET_PDF_REIMBURSEMENTS,
  USER_LOCATION,
} from "./actionType";
import axios from "axios";
import fileDownload from "js-file-downloader";
import Swal from "sweetalert2";
const baseUrl = "http://localhost:3000";
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

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
      Swal.fire(err.response.data.message);
      // Swal.fire(err.message);
    }
  };
};
export const createUserSuccess = (payload) => {
  return {
    type: CREATE_USER,
    payload,
  };
};
export const createUser = (credential) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(
        `${baseUrl}/register`,
        {
          firstName: credential.firstName,
          lastName: credential.lastName,
          role: credential.role,
          email: credential.email,
          password: credential.password,
          phoneNumber: credential.phoneNumber,
          address: credential.address,
          position: credential.position,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
    } catch (err) {
      console.log(err);
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

export const fetchUserdetailSuccess = (payload) => {
  return {
    type: FETCH_USER_DETAIL,
    payload,
  };
};
export const getUserdetails = (id) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(`${baseUrl}/usersdetails`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      // console.log(data, "<<");
      dispatch(fetchUserdetailSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const updateUserSuccess = (payload) => {
  return {
    type: EDIT_USER_DETAIL,
    payload,
  };
};
export const updateUser = (id, update) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.put(
        `${baseUrl}/users/${id}`,
        {
          firstName: update.firstName,
          lastName: update.lastName,
          role: update.role,
          email: update.email,
          password: update.password,
          phoneNumber: update.phoneNumber,
          address: update.address,
          position: update.position,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      // console.log(data, "<<");
      dispatch(fetchEmployees());
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteUserAllDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.delete(`${baseUrl}/users/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      // console.log(data, "<<");
      dispatch(fetchEmployees());
    } catch (err) {
      console.log(err);
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
        params: { page: getState, size: 100 },
      });
      // console.log(data, "<<");
      dispatch(fetchListReimbursementSuccess(data.response.rows));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchListofficialLettersSuccess = (payload) => {
  return {
    type: FETCH_LIST_OFFICIALLETTERS,
    payload,
  };
};

export const fetchAllofficialLetters = () => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(`${baseUrl}/officialletters`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        params: { page: getState, size: 10 },
      });
      dispatch(fetchListofficialLettersSuccess(data.response.rows));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchListReimbursementByOfficialLetterIdSuccess = (payload) => {
  return {
    type: FETCH_LIST_REIMBURSEMENT_BY_OFFICIALLETTERID,
    payload,
  };
};
export const allReimbursementByOfficialLetterId = (id) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(`${baseUrl}/officialletters/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        params: { page: getState, size: 10 },
      });
      dispatch(fetchListReimbursementByOfficialLetterIdSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteSuccess = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};
export const deleteEmployees = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.delete(`${baseUrl}/users/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchEmployees());
    } catch (error) {
      console.log(error);
    }
  };
};

export const detailsSuccess = (payload) => {
  return {
    type: DETAILS_USER,
    payload,
  };
};
export const detailsUser = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${baseUrl}/users/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(detailsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editSuccess = (payload) => {
  return {
    type: EDIT_USER,
    payload,
  };
};
export const editUser = (form, id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.put(
        `${baseUrl}/users/${id}`,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          role: form.role,
          email: form.email,
          password: form.password,
          phoneNumber: form.phoneNumber,
          address: form.address,
          position: form.position,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(fetchEmployees());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateStatusReimburseSuccess = (payload) => {
  return {
    type: UPDATE_STATUS_REIMBURSE,
    payload,
  };
};
export const updateStatusReimburse = (form, id, target) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.patch(
        `${baseUrl}/reimbursements/${id}`,
        {
          status: form,
          email: target[0].email,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(fetchAllReimbursement());
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPdfSuccess = (payload) => {
  return {
    type: GET_PDF_REIMBURSEMENTS,
    payload,
  };
};
export const getPdfReimburse = (id) => {
  return (dispatch, getState) => {
    axios
      .get(
        `${baseUrl}/reimbursements/pdf/${id}`,
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        },
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const Link = document.createElement("a");
        Link.href = url;
        Link.setAttribute("download", "file.pdf");
        document.body.appendChild(Link);
        Link.click();
      })
      .catch((error) => console.log(error));
  };
};

export const getLocationUserSuccess = (payload) => {
  return {
    type: USER_LOCATION,
    payload,
  };
};
export const getLocationUser = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${baseUrl}/locations`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(getLocationUserSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};
