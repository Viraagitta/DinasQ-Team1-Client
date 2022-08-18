import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsUser } from "../store/action/index";
export default function DetailsUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.details);
  useEffect(() => {
    dispatch(detailsUser(id));
  }, []);
  return (
    <>
      <div className="main">
        <div className="cardDetails">
          <div className="topbar">
            <h2 id="welcome">
              {user.firstName} {user.lastName}
            </h2>
          </div>
          <p className="details-email">email: {user.email}</p>
          <p className="details-phoneNumber">
            phone Number: {user.phoneNumber}
          </p>
          <p className="details-address">address: {user.address}</p>
          <p className="details-position">position: {user.position}</p>

          <p className="activity">
            <b>Activity</b>
          </p>
          <table className="table-activity" border={"1px"}>
            <thead>
              <th>activityName</th>
              <th>from</th>
              <th>to</th>
              <th>leaveDate</th>
              <th>returnDate</th>
              <th>status</th>
              <th>updatedBy</th>
            </thead>
            <tbody>
              <tr>
                <td>{user.OfficialLetters[0].activityName}</td>
                <td>{user.OfficialLetters[0].from}</td>
                <td>{user.OfficialLetters[0].to}</td>
                <td>
                  {user.OfficialLetters[0].leaveDate.split("/").join("-")}
                </td>
                <td>
                  {user.OfficialLetters[0].returnDate.split("/").join("-")}
                </td>
                <td>{user.OfficialLetters[0].status}</td>
                <td>{user.OfficialLetters[0].updatedBy}</td>
              </tr>
            </tbody>
          </table>
          <p className="reimbursements">
            <b>Reimbursements</b>
          </p>
          <table className="table-reimbursements" border={"1px"}>
            <thead>
              <th>description</th>
              <th>cost</th>
              <th>image</th>
              <th>category</th>
              <th>status</th>
              <th>updatedBy</th>
              <th>createdAt</th>
            </thead>
            <tbody>
              <tr>
                <td>{user.OfficialLetters[0].Reimbursements[0].description}</td>
                <td>{user.OfficialLetters[0].Reimbursements[0].cost}</td>
                <td>
                  <button>View Image</button>
                </td>
                <td>{user.OfficialLetters[0].Reimbursements[0].category}</td>
                <td>{user.OfficialLetters[0].Reimbursements[0].status}</td>
                <td>{user.OfficialLetters[0].Reimbursements[0].updatedBy}</td>
                <td>{user.OfficialLetters[0].Reimbursements[0].createdAt}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="main">
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      </div> */}
    </>
  );
}
