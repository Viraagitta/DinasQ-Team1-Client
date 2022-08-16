import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ABSENCE_USER,
  CREATE_OFFICIAL_LETTERS,
  CREATE_REIMBURSEMENT,
  FETCH_OFFICIAL_LETTERS_BY_USERID,
  FETCH_REIMBURSEMENTS_BY_LETTERID,
  LOGIN_STAFF,
  UPDATE_PASSWORD,
} from "./actionType";
import axios from "axios";
import { useSelector } from "react-redux";
const baseUrl = "http://192.168.100.13:3000";

// const baseUrl = "http://localhost:3000";

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_STAFF,
    payload,
  };
};

export const loginStaff = (credential) => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/login-all`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credential)
    });
  };
};

export const createOfficialLetterSuccess = (payload) => {
  return {
    type: CREATE_OFFICIAL_LETTERS,
    payload,
  };
};
export const createOfficialLetter = (credential) => {
  // console.log(credential, "<<cre");
  return async (dispatch, getState) => {
    try {
      // console.log(data, " <<Store");
      let { data } = await axios.post(
        `${baseUrl}/officialletters`,
        {
          activityName: credential.activityName,
          from: credential.from,
          to: credential.to,
          leaveDate: credential.leaveDate,
          returnDate: credential.returnDate,
        },
        {
          headers: {
            access_token: await AsyncStorage.getItem("access_token"),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};
export const createReimbursementSucess = (payload) => {
  return {
    type: CREATE_REIMBURSEMENT,
    payload,
  };
};
export const createReimbursement = (credential) => {
  // console.log(credential, "<<cre");
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(
        `${baseUrl}/reimbursements`,
        {
          OfficialLetterId: credential.OfficialLetterId,
          description: credential.description,
          category: credential.category,
          cost: credential.cost,
          image: credential.image,
        },
        {
          headers: {
            access_token: await AsyncStorage.getItem("access_token"),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUserdetailSuccess = (payload) => {
  return {
    type: FETCH_OFFICIAL_LETTERS_BY_USERID,
    payload,
  };
};
export const getUserdetails = (id) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(`${baseUrl}/users/${id}`, {
        headers: {
          access_token: await AsyncStorage.getItem("access_token"),
        },
      });
      // console.log(data, "<<");
      dispatch(fetchUserdetailSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchOfficialLetterByLoggedInSuccess = (payload) => {
  return {
    type: FETCH_OFFICIAL_LETTERS_BY_USERID,
    payload,
  };
};
export const allOfficialLetterByLoggedIn = () => {
  return async (dispatch, getState) => {
    try {
      // console.log(await AsyncStorage.getItem("access_token"));
      let { data } = await axios.get(`${baseUrl}/logged-in-letter`, {
        headers: {
          access_token: await AsyncStorage.getItem("access_token"),
        },
      });
      dispatch(fetchOfficialLetterByLoggedInSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchReimbursementByLoggedInSuccess = (payload) => {
  return {
    type: FETCH_REIMBURSEMENTS_BY_LETTERID,
    payload,
  };
};

export const absenceSuccess = (payload) => {
  return {
    type: ABSENCE_USER,
    payload,
  };
};
export const userAbsence = (credential) => {
  console.log(credential, "<<<user");
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(
        `${baseUrl}/locations`,
        {
          latitude: credential.latitude,
          longitude: credential.longitude,
          cityName: credential.cityName,
        },
        {
          headers: {
            access_token: await AsyncStorage.getItem("access_token"),
          },
        }
      );
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const updatePasswordSuccess = (payload) => {
  return {
    type: UPDATE_PASSWORD,
    payload,
  };
};
export const updatePassword = (credential) => {
  console.log(credential, "<<<<<<<<<");
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.patch(
        `${baseUrl}/users`,
        {
          password: credential.password,
        },
        {
          headers: {
            access_token: await AsyncStorage.getItem("access_token"),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};
