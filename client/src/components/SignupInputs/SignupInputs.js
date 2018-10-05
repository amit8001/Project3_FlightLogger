import React from "react";
import LoginInputs from "../LoginInputs";

const SignupInputs = (props) => (
  <div>
    <LoginInputs handleUserNameChange={props.handleUserNameChange} handlePasswordChange={props.handlePasswordChange} />

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">First / last name</span>
      </div>
      <input type="text" className="form-control" id="first-name" onChange={props.handleFirstNameChange} aria-label="First name" />
      <input type="text" className="form-control" id="last-name" onChange={props.handleLastNameChange} aria-label="Last name" />
    </div>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" >License No.</span>
      </div>
      <input type="text" className="form-control" onChange={props.handleLicenseNoChange} aria-label="License Number"/>
      <input type="text" className="form-control" onChange={props.handleLicenseTypeChange} aria-label="License type"/>
    </div>
  </div>
);
  
export default SignupInputs