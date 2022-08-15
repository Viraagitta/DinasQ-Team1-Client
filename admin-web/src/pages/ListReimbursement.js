import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReimbursementTableRow from "../components/ReimbursementTableRow";
import { fetchAllReimbursement } from "../store/action";
import User from "../assets/user.jpg";
export default function ListReimbursement() {
  const dispatch = useDispatch();
  const reimbursements = useSelector((state) => state.reimburse.reimbursements);
  // console.log(reimbursements, "<<<");
  const [Category, SetCategory] = useState("All");
  const [LocalReimburse, SetLocalReimburse] = useState([]);
  useEffect(() => {
    dispatch(fetchAllReimbursement());
  }, []);

  useEffect(() => {
    SetLocalReimburse(reimbursements);
  }, [reimbursements]);
  useEffect(() => {
    if (Category !== "All") {
      const filteredReimburse = reimbursements.filter(
        (reimbursements) => reimbursements.category === Category
      );
      SetLocalReimburse(filteredReimburse);
    } else {
      SetLocalReimburse(reimbursements);
    }
  }, [Category]);
  console.log(LocalReimburse, "<<<");
  return (
    <>
      {reimbursements.length ? (
        <div className="main">
          <div className="nav">
            <h2>ALL REIMBURSEMENT</h2>
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
            <form>
              <select
                name="filterEmployees"
                id="filterEmployeed"
                className="filter-employees"
                value={Category}
                onChange={(e) => SetCategory(e.target.value)}
              >
                <option value="" selected disabled>
                  Category
                </option>
                <option value={"All"}>All</option>
                <option value={"Transport"}>Transport</option>
                <option value={"Accomodation"}>Accomodation</option>
                <option value={"Entertaint"}>Entertaint</option>
                <option value={"Others"}>Others</option>
              </select>
            </form>
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
              {LocalReimburse.map((reimburse, i) => {
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
