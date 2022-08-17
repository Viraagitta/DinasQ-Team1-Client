import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReimbursementTableRow from "../components/ReimbursementTableRow";
import { fetchAllReimbursement } from "../store/action";
import io from "socket.io-client";
import User from "../assets/user.jpg";
import Pagination from "../components/Pagination";
import PaginationList from "../components/Pagination";

export default function ListReimbursement() {
  const dispatch = useDispatch();
  const reimbursements = useSelector((state) => state.reimburse.reimbursements);
  // console.log(reimbursements, "<<<");

  const socket = io("http://localhost:3000", {
    extraHeaders: {
      access_token: localStorage.getItem("access_token"),
    },
  });
  useEffect(() => {
    dispatch(fetchAllReimbursement());
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      // setIsConnected(true);
      console.log("test");
    });
    socket.on("update-list-reimbursement", () => {
      dispatch(fetchAllReimbursement());
    });

    return () => {
      socket.off("connect");
      socket.off("update-list-reimbursement");
    };
  }, []);

  const [Category, SetCategory] = useState("All Category");
  const [LocalReimburse, SetLocalReimburse] = useState([]);

  useEffect(() => {
    SetLocalReimburse(reimbursements);
  }, [reimbursements]);
  useEffect(() => {
    if (Category !== "All Category") {
      const filteredReimburse = reimbursements.filter(
        (reimbursements) => reimbursements.category === Category
      );
      SetLocalReimburse(filteredReimburse);
    } else {
      SetLocalReimburse(reimbursements);
    }
  }, [Category]);
  console.log(LocalReimburse);

  const [status, SetStatus] = useState("All");
  const [checked, setChecked] = useState();

  useEffect(() => {
    if (status !== "All") {
      const filteredStatus = reimbursements.filter(
        (reimbursement) => reimbursement.status === status
      );
      SetLocalReimburse(filteredStatus);
    } else {
      SetLocalReimburse(reimbursements);
    }
  }, [status]);

  return (
    <>
      {reimbursements.length ? (
        <div className="main">
          <div className="nav cardHeader">
            <h2
              style={{
                color: "#77B032",
                fontWeight: "bold",
              }}
            >
              ALL REIMBURSEMENTS
            </h2>
            <div className="employees">
              <img src={User} alt="" />
            </div>
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>
          <div className="list-action">
            <form style={{ marginLeft: 20 }}>
              <select
                name="filterEmployees"
                id="filterEmployeed"
                className="filter-employees"
                value={Category}
                onChange={(e) => SetCategory(e.target.value)}
              >
                <option value="" selected disabled>
                  Category
                </option>
                <option value={"All Category"}>All</option>
                <option value={"Transport"}>Transport</option>
                <option value={"Accomodation"}>Accomodation</option>
                <option value={"Entertaint"}>Entertaint</option>
                <option value={"Others"}>Others</option>
              </select>
              <div style={{ marginTop: "10px" }}>
                <label style={{ margin: "10px" }}>
                  <input
                    type="checkbox"
                    name="All"
                    value={"All"}
                    onChange={(e) => SetStatus(e.target.value)}
                  />
                  All List
                </label>
                <label style={{ margin: "10px" }}>
                  <input
                    type="checkbox"
                    name="pending"
                    value={"pending"}
                    onChange={(e) => SetStatus(e.target.value)}
                  />
                  Pending
                </label>
                <label style={{ margin: "10px" }}>
                  <input
                    type="checkbox"
                    name="approved"
                    value={"approved"}
                    onChange={(e) => SetStatus(e.target.value)}
                  />
                  Approved
                </label>
                <label style={{ margin: "10px" }}>
                  <input
                    type="checkbox"
                    name="rejected"
                    value={"rejected"}
                    // checked="false"
                    onChange={(e) => SetStatus(e.target.value)}
                  />
                  Rejected
                </label>
              </div>
            </form>
          </div>
          <table className="list-employees">
            <thead className="heading-table-employees">
              <tr>
                <th>No</th>
                <th>Description</th>
                <th>Category</th>
                <th>Cost</th>
                <th>Receipt / Bill</th>
                <th>Status</th>
                <th>Updated By</th>
                <th>Updated At</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {LocalReimburse.map((reimburse, i) => {
                return (
                  <ReimbursementTableRow
                    key={(reimburse.id, i)}
                    reimburse={reimburse}
                    i={i}
                  />
                );
              })}
            </tbody>
            {/* <PaginationList /> */}
          </table>
        </div>
      ) : (
        <div className="main">
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </>
  );
}
