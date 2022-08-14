import { Navigate } from "react-router-dom";
import ListOfficialLetter from "../pages/ListOfficialLetter";

function AuthLetter() {
  const token = localStorage.getItem("access_token");
  // const role = localStorage.getItem("role");

  // console.log(token, "<auth");
  // if (role === "admin") {
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return <ListOfficialLetter />;
}
// }

export default AuthLetter;
