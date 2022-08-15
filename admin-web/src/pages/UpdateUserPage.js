import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../store/action";
import { useNavigate, useParams } from "react-router-dom";
import RegisterImage from "../assets/undraw_uploading_re_okvh.svg";
import { detailsUser } from "../store/action/index";
import { editUser } from "../store/action/index";
export default function AddUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(detailsUser(id));
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.details);

  console.log(user);
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    email: user.email,
    password: user.password,
    phoneNumber: user.phoneNumber,
    address: user.address,
    position: user.position,
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
    dispatch(editUser(form, id));
    e.preventDefault();
    navigate("/employees");
  };
  return (
    <>
      {user ? (
        <div className="main">
          <div className="pageRegister">
            <div className="image">
              <img src={RegisterImage} alt="register" />
            </div>
            <p>ini update</p>
            <form onSubmit={submitForm} className="form">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={form.firstName}
                placeholder="firstName"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={form.lastName}
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
                value={form.email}
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
                value={form.phoneNumber}
                placeholder="phoneNumber"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="address"
                id="address"
                value={form.address}
                placeholder="address"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="position"
                id="position"
                value={form.position}
                placeholder="position"
                onChange={handleChange}
              />
              <br />
              <button type="submit" className="btn-submit-register">
                UPDATE
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="main">
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </>
  );
}
