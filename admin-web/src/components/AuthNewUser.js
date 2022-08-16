import { Navigate } from "react-router-dom";
import AddUserPage from "../pages/AddUserPage";
function AuthNewUser() {
  const token = localStorage.getItem("access_token");
  // const role = localStorage.getItem("role");

  // console.log(token, "<auth");
  // if (role === "admin") {
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return <AddUserPage />;
}
// }

export default AuthNewUser;
