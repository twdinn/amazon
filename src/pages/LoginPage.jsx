import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../constants/userConstants";

const LoginPage = () => {
  // State to store email input value
  const [email, setEmail] = useState("");
  // State to store password input value
  const [password, setPassword] = useState("");

  // Helper function to navigate between pages
  const navigate = useNavigate();

  // Handles the login of the user
  const loginUserHandler = (e) => {
    e.preventDefault();

    // Check if there are any users stored in local storage
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      // Parse the users from local storage
      const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      let foundUser = false;

      // Loop through the users to find a match
      for (const user of users) {
        // Check if the input email and password match with any of the users
        if (email === user.email && password === user.password) {
          foundUser = true;

          // Navigate to the homepage
          navigate("/");
          break;
        }
      }
      // If no matching user is found, throw an error
      if (!foundUser) {
        alert("Email or password not correct");
        throw new Error("Email or password not correct");
      }
    } else {
      alert("Account Not Found");
      // If there are no users stored in local storage, throw an error
      throw new Error("Account Not Found");
    }
  };

  // Handles the navigation to the register page
  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      {/* Link to the homepage */}
      <Link to="/">
        {/* Logo */}
        <img
          className="login_logo"
          src="./images/Amazon_logo_login.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        {/* Login form */}
        <form onSubmit={loginUserHandler}>
          {/* Email input */}
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password input */}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login button */}
          <button type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>

        {/* Disclaimer text */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* Create Account button */}
        <button onClick={registerHandler} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
