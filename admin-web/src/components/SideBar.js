import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      {localStorage.getItem("access_token") ? (
        <div class="navigation">
          <ul>
            <li>
              <a href="">
                <span class="icon">
                  <ion-icon name="car-outline"></ion-icon>
                </span>
                <span class="title">DinasQ</span>
              </a>
            </li>
            <li>
              <Link to="/">
                <span class="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="title">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/employees">
                <span class="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span class="title">Employees</span>
              </Link>
            </li>
            <li>
              <Link to="/reimbursements">
                <span class="icon">
                  <ion-icon name="documents-outline"></ion-icon>
                </span>
                <span class="title">Reimbursements</span>
              </Link>
            </li>
            <li>
              <a href="">
                <span class="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span class="title">Message</span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
