import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/action";
import { useNavigate } from "react-router-dom";
import RegisterImage from "../assets/undraw_uploading_re_okvh.svg";
export default function AddUserPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    position: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    const getFrom = {
      firstName: form.firstName,
      lastName: form.lastName,
      role: form.role,
      email: form.email,
      password: form.password,
      phoneNumber: form.phoneNumber,
      address: form.address,
      position: form.position,
    };
    getFrom[name] = value;
    setForm(getFrom);
  };

  const submitForm = (e) => {
    dispatch(createUser(form));
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="main">
      <div className="pageRegister">
        <div className="image">
          <img src={RegisterImage} alt="register" />
        </div>
        <form onSubmit={submitForm} className="form">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="firstName"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="lastName"
            onChange={handleChange}
          />
          <br />
          <select
            name="role"
            id="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="" selected disabled>
              Select one
            </option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>
          <br />
          <input
            type="email"
            name="email"
            id="emailRegister"
            placeholder="email"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            id="passwordRegiser"
            placeholder="password"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="phoneNumber"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="address"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="position"
            id="position"
            placeholder="position"
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="btn-submit-register">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}
