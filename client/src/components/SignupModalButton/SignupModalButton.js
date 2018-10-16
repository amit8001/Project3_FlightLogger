import React from "react";
import "./SignupModalButton.css";

class SignupModalButton extends React.Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    licenseNo: "",
    licenseType: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("handleInputChange: " + name + " / " + value);
    this.setState({
      [name]: value
    });
  }

  clearState = () => {
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      licenseNo: "",
      licenseType: ""
    });

  }

  handleClose = event => {
    this.clearState();
  }

  handleSubmit = event => {
    console.log("Entered handleSubmit in SignupModalButton()");
    event.preventDefault();

    let username = this.state.username;
    let password = this.state.password;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let licenseNo = this.state.licenseNo;
    let licenseType = this.state.licenseType;
    this.clearState();

    this.props.handleSubmit({
      username: username, 
      password: password,
      firstName: firstName,
      lastName: lastName,
      licenseNo: licenseNo,
      licenseType: licenseType
    });
  }
  
  render() {
    return (
      <span>
        <button
          className={"btn btn-info btn-sm float-right " + (this.props.loggedIn ? "d-none" : "d-block")}
          data-toggle="modal" 
          data-target="#signupModal"
        >
          Signup
        </button>
    
        <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
    
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">Signup</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={this.handleClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              
              {/* Body */}
              <div className="modal-body">

                {/* Username */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" >Username</span>
                  </div>
                  <input 
                    name="username"
                    type="text" 
                    value={this.state.username}
                    className="form-control" 
                    onChange={this.handleInputChange} 
                    aria-label="Username"
                    autoFocus   // not working
                  />
                </div>

                {/* Password */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" >Password</span>
                  </div>
                  <input 
                    name="password"
                    type="password"
                    value={this.state.password} 
                    className="form-control" 
                    onChange={this.handleInputChange} 
                    aria-label="Password"
                  />
                </div>

                {/* First / Last Name */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">First / last name</span>
                  </div>
                  <input 
                    name="firstName"
                    type="text" 
                    value={this.state.firstName}
                    className="form-control" 
                    onChange={this.handleInputChange} 
                    aria-label="First name" 
                  />
                  <input 
                    name="lastName"
                    type="text" 
                    value={this.state.lastName}
                    className="form-control" 
                    onChange={this.handleInputChange} 
                    aria-label="Last name" 
                  />
                </div>

                {/* licenseNo / Type */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" >License No./License Type</span>
                  </div>
                  <input 
                    name="licenseNo"
                    type="text" 
                    value={this.state.licenseNo}
                    className="form-control" 
                    onChange={this.handleInputChange} 
                    aria-label="License Number"
                  />
                  <input 
                    name="licenseType" 
                    type="text" 
                    value={this.state.licenseType}
                    className="form-control" 
                    onChange={this.handleInputChange} 
                    aria-label="License type"
                  />
                </div>

              </div>
    
              {/* Footer */}
              <div className="modal-footer">
                {/* Close Button */}
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>Close</button>
                {/* Submit Button */}
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Submit</button>
              </div>
    
            </div>
          </div>
        </div>
    
      </span>        
    );
  }
}

export default SignupModalButton;
