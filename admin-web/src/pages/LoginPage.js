import LoginImage from "../assets/undraw_uploading_re_okvh.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../store/action";
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;

    const getForm = {
      email: form.email,
      password: form.password,
    };
    getForm[name] = value;
    setForm(getForm);
  };
  const submitForm = (e) => {
    // window.location.reload;
    e.preventDefault();
    dispatch(
      loginAdmin(form, () => {
        navigate("/home");
      })
    );
  };
  return (
    <div className="pagesLogin">
      <div className="image">
        <img src={LoginImage} alt="#login" />
      </div>
      <div className="form">
        <h2>WELCOME TO DINASQ</h2>
        <form className="input-login" onSubmit={submitForm}>
          <input
            type="email"
            name="email"
            id="email"
            autoFocus
            placeholder="Input email..."
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Input password..."
            onChange={handleChange}
          />
          <br />
          <button className="btn-submit-login" type="submit">
            Submit
          </button>
        </form>
        <div className="notes">
          <p>
            DinasQ is an application that can make it easier for companies to
            process reimbursement claims for business trips out of town.
          </p>
        </div>
      </div>
    </div>
  );
}
