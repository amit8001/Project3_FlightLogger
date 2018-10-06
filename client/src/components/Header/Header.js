import React from "react";
import API from "../../utils/API";
import Button from "../Button";
import "./Header.css";
import Logo from "./capture.jpg";

class Header extends React.Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    licenseNo: "",
    licenseType: ""
  };

  handleUserNameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value });
  };

  handleLicenseNoChange = event => {
    this.setState({ licenseNo: event.target.value });
  };

  handleLicenseTypeChange = event => {
    this.setState({ licenseType: event.target.value });
  };

  handleSubmitSignup = event => {
    event.preventDefault();
    console.log("Entered handleSignup()");
    API.signup({username: this.state.username, 
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                licenseNo: this.state.licenseNo,
                licenseType: this.state.licenseType
              })
      .then(

        res => {
          console.log("Signup response: " + JSON.stringify(res.data.errmsg));
          if (res.data.errmsg) {
            let errmsg = (res.data.code === 11000) ? 
              "Duplicate username already exists!" : 
              res.data.errmsg;
            alert(errmsg);
          } else {
            this.setState({
              username: res.username,
              firstName: res.firstName,
              lastName: res.lastName,
              licenseNo: res.licenseNo,
              licenseType: res.licenseType
            });
          }
        }
      )
      .catch(err => console.log(err));
  }

  handleSubmitLogin = event => {
    event.preventDefault();
    console.log("Entered handleLogin()");
    API.login({username: this.state.username, 
               password: this.state.password})
      .then(
        res => {
          console.log("Login response: " + JSON.stringify(res.data));
          this.setState({
            username: res.username,
            firstName: res.firstName,
            lastName: res.lastName,
            licenseNo: res.licenseNo,
            licenseType: res.licenseType
          });
        }
      )
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="page-header">

      <nav className="navbar navbar-expand-lg navbar-light">
      <img className="loggerLogo" src={Logo} />
          <a className="navbar-brand" href="#">Sky Logger</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home  </a>
              </li>
                    
            </ul>

          </div>

        <Button 
          type="signupModal"
          handleSubmit={this.handleSubmitSignup} 
          handleUserNameChange={this.handleUserNameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handleLicenseNoChange={this.handleLicenseNoChange}
          handleLicenseTypeChange={this.handleLicenseTypeChange}>Signup</Button>

        <Button 
          type="loginModal"
          handleSubmit={this.handleSubmitLogin} 
          handleUserNameChange={this.handleUserNameChange}
          handlePasswordChange={this.handlePasswordChange}
        >Login
        </Button>
        
        </nav>

      </div>
    );
  }
}
  
export default Header