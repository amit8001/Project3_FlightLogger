import React from "react";
import API from "../../utils/API";
import Icon from "../Icon";
import Button from "../Button";
import "./Header.css";

class Header extends React.Component {
  state = {
    username: "",
    firstName: "",
    lastName: "",
    licenseNo: "",
    licenseType: ""
  };

  handleSignup = event => {
    console.log("Entered handleSignup()");
    API.signup({username: "ham", 
                password: "ham1",
                firstName: "firstN",
                lastName: "lastN",
                licenseNo: "987",
                licenseType: "ltype"
              })
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

  handleLogin = event => {
    console.log("Entered handleLogin()");
    API.login({username: "ham", password: "ham1"})
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
        <Icon /> 
        <Button onClick={this.handleSignup}>Signup</Button>
        <Button onClick={this.handleLogin}>Login</Button>
      </div>
    );
  }
}
  
export default Header