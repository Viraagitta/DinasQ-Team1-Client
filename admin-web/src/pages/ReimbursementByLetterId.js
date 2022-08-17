import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReimbursementTableRow from "../components/ReimbursementTableRow";
import {
  allReimbursementByOfficialLetterId,
  fetchAllofficialLetters,
} from "../store/action";
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

  // const officialLetters = useSelector((state) => state.letter.officialLetters);
  // useEffect(() => {
  //   dispatch(fetchAllofficialLetters());
  // }, []);
  // console.log(officialLetters);

  return (
    <div className="main">
      <div className="nav">
        <h2>{reimbursementByOfficalLetterId.activityName}</h2>
      </div>
      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </div>
      <div className="list-action">
        <div className="action">
          <ion-icon name="navigate-outline"></ion-icon>
          <p className="title">
            Departure: {reimbursementByOfficalLetterId.from}
          </p>
        </div>
        <div className="action">
          <ion-icon name="location-outline"></ion-icon>
          <p className="title">
            Destination: {reimbursementByOfficalLetterId.to}
          </p>
        </div>
        <div className="action">
          <ion-icon name="calendar-outline"></ion-icon>
          <p className="title">
            Period: {reimbursementByOfficalLetterId.leaveDate} -{" "}
            {reimbursementByOfficalLetterId.returnDate}
          </p>
        </div>
        <div className="action">
          <ion-icon name="calendar-outline"></ion-icon>
          <p className="title">
            Created At:{" "}
            {reimbursementByOfficalLetterId.createdAt
              ? new Date(reimbursementByOfficalLetterId.createdAt)
                  .toISOString()
                  .slice(0, 10)
              : null}
          </p>
        </div>
        <div className="action">
          <ion-icon name="alert-outline"></ion-icon>
          <p className="title">
            Status: {reimbursementByOfficalLetterId.status}
          </p>
        </div>
      </div>
      {/* <div style={{ color: "var(--green)" }}> */}
      <div className="list-employees">
        <h2
          style={{
            color: "var(--green)",
            paddingTop: "20px",
            marginLeft: "15px",
          }}
        >
          List of Reimbursement related to{" "}
          {reimbursementByOfficalLetterId.activityName}
        </h2>
        {reimbursementByOfficalLetterId.Reimbursements?.length !== 0 ? (
          <table
            style={{
              marginTop: "2em",
              width: "73em",
              boxShadow: "0 7px 25px rgba(16, 14, 14, 0.08)",
              backgroundColor: "var(--white)",
            }}
          >
            <thead className="heading-table-employees">
              <tr>
                <th>No</th>
                <th>Description</th>
                <th>Category</th>
                <th>Cost</th>
                <th>Receipt / Bill</th>
                <th>Status</th>
                <th>Updated By</th>
                <th>Updated At</th>
                <th>Download</th>
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
        ) : (
          <div style={{ margin: "auto", alignSelf: "center" }}>
            <img
              src={"https://eperformance.bsn.go.id/assets/img/empty-data.png"}
            />
          </div>
        )}
      </div>
    </div>
  );
}
