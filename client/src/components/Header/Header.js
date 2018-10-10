import React from "react";
import Button from "../Button";
import "./Header.css";
import Logo from "./capture.jpg";

const Header = (props) => (
  <div className="page-header">

    <img className="loggerLogo" src={Logo} />

    {/* Signup Button/Modal */}
    <Button 
      type="signupModal"
      loggedIn={props.loggedIn}
      handleSubmit={props.handleSignup} 
      handleInputChange={props.handleInputChange}
      >Signup</Button>

    {/* Login Button/Modal */}
    <Button 
      type="loginModal"
      loggedIn={props.loggedIn}
      handleSubmit={props.handleLogin} 
      handleInputChange={props.handleInputChange}
    >Login</Button>

    {/* Logout Button */}
    <button
      className={"btn btn-primary btn-sm float-right " + (props.loggedIn ? "d-block" : "d-none")}
      onClick={props.handleLogout}
    >Logout</button>

  </div>
)

export default Header