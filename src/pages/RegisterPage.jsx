import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../actions/userActions";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [prov, setProv] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userStorageCheck = (newUser) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let emailFound = false;

    users.forEach((user) => {
      if (user.email === newUser.email) {
        emailFound = true;
        alert("Account With This Email Already Exists");
        setName("");
        setStreet("");
        setCity("");
        setProv("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        throw new Error("Account With This Email Already Exists");
      }
    });
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      alert("Passwords Do Not match");
      throw new Error("Passwords Do Not match");
    }

    if (!emailFound) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/");
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const userData = {
      name,
      street,
      city,
      prov,
      email,
      password,
      confirmPassword,
    };

    userStorageCheck(userData);
    dispatch(userRegister(userData));
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

        <form onSubmit={registerHandler}>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Street Address</h5>
          <input
            type="text"
            value={street}
            required
            onChange={(e) => setStreet(e.target.value)}
          />
          <h5>City</h5>
          <input
            type="text"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <h5>Province</h5>
          <input
            type="text"
            value={prov}
            required
            onChange={(e) => setProv(e.target.value)}
          />
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Confirm Password</h5>
          <input
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton">
            Register
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
