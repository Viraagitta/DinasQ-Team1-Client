import logo from "./logo.svg";
import "./assets/Style.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListEmployees from "./pages/ListEmployees";
import ListReimbursement from "./pages/ListReimbursement";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar";
import ListOfficialLetter from "./pages/ListOfficialLetter";
function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/employees" element={<ListEmployees />} />
        <Route path="/reimbursements" element={<ListReimbursement />} />
        <Route path="/officialletters" element={<ListOfficialLetter />} />
      </Routes>
    </>
  );
}

export default App;
