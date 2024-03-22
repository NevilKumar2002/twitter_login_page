import React from "react";
import backTwitter from "../assets/back-twitter 1.svg";
import { Link } from "react-router-dom";
import backGoogle from "../assets/google-icon 1.svg";
import appleLogo from "../assets/logo-apple 1.svg";
import TwitterLogo from "../assets/twitter-logo-4 1.svg"
import "./Style.css"
const Home=()=>{
  return(
    <div className="bg-container" >
       <div className="home-container">
       <div className="left-container">
        <img src={backTwitter} alt="Back Twitter" className="twitter-image"/>
        </div>
        <div className="right-container">
        <img src={TwitterLogo} alt="Twitter Logo" />
            <h2><strong className="heading">Happening now</strong></h2>
            <h2 className="heading2">Join Twitter today</h2>
        <div className="signup-options">
            <div className="signup-container">
                <img src={backGoogle} alt="google"/>
                <p className="options-text">Sign up with Google</p>
            </div>
            <div className="signup-container">
                <img src={appleLogo} alt="google"/>
                <p className="options-text">Sign up with Apple</p>
            </div>
            <div className="signup-container">
                <p className="options-text"><Link to="/signup" style={{color:"black"}}>Sign up with phone or email</Link> </p>
                
            </div>

        </div>
        <div>
        <p className="signing-text">
      By signing up you agree to the <a href="#" target="_blank" >Terms of Service</a> and <a href="#" target="_blank" >Privacy Policy</a>, including <a href="#"  target="_blank" >Cookie Use</a>.
    </p>
    <p>Already Have an Account ? <Link to="/login">Log In</Link></p> 
             </div>
        </div>
       </div>
        {/* About Help Center Terms of Service Privacy Policy Cookie Policy Ads info Blog Status Carrres Brand Resources Advertsing Marketing Twitter for Business Developers Directory Settings © 2021 Twitter, Inc. */}
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Help Center</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Ads Info</a>
          <a href="#">Blog</a>
          <a href="#">Status</a>
          <a href="#">Careers</a>
          <a href="#">Brand Resources</a>
          <a href="#">Advertising</a>
          <a href="#">Marketing</a>
          <a href="#">Twitter for Business</a>
          <a href="#">Developers</a>
          <a href="#">Directory</a>
          <a href="#">Settings</a>
        </div>
        <div className="copyright">
          © 2021 Twitter, Inc.
        </div>
      </div>
    </footer>
    </div>
  )
}
export default Home;