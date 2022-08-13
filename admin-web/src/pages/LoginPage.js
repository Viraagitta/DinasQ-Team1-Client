import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../store/action";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(setToken, "<<set token login");
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const changeInputLogin = (e) => {
    const { value, name } = e.target;

    const loginForm = {
      email: formLogin.email,
      password: formLogin.password,
    };
    loginForm[name] = value;
    // console.log(loginForm, "<<login");
    setFormLogin(loginForm);
  };

  const handleSubmit = (e) => {
    // window.location.reload;
    e.preventDefault();
    dispatch(
      loginAdmin(formLogin, () => {
        navigate("/home");
      })
    );
  };
  return (
    <div className="main">
      <h2>ini login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={changeInputLogin}
        />
        <label>password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={changeInputLogin}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
