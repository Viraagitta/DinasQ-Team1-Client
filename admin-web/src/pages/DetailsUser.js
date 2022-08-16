import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsUser } from "../store/action/index";
export default function DetailsUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.details);
  useEffect(() => {
    dispatch(detailsUser(id));
  }, []);
  return (
    <div className="main">
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>role: {user.role}</p>
      <p>email: {user.email}</p>
      <p>phone Number: {user.phoneNumber}</p>
      <p>address: {user.address}</p>
      <p>position: {user.position}</p>
    </div>
  );
}
