import { Link, useNavigate } from "react-router-dom";
import Male from "../assets/undraw_male_avatar_323b.svg";
import Tree from "../assets/tree in vas.jpg";

export default function OfficialLetterCard({ officialLetter }) {
  const navigate = useNavigate();
  const getdetailsOfficialLetters = (e, id) => {
    e.preventDefault();
    navigate(`/officialletters/${id}`);
  };
  return (
    <>
      <tr onClick={(e) => getdetailsOfficialLetters(e, officialLetter.id)}>
        <td>{officialLetter.activityName}</td>
        <td>{officialLetter.leaveDate}</td>
        <td>{officialLetter.returnDate}</td>
        <td>{officialLetter.status}</td>
      </tr>

      <tr onClick={(e) => getdetailsOfficialLetters(e, officialLetter.id)}>
        <td>{officialLetter.activityName}</td>
        <td>{officialLetter.leaveDate}</td>
        <td>{officialLetter.returnDate}</td>
        <td>{officialLetter.status}</td>
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
