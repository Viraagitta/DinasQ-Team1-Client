import User from "../assets/user.jpg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import EmployeesTableRow from "../components/EmployeesTableRow";
import { detailsUser } from "../store/action";
import OfficialLetterCard from "../components/OfficialLetterCard";
export default function DetailsUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userDetails = useSelector((state) => state.user.details);
  console.log(userDetails);
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
        <div className="nav">
          <h2
            style={{
              color: "#77B032",
              fontWeight: "bold",
            }}
          >
            {`${userDetails.firstName} ${userDetails.lastName}`}
          </h2>
          <div className="employees">
            <img src={User} alt="" />
          </div>
        </div>
        <h4
          style={{
            color: "#77B032",
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          {userDetails.position}
        </h4>
        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>
        <div className="list-action">
          <div className="action">
            <ion-icon name="mail-outline"></ion-icon>
            <p className="title">{userDetails.email}</p>
          </div>
          <div className="action">
            <ion-icon name="call-outline"></ion-icon>
            <p className="title">{userDetails.phoneNumber}</p>
          </div>
          <div className="action">
            <ion-icon name="location-outline"></ion-icon>
            <p className="title">{userDetails.address}</p>
          </div>
          <div className="action">
            <ion-icon name="calendar-outline"></ion-icon>
            <p className="title">
              Join Date:{" "}
              {userDetails.createdAt
                ? new Date(userDetails.createdAt).toISOString().slice(0, 10)
                : null}
            </p>
          </div>
        </div>
        <div className="details">
          <div
            style={{
              marginTop: "2em",
              width: "73em",
              boxShadow: "0 7px 25px rgba(16, 14, 14, 0.08)",
              backgroundColor: "var(--white)",
            }}
          >
            <div
              style={{
                color: "var(--green)",
                padding: "15px",
                marginLeft: "15px",
              }}
            >
              <h2>All {userDetails.firstName}'s Official Letters</h2>
            </div>
            {userDetails.OfficialLetters?.length !== 0 ? (
              <table
                style={{
                  marginTop: "2em",
                  width: "72em",
                  marginLeft: "15px",
                  boxShadow: "0 7px 25px rgba(16, 14, 14, 0.08)",
                  backgroundColor: "var(--white)",
                  marginBottom: "10px",
                }}
              >
                <thead>
                  <tr>
                    <th>No </th>
                    <th>Activity Name</th>
                    <th>Departure</th>
                    <th>Destination</th>
                    <th>Leave Date</th>
                    <th>Return Date</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails.OfficialLetters?.map((officialLetter, i) => {
                    return (
                      <OfficialLetterCard
                        key={(officialLetter.id, i)}
                        officialLetter={officialLetter}
                        i={i}
                      />
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div style={{ margin: "auto" }}>
                <img
                  src={
                    "https://eperformance.bsn.go.id/assets/img/empty-data.png"
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
