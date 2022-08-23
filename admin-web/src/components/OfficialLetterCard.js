import { Link } from "react-router-dom";
import Male from "../assets/undraw_male_avatar_323b.svg";
import Tree from "../assets/tree in vas.jpg";
import { fetchAllofficialLetters, updateStatusLetter } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function OfficialLetterCard({ officialLetter, i }) {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const [choice, setChoice] = useState({
    status: "",
  });
  const handleStatus = (e) => {
    const { name, value } = e.target;

    const getFrom = {
      status: choice.status,
    };
    getFrom[name] = value;
    setChoice(getFrom);
    const getFilter = users.filter(
      (elements) => officialLetter.UserId === elements.id
    );
    dispatch(updateStatusLetter(value, officialLetter.id, getFilter));
  };

  return (
    <>
      <tr>
        <td>{i + 1} </td>
        <td>{officialLetter.activityName}</td>
        <td>{officialLetter.from}</td>
        <td>{officialLetter.to}</td>
        <td>{officialLetter.leaveDate}</td>
        <td>{officialLetter.returnDate}</td>
        <td className="employees-details">
          <select
            name="status"
            id="status"
            // value={choice.status}
            className="status-letters"
            onChange={handleStatus}
            defaultValue={officialLetter.status}
          >
            <option value="pending">pending</option>
            <option value="approved">approved</option>
            <option value="rejected">rejected</option>
          </select>
        </td>
        <td>{new Date(officialLetter.createdAt).toISOString().slice(0, 10)}</td>
        <td>{officialLetter.updatedBy}</td>
        <td>
          <Link
            to={`/officialletters/${officialLetter.id}`}
            className="action"
            style={{ marginLeft: 30 }}
          >
            <ion-icon
              name="document-attach-outline"
              style={{ color: "var(--green)" }}
            ></ion-icon>
          </Link>
        </td>
      </tr>

      {/* <Link to={`/officialletters/${officialLetter.id}`}>
        <div className="card">
          <div>
            <img src={Tree} alt="img-official-letters" />
            <div className="cardName">{officialLetter.activityName}</div>
          </div>
        </div>
      </Link> */}
    </>
  );
}
