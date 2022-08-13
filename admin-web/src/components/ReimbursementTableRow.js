// import Zoom from "react-img-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { useCallback } from "react";
import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Select from "react-select";
// import InnerImageZoom from "react-inner-image-zoom";
export default function ReimbursementTableRow({ reimburse, i }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isViewed, setViewed] = useState(false);
  const [choice, setChoice] = useState();

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

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
              <img src={reimburse.image} alt="View Full Image" width="300" />
            </ControlledZoom>
          ) : (
            <button className="btn-reimburse" onClick={() => setViewed(true)}>
              View Image
            </button>
          )}
        </td>
        <td className="employees-details">
          <select
            as="select"
            value={choice}
            onChange={(e) => {
              // console.log("e.target.value", e.target.value);
              setChoice(e.target.value);
            }}
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
