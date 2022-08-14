import logo from "./logo.svg";
import "./assets/Style.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListEmployees from "./pages/ListEmployees";
import ListReimbursement from "./pages/ListReimbursement";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar";
import ListOfficialLetter from "./pages/ListOfficialLetter";
import AuthDash from "./components/AuthDash";
import AuthUser from "./components/AuthUser";
import AuthReimburse from "./components/AuthReimburse";
import AuthLetter from "./components/AuthLetter";
import ReimbursementByLetterId from "./pages/ReimbursementByLetterId";
import AddUserPage from "./pages/AddUserPage";
import AuthNewUser from "./components/AuthNewUser";
import AuthLogin from "./components/AuthLogin";
function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthLogin>
              <LoginPage />
            </AuthLogin>
          }
        />
        <Route
          path="/home"
          element={
            <AuthDash>
              <Dashboard />
            </AuthDash>
          }
        />
        <Route
          path="/newUser"
          element={
            <AuthNewUser>
              <AddUserPage />
            </AuthNewUser>
          }
        />
        <Route
          path="/employees"
          element={
            <AuthUser>
              <ListEmployees />
            </AuthUser>
          }
        />
        <Route
          path="/reimbursements"
          element={
            <AuthReimburse>
              <ListReimbursement />
            </AuthReimburse>
          }
        />
        <Route
          path="/officialletters"
          element={
            <AuthLetter>
              <ListOfficialLetter />
            </AuthLetter>
          }
        />

        <Route
          path="/officialletters/:id"
          element={
            // <AuthReimburse>
            <ReimbursementByLetterId />
            // </AuthReimburse>
          }
        />
      </Routes>
    </>
  );
}

export default App;
