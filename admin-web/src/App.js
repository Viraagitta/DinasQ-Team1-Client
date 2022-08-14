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
function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthDash>
              <LoginPage />
            </AuthDash>
          }
        />
        <Route
          path="/home"
          element={
            <AuthDash>
              <Dashboard />
            </AuthDash>
          }
          // >
          //   <Route
          //     path="/officialletters/:id"
          //     element={
          //       <AuthReimburse>
          //         <ListOfficialLetter />
          //       </AuthReimburse>
          //     }
        />
        {/* </Route> */}

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
        >
          <Route
            path="/officialletters/:id"
            element={
              <AuthReimburse>
                <ListReimbursement />
              </AuthReimburse>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
