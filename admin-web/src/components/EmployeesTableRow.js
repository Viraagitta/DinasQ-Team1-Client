import { Link, useNavigate } from "react-router-dom";
import { deleteEmployees } from "../store/action";
import { useDispatch } from "react-redux";
import { detailsUser } from "../store/action/index";
export default function EmployeesTableRow({ employee, i }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteEmployees(id));
    navigate("/employees");
  };
  const getDetails = (e, id) => {
    e.preventDefault();
    dispatch(detailsUser(id));
    navigate(`/user/${id}`);
  };
  const editUser = (e, id) => {
    e.preventDefault();
    dispatch(detailsUser(id));
    setTimeout(() => {
      navigate(`/updateUser/${id}`);
    }, 2000);
  };
  return (
    <>
      <tr className="data-employees">
        <td className="employees-details">{i + 1}</td>
        <td className="employees-details">{`${employee.firstName} ${employee.lastName}`}</td>
        <td className="employees-details">{employee.position}</td>
        <td className="employees-details">{employee.email}</td>
        <td className="employees-details">{employee.phoneNumber}</td>
        <td className="employees-details">{employee.address}</td>

        <td>
          <Link to={`/user/${employee.id}`} className="action">
            <ion-icon
              name="person-outline"
              style={{ color: "#4E9F3D" }}
            ></ion-icon>
          </Link>
          <Link
            to={`/updateUser/${employee.id}`}
            className="action"
            style={{ marginLeft: 30 }}
          >
            <ion-icon
              name="create-outline"
              style={{ color: "#4E9F3D" }}
            ></ion-icon>
          </Link>
          <Link
            to="/employees"
            onClick={(e) => handleDelete(e, employee.id)}
            className="action"
            style={{ marginLeft: 30 }}
          >
            <ion-icon
              name="trash-outline"
              style={{ color: "#4E9F3D" }}
            ></ion-icon>
          </Link>
        </td>
      </tr>
    </>
  );
}
