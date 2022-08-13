export default function EmployeesTableRow({ employee, i }) {
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
        <td className="employees-details">maguire@mail.com</td>
        <td className="employees-details">1 year</td>
        <td className="employees-details">Full-time</td>
      </tr>
    </>
  );
}
