import { Link, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllofficialLetters,
  fetchAllReimbursement,
  fetchEmployees,
  getLocationUser,
  getUserLoggedIn,
} from "../store/action";
import User from "../assets/user.jpg";
import OfficialLetterCard from "../components/OfficialLetterCard";
import UserLocationsCard from "../components/UserLocationsCard";

import io from "socket.io-client";

export default function Dashboard() {
  const dispatch = useDispatch();
  const officialLetters = useSelector((state) => state.letter.officialLetters);
  const reimbursements = useSelector((state) => state.reimburse.reimbursements);
  const recentLocations = useSelector((state) => state.user.locationUser);

  const detailUser = useSelector((state) => state.user.detailUser);
  const employees = useSelector((state) => state.user.users);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  // console.log(searchParams.get("page"));
  // console.log(recentLocations, "><>");
  const socket = io("http://localhost:3000", {
    extraHeaders: {
      access_token: localStorage.getItem("access_token"),
    },
  });

  useEffect(() => {
    dispatch(getUserLoggedIn());
    dispatch(getLocationUser());
    dispatch(fetchAllofficialLetters());
    dispatch(fetchAllReimbursement());
    dispatch(fetchEmployees());
  }, []);

  console.log(recentLocations);

  useEffect(() => {
    console.log("ini dari socket");
    socket.on("connect", () => {
      console.log("test");
    });
    socket.on("update-list-letter", () => {
      dispatch(fetchAllofficialLetters());
    });

    return () => {
      socket.off("connect");
      socket.off("update-list-letter");
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="topbar">
          <div>
            <p
              id="welcome"
              style={{
                marginBottom: 10,
                color: "#77B032",
                fontWeight: "bold",
              }}
            >
              WELCOME TO DINASQ
            </p>
            <p id="under-welcome">
              Hello {detailUser?.firstName}, Welcome Back
            </p>
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <div className="user">
            <img src={User} alt="user" />
          </div>
        </div>

        <div class="cardBox">
          <Link to="/officialletters" class="card">
            <div>
              <div class="numbers">{officialLetters.rows.length}</div>
              <div class="cardName">Official Letters</div>
            </div>
            <div class="iconBox">
              <ion-icon name="newspaper-outline"></ion-icon>
            </div>
          </Link>
          <Link to="/reimbursements" class="card">
            <div>
              <div class="numbers">{reimbursements.length}</div>
              <div class="cardName">Reimbursements</div>
            </div>
            <div class="iconBox">
              <ion-icon name="cash-outline"></ion-icon>
            </div>
          </Link>
          <Link to="/employees" class="card">
            <div>
              <div class="numbers">{employees.length}</div>
              <div class="cardName">Employees</div>
            </div>
            <div class="iconBox">
              <ion-icon name="people-outline"></ion-icon>
            </div>
          </Link>
          <Link to="/newUser" class="card">
            <div>
              <div class="numbers">+</div>
              <div class="cardName">Add Employees</div>
            </div>
            <div class="iconBox">
              <ion-icon name="person-add-outline"></ion-icon>
            </div>
          </Link>
        </div>
        <div className="details">
          <div class="listOfficialLetters">
            <div class="cardHeader">
              <h2>List Official letters</h2>
              <Link to="/officialletters" class="btn">
                View All
              </Link>
            </div>
            <table>
              <thead>
                <tr>
                  <th>No</th>
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
                {officialLetters.rows.map((officialLetter, i) => {
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
          <div class="recentLocations">
            <div class="cardHeader">
              <h2>Recent Location</h2>
            </div>
            <table>
              <tr>
                {recentLocations.map((locations) => {
                  return (
                    <UserLocationsCard
                      key={locations.id}
                      locations={locations}
                      // i={i}
                    />
                  );
                })}
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
