import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../assets/Script";
export default function SideBar() {
  let list = document.querySelectorAll(".navigation li");
  function activeLink() {
    list.forEach((item) => item.classList.remove("hovered"));
    this.classList.add("hovered");
  }
  const navigate = useNavigate();
  list.forEach((item) => item.addEventListener("mouseover", activeLink));

  const toLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      {localStorage.getItem("access_token") ? (
        <div className="navigation">
          <ul>
            <li>
              <a href="">
                <span className="icon">
                  <ion-icon name="car-outline"></ion-icon>
                </span>
                <span className="title">DinasQ</span>
              </a>
            </li>
            <li>
              <Link to="/home">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/employees">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title">All Employees</span>
              </Link>
            </li>
            <li>
              <Link to="/officialletters">
                <span className="icon">
                  <ion-icon name="documents-outline"></ion-icon>
                </span>
                <span className="title">All Official Letters</span>
              </Link>
            </li>
            <li>
              <Link to="/reimbursements">
                <span className="icon">
                  <ion-icon name="documents-outline"></ion-icon>
                </span>
                <span className="title">All Reimbursements</span>
              </Link>
            </li>
            {/* <li>
              <a href="">
                <span className="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span className="title">Message</span>
              </a>
            </li> */}
            <li>
              <Link to="/" onClick={(e) => toLogout(e)}>
                <span className="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="title">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
