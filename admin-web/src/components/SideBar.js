import { Link } from "react-router-dom";

export default function SideBar() {
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
              <Link to="/">
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
                <span className="title">Employees</span>
              </Link>
            </li>
            <li>
              <Link to="/reimbursements">
                <span className="icon">
                  <ion-icon name="documents-outline"></ion-icon>
                </span>
                <span className="title">Reimbursements</span>
              </Link>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span className="title">Message</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
