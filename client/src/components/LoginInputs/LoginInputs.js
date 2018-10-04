import React from "react";

const LoginInputs = (props) => (
  <div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" >Username</span>
      </div>
      <input type="text" className="form-control" onChange={props.handleUserNameChange} aria-label="Username"/>
    </div>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" >Password</span>
      </div>
      <input type="password" className="form-control" onChange={props.handlePasswordChange} aria-label="Password"/>
    </div>
  </div>
);
  
export default LoginInputs