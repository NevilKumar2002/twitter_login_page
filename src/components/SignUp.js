import React from "react";
import "./Style.css";
import TwitterLogo from "../assets/twitter-logo-4 1.svg"
import DateDropdowns from "./Dropdown";

const SignUp=()=>{
  return(
    <div>
      <div className="signup-page">
      <div className="login-container">
      <div className="twitter-logo">
      <img src={TwitterLogo} alt="Twitter Logo"  />
      </div>
      <h1 className="login-heading">Create an account</h1>
  
      <input type="text" placeholder="Name" required className="input" />
      <input type="phonenumber" placeholder="Phone Number"  className="input" required />
      <br />
      <a href="#" style={{color:" #1DA1F2", textDecoration:"none"}}>Use Email</a>
      <h4>Date Of Birth</h4>
      <p className="junk-text">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
      
    
      <DateDropdowns />
      <button className="signup-button" type="submit">Next</button>
     
      </div>
    </div>
    </div>
  )
}
export default SignUp;