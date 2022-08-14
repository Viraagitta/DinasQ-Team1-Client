import { Navigate } from "react-router-dom";
import ListReimbursement from "../pages/ListReimbursement";

function AuthReimburse() {
  const token = localStorage.getItem("access_token");
  // const role = localStorage.getItem("role");

  // console.log(token, "<auth");
  // if (role === "admin") {
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return <ListReimbursement />;
}
// }

export default AuthReimburse;
