import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../store/action";
export default function ListEmployees() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  return (
    <div className="main">
      <div className="nav">
        <h2>Employees</h2>
      </div>
      <div class="search">
        <label>
          <input type="text" placeholder="Search here" />
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </div>
      <div class="list-action">
        <div className="action">
          <ion-icon name="pencil-outline" class="icon"></ion-icon>
          <p class="title">Edit</p>
        </div>
        <div className="action">
          <ion-icon name="trash-outline" class="icon"></ion-icon>
          <p class="title">Delete</p>
        </div>
      </div>
      <table class="list-employees">
        <thead class="heading-table-employees">
          <th></th>
          <th>ID :</th>
          <th>Name :</th>
          <th>Position :</th>
          <th>Department :</th>
          <th>Email :</th>
          <th>Experience :</th>
          <th>Status :</th>
        </thead>
        <tbody>
          {employees.map((e, i) => {
            return (
              <tr class="data-employees">
                <td class="employees-details">
                  <input type="checkbox" name="checkUser" id="checkUser" />
                </td>
                <td class="employees-details">{i + 1}</td>
                <td class="employees-details">{`${e.firstName} ${e.lastName}`}</td>
                <td class="employees-details">{e.position}</td>
                <td class="employees-details">IT</td>
                <td class="employees-details">maguire@mail.com</td>
                <td class="employees-details">1 year</td>
                <td class="employees-details">Full-time</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
