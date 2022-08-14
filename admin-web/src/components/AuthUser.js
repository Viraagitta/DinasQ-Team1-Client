import { Navigate } from "react-router-dom";
import ListEmployees from "../pages/ListEmployees";

function AuthUser() {
  const token = localStorage.getItem("access_token");
  // const role = localStorage.getItem("role");

  // console.log(token, "<auth");
  // if (role === "admin") {
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return <ListEmployees />;
}
// }

export default AuthUser;
