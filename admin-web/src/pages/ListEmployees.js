import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EmployeesTableRow from "../components/EmployeesTableRow";
import { fetchEmployees } from "../store/action";
export default function ListEmployees() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users, "<dari list");
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
        <Link to="/newUser" className="action">
          <ion-icon name="person-add-outline" class="icon"></ion-icon>
          <p className="title">add</p>
        </Link>
      </div>
      <table className="list-employees">
        <thead className="heading-table-employees">
          <tr>
            <th></th>
            <th>ID :</th>
            <th>Name :</th>
            <th>Position :</th>
            <th>Department :</th>
            <th>Email :</th>
            <th>Experience :</th>
            <th>Status :</th>
          </tr>
        </thead>
        <tbody>
          {users.map((employee, i) => {
            return (
              <EmployeesTableRow
                key={(employee.id, i)}
                employee={employee}
                i={i}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
