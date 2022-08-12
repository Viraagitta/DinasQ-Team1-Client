import logo from "./logo.svg";
import "./App.css";
import "./assets//SideBar.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  const access = localStorage.getItem("access_token");
  const isLoggedin = () => {
    if (access) {
      return (
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="car-outline"></ion-icon>
                </span>
                <span class="title">DinasQ</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span class="title">Employes</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span class="title">Message</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      );
    }
  };
  return (
    <>
      {isLoggedin()}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
