import { Link } from "react-router-dom";
import Male from "../assets/undraw_male_avatar_323b.svg";

export default function OfficialLetterCard({ officialLetter }) {
  return (
    <>
      <Link to={`/officialletters/${officialLetter.id}`}>
        <div className="card">
          <div>
            <img src={Male} alt="img-official-letters" />
            <div className="cardName">{officialLetter.activityName}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
