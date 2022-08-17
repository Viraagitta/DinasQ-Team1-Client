import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import OfficialLetterCard from "../components/OfficialLetterCard";
import { fetchAllofficialLetters } from "../store/action";

export default function ListOfficialLetter() {
  const dispatch = useDispatch();
  const officialLetters = useSelector((state) => state.letter.officialLetters);
  useEffect(() => {
    dispatch(fetchAllofficialLetters(page));
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  console.log(searchParams.get("page"));

  const [status, SetStatus] = useState("All");
  const [checked, setChecked] = useState();

  const [LocalLetters, SetLocalLetters] = useState([]);

  useEffect(() => {
    SetLocalLetters(officialLetters);
  }, [officialLetters]);

  useEffect(() => {
    if (status !== "All") {
      const filteredStatus = officialLetters.filter(
        (officialLetters) => officialLetters.status === status
      );
      SetLocalLetters(filteredStatus);
    } else {
      SetLocalLetters(officialLetters);
    }
  }, [status]);
  console.log(officialLetters);
  return (
    <>
      {officialLetters.length ? (
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
                    <th>Created At</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {LocalLetters.map((officialLetter, i) => {
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
