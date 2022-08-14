import logo from "./logo.svg";
import "./assets/Style.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListEmployees from "./pages/ListEmployees";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar";
import AddUserPage from "./pages/AddUserPage";
function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/employees" element={<ListEmployees />} />
        <Route path="/createUser" element={<AddUserPage />} />
      </Routes>
    </>
  );
}

export default App;
