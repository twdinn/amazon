import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../constants/userConstants";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUserHandler = (e) => {
    e.preventDefault();
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      let foundUser = false;
      for (const user of users) {
        if (email === user.email && password === user.password) {
          foundUser = true;
          navigate("/");
          break;
        }
      }
      if (!foundUser) {
        alert("Email or password not correct");
        throw new Error("Email or password not correct");
      }
    } else {
      throw new Error("Account Not Found");
    }
  };

  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="./images/Amazon_logo_login.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form onSubmit={loginUserHandler}>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={registerHandler} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
