import React from "react";
// import Button from "../Button";
import LoginModalButton from "../LoginModalButton";
import SignupModalButton from "../SignupModalButton";
import "./Header.css";
import Logo from "./capture.jpg";

const Header = (props) => (
  <div className="page-header">

    <img className="loggerLogo" alt="Logo" src={Logo} />

    {/* Login Button/Modal */}
    <LoginModalButton 
      loggedIn={props.loggedIn}
      handleSubmit={props.handleLogin} 
    />

    {/* Signup Button/Modal */}
    <SignupModalButton 
      loggedIn={props.loggedIn}
      handleSubmit={props.handleSignup} 
    />

    {/* Logout Button */}
    <button
      className={"btn btn-info btn-sm float-right " + (props.loggedIn ? "d-block" : "d-none")}
      onClick={props.handleLogout}
    >Logout</button>

  </div>
)

export default Header