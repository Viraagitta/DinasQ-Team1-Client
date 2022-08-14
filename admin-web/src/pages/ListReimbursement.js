import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReimbursementTableRow from "../components/ReimbursementTableRow";
import { fetchAllReimbursement } from "../store/action";
export default function ListReimbursement() {
  const dispatch = useDispatch();
  const reimbursements = useSelector((state) => state.reimburse.reimbursements);
  // console.log(reimbursements, "<<<");
  useEffect(() => {
    dispatch(fetchAllReimbursement());
  }, []);

  return (
    <div className="main">
      <div className="nav">
        <h2>ALL REIMBURSEMENT</h2>
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
          <tr>
            <th></th>
            <th>No</th>
            <th>Description</th>
            <th>Category</th>
            <th>Cost</th>
            <th>Receipt / Bill</th>
            <th>Status</th>
            <th>Updated By</th>
          </tr>
        </thead>
        <tbody>
          {reimbursements.map((reimburse, i) => {
            return (
              <ReimbursementTableRow
                key={(reimburse.id, i)}
                reimburse={reimburse}
                i={i}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
