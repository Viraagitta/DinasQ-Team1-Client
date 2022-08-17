import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllofficialLetters, getLocationUser } from "../store/action";
import User from "../assets/user.jpg";
import OfficialLetterCard from "../components/OfficialLetterCard";
import io from "socket.io-client";

export default function Dashboard() {
  const dispatch = useDispatch();
  const officialLetters = useSelector((state) => state.letter.officialLetters);
  const recentLocations = useSelector((state) => state.user.locationUser);

  console.log(recentLocations, "><>");
  const socket = io("http://localhost:3000", {
    extraHeaders: {
      access_token: localStorage.getItem("access_token"),
    },
  });

  useEffect(() => {
    dispatch(fetchAllofficialLetters());
    dispatch(getLocationUser());
  }, []);

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
            <p id="welcome">Welcome to DinasQ</p>
            <p id="under-welcome">Hello admin, welcome back</p>
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
          <Link to="/reimbursements" class="card">
            <div>
              <div class="numbers">504</div>
              <div class="cardName">Reimbursements</div>
            </div>
            <div class="iconBox">
              <ion-icon name="cash-outline"></ion-icon>
            </div>
          </Link>
          <Link to="/employees" class="card">
            <div>
              <div class="numbers">80</div>
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
          <Link to="/officialletters" class="card">
            <div>
              <div class="numbers">842</div>
              <div class="cardName">Official Letters</div>
            </div>
            <div class="iconBox">
              <ion-icon name="newspaper-outline"></ion-icon>
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
                  <th>Activity Name</th>
                  <th>leaveDate</th>
                  <th>returnDate</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {officialLetters.map((officialLetter) => {
                  return (
                    <OfficialLetterCard
                      key={officialLetter.id}
                      officialLetter={officialLetter}
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
                <td width="60px">
                  <div class="user">
                    <img src={User} alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Harry<span> Maguire</span>
                  </h4>
                </td>
                <td>Kota Jakarta Pusat</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
