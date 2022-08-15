// import Zoom from "react-img-zoom";
// import Select from "react-select";
// import InnerImageZoom from "react-inner-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatusReimburse } from "../store/action/index";
export default function ReimbursementTableRow({ reimburse, i }) {
  const dispatch = useDispatch();
  const [isZoomed, setIsZoomed] = useState(false);
  const [isViewed, setViewed] = useState(false);
  const [choice, setChoice] = useState({
    status: "",
  });

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  const handleStatus = (e) => {
    const { name, value } = e.target;

    const getFrom = {
      status: choice.status,
    };
    getFrom[name] = value;
    setChoice(getFrom);
    console.log(value, reimburse.id);
    dispatch(updateStatusReimburse(value, reimburse.id));
  };

  const options = ["pending", "approved", "rejected"];
  return (
    <>
      <tr className="data-employees">
        <td className="employees-details">
          <input type="checkbox" name="checkUser" id="checkUser" />
        </td>
        <td className="employees-details">{i + 1}</td>
        <td className="employees-details">{reimburse.description}</td>
        <td className="employees-details">{reimburse.category}</td>
        <td className="employees-details">{reimburse.cost}</td>
        <td>
          {isViewed ? (
            <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
              <img src={reimburse.image} alt="View" width="300" />
            </ControlledZoom>
          ) : (
            <button className="btn-reimburse" onClick={() => setViewed(true)}>
              View Image
            </button>
          )}
        </td>
        <td className="employees-details">
          <select
            name="status"
            id="status"
            // value={choice.status}
            className="status-reimburse"
            onChange={handleStatus}
            defaultValue={reimburse.status}
          >
            <option value="pending">pending</option>
            <option value="approved">approved</option>
            <option value="rejected">rejected</option>
          </select>
        </td>
        <td className="employees-details">{reimburse.updatedBy}</td>
      </tr>
    </>
  );
}
