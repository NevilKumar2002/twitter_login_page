import React from "react";
import "./Style.css";
import TwitterLogo from "../assets/twitter-logo-4 1.svg"
import { Link } from "react-router-dom";
const Login=()=>{
  return(
    <div className="login-page">
      <div className="login-container">
      <img src={TwitterLogo} alt="Twitter Logo" />
      <h1 className="login-heading">Log in to Twitter</h1>
      <form>

     
      <input type="text" placeholder="Phone number, email address" required />
      <input type="text" placeholder="Password" required />
      <button className="login-button" type="submit">Log In</button>
      </form>
      </div>
      <div className="bottom-login-container">
        <a href="#"> Forgot Password</a>
        <Link to="/signup">Sign up for Twitter</Link>
      </div>
    </div>
  )
}
export default Login;