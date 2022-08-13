export default function ReimbursementTableRow({ reimburse, i }) {
  return (
    <>
      <tr className="data-employees">
        <td className="employees-details">
          <input type="checkbox" name="checkUser" id="checkUser" />
        </td>
        <td className="employees-details">{i + 1}</td>
        <td className="employees-details">{reimburse.description}</td>
        <td className="employees-details">{reimburse.category}</td>
        <td className="employees-details">{reimburse.cost}</td>
        <td className="employees-details">
          <img className="img-reimburse" src={reimburse.image} alt="" />
        </td>
        <td className="employees-details">{reimburse.status}</td>
        <td className="employees-details">{reimburse.updatedBy}</td>
      </tr>
    </>
  );
}
