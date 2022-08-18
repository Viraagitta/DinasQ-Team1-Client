import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReimbursementTableRow from "../components/ReimbursementTableRow";
import { fetchAllReimbursement } from "../store/action";
import io from "socket.io-client";
import User from "../assets/user.jpg";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import PaginationList from "../components/Pagination";
import { useSearchParams } from "react-router-dom";

const MyPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: "active", // default to "disabled"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
export default function ListReimbursement() {
  const dispatch = useDispatch();
  const reimbursements = useSelector((state) => state.reimburse.reimbursements);
  console.log(reimbursements.rows, "<<<");

  const socket = io("http://localhost:3000", {
    extraHeaders: {
      access_token: localStorage.getItem("access_token"),
    },
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    dispatch(fetchAllReimbursement(page));
  }, [page]);

  useEffect(() => {
    socket.on("update-list-reimbursement", () => {
      dispatch(fetchAllReimbursement(page));
    });

    return () => {
      socket.off("update-list-reimbursement");
    };
  }, []);

  // const [Category, SetCategory] = useState("All Category");
  // const [LocalReimburse, SetLocalReimburse] = useState([]);

  // useEffect(() => {
  //   SetLocalReimburse(reimbursements);
  // }, [reimbursements]);
  // useEffect(() => {
  //   if (Category !== "All Category") {
  //     const filteredReimburse = reimbursements.filter(
  //       (reimbursements) => reimbursements.category === Category
  //     );
  //     SetLocalReimburse(filteredReimburse);
  //   } else {
  //     SetLocalReimburse(reimbursements);
  //   }
  // }, [Category]);
  // console.log(LocalReimburse);

  const [status, SetStatus] = useState("All");

  // useEffect(() => {
  //   if (status !== "All") {
  //     const filteredStatus = reimbursements.filter(
  //       (reimbursement) => reimbursement.status === status
  //     );
  //     SetLocalReimburse(filteredStatus);
  //   } else {
  //     SetLocalReimburse(reimbursements);
  //   }
  // }, [status]);

  return (
    <>
      {reimbursements.rows.length ? (
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
              {/* <select
                name="filterEmployees"
                id="filterEmployeed"
                className="filter-employees"
                value={Category}
                onChange={(e) => SetCategory(e.target.value)}
              >
                <option value="" selected disabled>
                  Category
                </option>
                <option value={"All Category"}>All Category</option>
                <option value={"Transport"}>Transport</option>
                <option value={"Accomodation"}>Accomodation</option>
                <option value={"Entertaint"}>Entertaint</option>
                <option value={"Others"}>Others</option>
              </select> */}
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

          <div className="list-employees">
            <table
              style={{
                marginTop: "2em",
                width: "72em",
                boxShadow: "0 7px 25px rgba(16, 14, 14, 0.08)",
                backgroundColor: "var(--white)",
              }}
            >
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
                {reimbursements.rows
                  .filter((reimbursements) =>
                    status === "All" ? true : reimbursements.status === status
                  )
                  .map((reimburse, i) => {
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
            <div style={{ marginTop: "25px" }}>
              <MyPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={({ selected }) => {
                  setSearchParams(`page=${selected + 1}`);
                }}
                pageRangeDisplayed={5}
                pageCount={reimbursements.totalPages}
                previousLabel="previous"
                initialPage={page - 1}
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
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
