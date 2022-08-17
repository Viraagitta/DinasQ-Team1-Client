import { Link } from "react-router-dom";
import Male from "../assets/undraw_male_avatar_323b.svg";
import Tree from "../assets/tree in vas.jpg";
import User from "../assets/user.jpg";

export default function UserLocationsCard({ locations }) {
  console.log(locations);
  return (
    <>
      <tr>
        <td width="60px">
          <div class="user">
            <img src={User} alt="" />
          </div>
        </td>
        <td>
          <h4
          // style={{ padding: "10px" }}
          >{`${locations.User?.firstName} ${locations.User?.lastName}`}</h4>
        </td>
        <td style={{ padding: "10px" }}>{locations.cityName}</td>
      </tr>
    </>
  );
}
