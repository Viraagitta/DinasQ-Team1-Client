import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ABSENCE_USER,
  CREATE_OFFICIAL_LETTERS,
  CREATE_REIMBURSEMENT,
  FETCH_OFFICIAL_LETTERS_BY_USERID,
  FETCH_REIMBURSEMENTS_BY_LETTERID,
  FETCH_USER_DETAIL,
  LOGIN_STAFF,
  UPDATE_PASSWORD,
} from "./actionType";
import axios from "axios";

const baseUrl = "http://192.168.1.102:3000";
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
      body: JSON.stringify(credential),
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
      // ToastAndroid.show(err, ToastAndroid.SHORT);
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
export const createReimbursement = (credential, callback = () => {}) => {
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
      console.log(data, "<<");
      // if (data) {
      //   console.log("1");
      //   dispatch(allOfficialLetterByLoggedIn());
    } catch (err) {
      console.error(err);
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

export const fetchReimbursementByLoggedIn = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`${baseUrl}/reimburse-letter/${id}`, {
        headers: {
          access_token: await AsyncStorage.getItem("access_token"),
        },
      });
      dispatch(fetchReimbursementByLoggedInSuccess(data));
    } catch (err) {
      console.log(err);
    }
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

export const fetchUserDetailSuccess = (payload) => {
  return {
    type: FETCH_USER_DETAIL,
    payload,
  };
};
export const getUserDetail = () => {
  return async (dispatch, getState) => {
    try {
      // console.log(await AsyncStorage.getItem("access_token"));
      let { data } = await axios.get(`${baseUrl}/logged-in-user`, {
        headers: {
          access_token: await AsyncStorage.getItem("access_token"),
        },
      });
      dispatch(fetchUserDetailSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};
