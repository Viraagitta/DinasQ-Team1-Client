import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CREATE_OFFICIAL_LETTERS,
  CREATE_REIMBURSEMENT,
  FETCH_OFFICIAL_LETTERS_BY_USERID,
  LOGIN_STAFF,
} from "./actionType";
import axios from "axios";
const baseUrl = "http://192.168.100.13:3000";
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_STAFF,
    payload,
  };
};

export const loginStaff = (credential, callback = () => {}) => {
  // console.log(credential, "<<<");
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(`${baseUrl}/login`, {
        email: credential.email,
        password: credential.password,
      });
      // console.log(data, "<<");
      if (data.access_token) {
        const access_token = data.access_token;
        await AsyncStorage.setItem("access_token", access_token);
        callback();
      }
    } catch (err) {
      console.error(err);
    }
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
  console.log(credential, "<<cre");
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(
        `${baseUrl}/reimbursements`,
        {
          OfficialLetterId: credential.OfficialLetterId,
          description: credential.description,
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
      console.log(data, "<<");
      dispatch(fetchUserdetailSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};
// export const updateUserSuccess = (payload) => {
//   return {
//     type: EDIT_USER_DETAIL,
//     payload,
//   };
// };
// export const updateUser = (id, update) => {
//   return async (dispatch, getState) => {
//     try {
//       let { data } = await axios.put(
//         `${baseUrl}/users/${id}`,
//         {
//           password: update.password,
//         },
//         {
//           headers: {
//             access_token: AsyncStorage.getItem("access_token"),
//           },
//         }
//       );
//       // console.log(data, "<<");
//       // dispatch(fetchEmployees());
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// export const fetchListReimbursementByOfficialLetterIdSuccess = (payload) => {
//   return {
//     type: FETCH_LIST_REIMBURSEMENT_BY_OFFICIALLETTERID,
//     payload,
//   };
// };
// export const allReimbursementByOfficialLetterId = (id) => {
//   return async (dispatch, getState) => {
//     try {
//       let { data } = await axios.get(`${baseUrl}/officialletters/${id}`, {
//         headers: {
//           access_token: AsyncStorage.getItem("access_token"),
//         },
//         params: { page: getState, size: 10 },
//       });
//       console.log(data, "<<");
//       dispatch(fetchListReimbursementByOfficialLetterIdSuccess(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
