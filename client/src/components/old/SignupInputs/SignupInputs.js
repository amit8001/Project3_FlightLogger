import React from "react";
import LoginInputs from "../LoginInputs";

const SignupInputs = (props) => (
  <div>
    <LoginInputs handleInputChange={props.handleInputChange} />

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">First / last name</span>
      </div>
      <input 
        name="firstName"
        type="text" 
        className="form-control" 
        onChange={props.handleInputChange} 
        aria-label="First name" 
      />
      <input 
        name="lastName"
        type="text" 
        className="form-control" 
        onChange={props.handleInputChange} 
        aria-label="Last name" 
      />
    </div>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" >License No./License Type</span>
      </div>
      <input 
        name="licenseNo"
        type="text" 
        className="form-control" 
        onChange={props.handleInputChange} aria-label="License Number"
      />
      <input 
        name="licenseType" 
        type="text" 
        className="form-control" 
        onChange={props.handleInputChange} aria-label="License type"
      />
    </div>
  </div>
);
  
export default SignupInputs