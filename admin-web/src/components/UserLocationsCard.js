import User from "../assets/user.jpg";

export default function UserLocationsCard({ locations }) {
  // console.log(locations);
  return (
    <>
      <tr>
        <td width="60px">
          <div class="user">
            <img src={User} alt="" />
          </div>
        </td>
        <td>
          <h4>{`${locations.User?.firstName} ${locations.User?.lastName}`}</h4>
        </td>
        <td style={{ padding: "10px" }}>{locations.cityName}</td>
      </tr>
    </>
  );
}
