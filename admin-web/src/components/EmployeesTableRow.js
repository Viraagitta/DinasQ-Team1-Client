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
  const getDetails = (id) => {
    // e.preventDefault();
    dispatch(detailsUser(id));
    setTimeout(() => {
      navigate(`/user/${id}`);
    }, 2000);
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
            <ion-icon name="person-outline"></ion-icon>
          </Link>
          <Link
            to={`/updateUser/${employee.id}`}
            className="action"
            style={{ marginLeft: 30 }}
          >
            DELETE
          </button>
          <button
            onClick={() => getDetails(employee.id)}
            className="btn-details"
          >
            DETAILS
          </button>
          <button
            onClick={(e) => editUser(e, employee.id)}
            className="btn-update"
            <ion-icon name="create-outline"></ion-icon>
          </Link>
          <Link
            to="/employees"
            onClick={(e) => handleDelete(e, employee.id)}
            className="action"
            style={{ marginLeft: 30 }}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </Link>
        </td>
      </tr>
    </>
  );
}
