import React from "react";
import API from "./utils/API";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Splash from "./components/Splash";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom"

class App extends React.Component {
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
      <Router>
        <div>
          <Header 
            loggedIn={this.state.loggedIn}
            handleInputChange={this.handleInputChange}
            handleLogin={this.handleLogin}
            handleSignup={this.handleSignup}
            handleLogout={this.handleLogout}
          />
          <Navbar />
          <Splash />
            {/* <Switch>
              <Route exact path="/" component={Books} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
