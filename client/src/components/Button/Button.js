import React from "react";
import LoginInputs from "../LoginInputs"
import SignupInputs from "../SignupInputs"

const Button = ({ type, 
                  loggedIn,
                  handleSubmit,
                  handleInputChange, 
                  children }) => (
  <span>
    <button
      className={"btn btn-primary btn-sm float-right " + (loggedIn ? "d-none" : "d-block")}
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
                ? ( <SignupInputs handleInputChange={handleInputChange}/> )
                : ( <LoginInputs handleInputChange={handleInputChange}/> )
            }
          </div>

          <div className="modal-footer">
            {/* Close Button */}
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            {/* Submit Button */}
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Submit</button>
          </div>

        </div>
      </div>
    </div>

  </span>
);

export default Button;
