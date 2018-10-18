import React from "react";
import "./LoginModalButton.css";

class LoginModalButton extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("handleInputChange: " + name + " / " + value);
    this.setState({
      [name]: value
    });
  }

  handleClose = event => {
    this.setState({
      username: "",
      password: ""
    });
  }

  handleSubmit = event => {
    console.log("Entered handleSubmit in LoginModalButton()");
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    this.setState({ username: "", password: "" });

    this.props.handleSubmit({username: username, 
                             password: password});
  }
  
  render() {
    return (
      <span>
        <button
          className={"btn btn-info btn-sm float-right " + (this.props.loggedIn ? "d-none" : "d-block")}
          data-toggle="modal" 
          data-target="#loginModal"
        >
          Login
        </button>
    
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
    
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={this.handleClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              
              {/* Body */}
              <div className="modal-body">

                {/* username */}
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

                {/* password */}
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

              </div>
    
              {/* Footer */}
              <div className="modal-footer">
                {/* Close Button */}
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>Close</button>
                {/* Submit Button */}
                <button type="button" className="btn btn-info" data-dismiss="modal" onClick={this.handleSubmit}>Submit</button>
              </div>
    
            </div>
          </div>
        </div>
    
      </span>        
    );
  }
}

export default LoginModalButton;
