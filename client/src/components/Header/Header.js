import React from "react";
import API from "../../utils/API";
import Button from "../Button";
import "./Header.css";
import Logo from "./capture.jpg";

class Header extends React.Component {
  state = {
    _userId: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    licenseNo: "",
    licenseType: "",
    LoggedIn: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("handleInputChange: " + name + " / " + value);
    this.setState({
      [name]: value
    });
  }

  handleSignup = event => {
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
              _userId: res.data._id,
              username: res.data.username,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              licenseNo: res.data.licenseNo,
              licenseType: res.data.licenseType,
              loggedIn: true,
            });
          }
        }
      )
      .catch(err => console.log(err));
  }

  handleLogin = event => {
    event.preventDefault();
    console.log("Entered handleLogin()");
    API.login({username: this.state.username, 
               password: this.state.password})
      .then(
        res => {
          console.log("Login response: " + JSON.stringify(res.data));
          if (res.data) {
            this.setState({
              _userId: res.data._id,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              licenseNo: res.data.licenseNo,
              licenseType: res.data.licenseType,
              loggedIn: true,
            });
          } else {
            alert("Invalid username or password");
          }
        }
      )
      .catch(err => console.log(err));
  }
  
  handleLogout = event => {
    event.preventDefault();
    console.log("Entered handleLogout()");
    this.setState({
      _userId: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      licenseNo: "",
      licenseType: "",
      loggedIn: false,
    });
  }
  
  render() {
    return (
      <div className="page-header">

        <img className="loggerLogo" src={Logo} />

        {/* Signup Button/Modal */}
        <Button 
          type="signupModal"
          loggedIn={this.state.loggedIn}
          handleSubmit={this.handleSignup} 
          handleInputChange={this.handleInputChange}
          >Signup</Button>

        {/* Login Button/Modal */}
        <Button 
          type="loginModal"
          loggedIn={this.state.loggedIn}
          handleSubmit={this.handleLogin} 
          handleInputChange={this.handleInputChange}
        >Login</Button>

        {/* Logout Button */}
        <button
          className={"btn btn-primary btn-sm float-right " + (this.state.loggedIn ? "d-block" : "d-none")}
          onClick={this.handleLogout}
        >Logout</button>

      </div>
    );
  }
}
  
export default Header