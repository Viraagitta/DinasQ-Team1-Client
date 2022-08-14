import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OfficialLetterCard from "../components/OfficialLetterCard";
import { fetchAllofficialLetters } from "../store/action";
export default function ListOfficialLetter() {
  const dispatch = useDispatch();
  const officialLetters = useSelector((state) => state.letter.officialLetters);
  console.log(officialLetters, "<dari list");
  useEffect(() => {
    dispatch(fetchAllofficialLetters());
  }, []);
  return (
    <div className="main">
      <div className="nav">
        <h2>Official Letters</h2>
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
      <div className="cardBox">
        {officialLetters.map((officialLetter) => {
          return (
            <OfficialLetterCard
              key={officialLetter.id}
              officialLetter={officialLetter}
            />
          );
        })}
      </div>
    </div>
  );
}
