import { useNavigate } from "react-router-dom";
import Male from "../assets/undraw_male_avatar_323b.svg";

export default function OfficialLetterCard({ officialLetter }) {
  const navigate = useNavigate();
  const detailHandler = (id) => {
    // console.log(id);
    navigate(`/officialletters/${id}`);
  };
  return (
    <>
      <div className="card">
        <div onClick={() => detailHandler(officialLetter.id)}>
          <img src={Male} alt="img-official-letters" />
          <div className="cardName">{officialLetter.activityName}</div>
        </div>
      </div>
    </>
  );
}
