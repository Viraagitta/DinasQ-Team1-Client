import User from "../assets/user.jpg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EmployeesTableRow from "../components/EmployeesTableRow";
import { fetchEmployees, deleteEmployees } from "../store/action";
export default function ListEmployees() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.user.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  return (
    <>
      {employees.length ? (
        <div className="main">
          <div className="nav">
            <h2>Employees</h2>
            <div className="employees">
              <img src={User} alt="" />
            </div>
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
            <select
              name="filterEmployees"
              id="filterEmployeed"
              className="filter-employees"
            >
              <option value="" selected disabled>
                Position
              </option>
              <option value="">tes2</option>
            </select>
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
                <th>Status :</th>
                <th>Action :</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, i) => {
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
      ) : (
        <div className="main">
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </>
  );
}
