import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import OfficialLetterCard from "../components/OfficialLetterCard";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import io from "socket.io-client";

import { fetchAllofficialLetters } from "../store/action";

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

export default function ListOfficialLetter() {
  const dispatch = useDispatch();
  const socket = io("http://localhost:3000", {
    extraHeaders: {
      access_token: localStorage.getItem("access_token"),
    },
  });
  const officialLetters = useSelector((state) => state.letter.officialLetters);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const [status, SetStatus] = useState("All");

  useEffect(() => {
    dispatch(fetchAllofficialLetters(page));
  }, [page]);

  useEffect(() => {
    socket.on("update-list-letter", () => {
      dispatch(fetchAllofficialLetters(page));
    });

    return () => {
      socket.off("update-list-letter");
    };
  }, []);

  return (
    <>
      {officialLetters.rows.length ? (
        <div className="main">
          <div className="nav cardHeader">
            <h2
              style={{
                color: "#77B032",
                fontWeight: "bold",
              }}
            >
              ALL OFFICIAL LETTERS
            </h2>
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>
          <div className="list-action">
            <form style={{ marginLeft: 20 }}>
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
              {/* <select
                name="filterEmployees"
                id="filterEmployeed"
                className="filter-employees"
                value={status}
                onChange={(e) => SetStatus(e.target.value)}
              >
                <option value="" selected disabled>
                  status
                </option>
                <option value={"All"}>All</option>
                <option value={"pending"}>pending</option>
                <option value={"approved"}>approved</option>
                <option value={"rejected"}>rejected</option>
              </select> */}
            </form>
          </div>
          <div className="details">
            <div class="listOfficialLetters">
              <table>
                <thead>
                  <tr>
                    <th>No </th>
                    <th>Activity Name</th>
                    <th>Departure</th>
                    <th>Destination</th>
                    <th>Leave Date</th>
                    <th>Return Date</th>
                    <th>Status</th>
                    <th>Updated By</th>
                    <th>Created At</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {officialLetters.rows
                    .filter((officialLetters) =>
                      status === "All"
                        ? true
                        : officialLetters.status === status
                    )
                    .map((officialLetter, i) => {
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
              <div style={{ marginTop: "25px" }}>
                <MyPaginate
                  breakLabel="..."
                  nextLabel="next"
                  onPageChange={({ selected }) => {
                    setSearchParams(`page=${selected + 1}`);
                  }}
                  pageRangeDisplayed={5}
                  pageCount={officialLetters.totalPages}
                  previousLabel="previous"
                  initialPage={page - 1}
                  renderOnZeroPageCount={null}
                />
              </div>
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
