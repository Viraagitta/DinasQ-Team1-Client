import { Link } from "react-router-dom";
import Male from "../assets/undraw_male_avatar_323b.svg";
import Tree from "../assets/tree in vas.jpg";

export default function OfficialLetterCard({ officialLetter }) {
  return (
    <>
      <Link to={`/officialletters/${officialLetter.id}`}>
        <div className="card">
          <div>
            <img src={Tree} alt="img-official-letters" />
            <div className="cardName">{officialLetter.activityName}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
