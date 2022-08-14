import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReimbursementTableRow from "../components/ReimbursementTableRow";
import { allReimbursementByOfficialLetterId } from "../store/action";
export default function ReimbursementByLetterId() {
  // const {loading} =
  const { id } = useParams();
  // console.log(id, "<<<<id");
  const dispatch = useDispatch();
  const reimbursementByOfficalLetterId = useSelector(
    (state) => state.letter.reimbursementByOfficalLetterId
  );
  // console.log(reimbursementByOfficalLetterId, "<<<");
  useEffect(() => {
    dispatch(allReimbursementByOfficialLetterId(id));
  }, []);

  return (
    <div className="main">
      <div className="nav">
        <h2>ALL REIMBURSEMENT BY ID</h2>
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
          {reimbursementByOfficalLetterId.Reimbursements?.map(
            (reimburse, i) => {
              return (
                <ReimbursementTableRow
                  key={(reimburse.id, i)}
                  reimburse={reimburse}
                  i={i}
                />
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}