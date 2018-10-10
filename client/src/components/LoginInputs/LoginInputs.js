import React from "react";

const LoginInputs = (props) => (
  <div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" >Username</span>
      </div>
      <input 
        name="username"
        type="text" 
        className="form-control" 
        onChange={props.handleInputChange} 
        aria-label="Username"
      />
    </div>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" >Password</span>
      </div>
      <input 
        name="password"
        type="password" 
        className="form-control" 
        onChange={props.handleInputChange} 
        aria-label="Password"
      />
    </div>
  </div>
);
  
export default LoginInputs