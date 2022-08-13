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
      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </div>
      <div className="list-action">
        <div className="action">
          <ion-icon name="pencil-outline" className="icon"></ion-icon>
          <p className="title">Edit</p>
        </div>
        <div className="action">
          <ion-icon name="trash-outline" className="icon"></ion-icon>
          <p className="title">Delete</p>
        </div>
      </div>
      <table className="list-employees">
        <thead className="heading-table-employees">
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
              <tr className="data-employees">
                <td className="employees-details">
                  <input type="checkbox" name="checkUser" id="checkUser" />
                </td>
                <td className="employees-details">{i + 1}</td>
                <td className="employees-details">{`${e.firstName} ${e.lastName}`}</td>
                <td className="employees-details">{e.position}</td>
                <td className="employees-details">IT</td>
                <td className="employees-details">maguire@mail.com</td>
                <td className="employees-details">1 year</td>
                <td className="employees-details">Full-time</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
