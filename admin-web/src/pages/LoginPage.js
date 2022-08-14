import LoginImage from "../assets/undraw_uploading_re_okvh.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/action";
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
    e.preventDefault();
    setTimeout(() => {
      dispatch(loginUser(form));
      navigate("/");
    }, 2000);
  };
  return (
    <div className="pagesLogin">
      <div className="image">
        <img src={LoginImage} alt="#login" />
      </div>
      <div className="form">
        <h2>Welcome to DinasQ</h2>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            facilis ratione cum eos quas, molestias distinctio ex doloremque ut
            dolorum esse! Culpa, autem? Iusto quo enim commodi, mollitia hic
            corporis.
          </p>
        </div>
      </div>
    </div>
  );
}
