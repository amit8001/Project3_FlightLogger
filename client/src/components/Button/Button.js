import React from "react";
import LoginInputs from "../LoginInputs"
import SignupInputs from "../SignupInputs"

// onClick: "handleSignup()" | "handleLogin()""
// type: "signupModal" | "loginModal"
// children: "Signup" | "Login"

// const loginInput = props => (
//   <div>
//     <div className="input-group mb-3">
//       <div className="input-group-prepend">
//         <span className="input-group-text" >Username</span>
//       </div>
//       <input type="text" className="form-control" onChange={props.handleUserNameChange} aria-label="Username"/>
//     </div>

//     <div className="input-group mb-3">
//       <div className="input-group-prepend">
//         <span className="input-group-text" >Password</span>
//       </div>
//       <input type="password" className="form-control" onChange={props.handlePasswordChange} aria-label="Password"/>
//     </div>
//   </div>
// );

// const signupInput = props => (
//   <div>
//     <LoginInput handleUserNameChange={props.handleUserNameChange} handlePasswordChange={props.handlePasswordChange} />

//     <div className="input-group mb-3">
//       <div className="input-group-prepend">
//         <span className="input-group-text">First / last name</span>
//       </div>
//       <input type="text" className="form-control" onChange={props.handleFirstNameChange} aria-label="First name" />
//       <input type="text" className="form-control" onChange={props.handleLastNameChange} aria-label="Last name" />
//     </div>

//     <div className="input-group mb-3">
//       <div className="input-group-prepend">
//         <span className="input-group-text" >License No.</span>
//       </div>
//       <input type="text" className="form-control" onChange="handleLicenseNoChange" aria-label="License Number"/>
//       <input type="text" className="form-control" onChange="handleLicenseTypeChange" aria-label="License type"/>
//     </div>
//   </div>
// );

const Button = ({ type, 
                  handleSubmit, 
                  handleUserNameChange, 
                  handlePasswordChange, 
                  handleFirstNameChange, 
                  handleLastNameChange, 
                  handleLicenseNoChange, 
                  handleLicenseTypeChange, 
                  children }) => (
  <span>
    <button
      // onClick={onClick} 
      className="btn btn-primary btn-sm float-right"
      data-toggle="modal" 
      data-target={"#" + type}
    >
      {children}
    </button>

    <div className="modal fade" id={type} tabIndex="-1" role="dialog" aria-labelledby={type + "Label"} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title" id={type + "Label"}>{children}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          
          <div className="modal-body">
            { (type === "signupModal") 
                ? (<SignupInputs
                    handleUserNameChange={handleUserNameChange}
                    handlePasswordChange={handlePasswordChange}
                    handleFirstNameChange={handleFirstNameChange}
                    handleLastNameChange={handleLastNameChange}
                    handleLicenseNoChange={handleLicenseNoChange}
                    handleLicenseTypeChange={handleLicenseTypeChange} />
                  )
                : (<LoginInputs
                    handleUserNameChange={handleUserNameChange} 
                    handlePasswordChange={handlePasswordChange} />
                  )
            }
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Submit</button>
          </div>

        </div>
      </div>
    </div>

  </span>
);

export default Button;
