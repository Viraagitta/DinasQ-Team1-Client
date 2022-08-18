import { useNavigate } from "react-router-dom";
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
        <td className="employees-details">
          <input type="checkbox" name="checkUser" id="checkUser" />
        </td>
        <td className="employees-details">{i + 1}</td>
        <td className="employees-details">{`${employee.firstName} ${employee.lastName}`}</td>
        <td className="employees-details">{employee.position}</td>
        <td className="employees-details">IT</td>
        <td className="employees-details">{employee.email}</td>
        <td className="employees-details">Full-time</td>
        <td>
          <button
            onClick={(e) => handleDelete(e, employee.id)}
            className="btn-delete"
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
          >
            UPDATE
          </button>
        </td>
      </tr>
    </>
  );
}
