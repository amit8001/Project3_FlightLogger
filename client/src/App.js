import React from "react";
import API from "./utils/API";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Splash from "./components/Splash";
import About from "./components/About";
import Contact from "./components/Contact";
import WhoWeAre from "./components/WhoWeAre";
import SearchResultContainer from "./components/SearchResults";
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  state = {
    _userId: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    licenseNo: "",
    licenseType: "",
    LoggedIn: false,
    currentPage: "Home"
  };
  
  handleSignup = ({username, password, firstName, lastName, licenseNo, licenseType}) => {
    console.log("Entered handleSignup()");
    API.signup({username: username, 
                password: password,
                firstName: firstName,
                lastName: lastName,
                licenseNo: licenseNo,
                licenseType: licenseType
              })
    .then(

      res => {
        console.log("Signup response: " + JSON.stringify(res.data.errmsg));
        if (res.data.errmsg) {
          console.log("handleSignup() errmsg received");
          let errmsg = (res.data.code === 11000) ? 
            "Duplicate username already exists!" : 
            res.data.errmsg;
          alert(errmsg);
        } else if (res.data.errors) {
          console.log("handleSignup() errors received");
          alert(res.data.errors.password.message);
        } else {
          console.log("handleSignup() response received");
          console.log(res.data);
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

  handleLogin = ({username, password}) => {
    console.log("Entered handleLogin()");
    API.login({username: username, 
               password: password})
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
  
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
  

    const isLoggedIn = this.state.loggedIn;

    let main_panel = isLoggedIn 
        ? <SearchResultContainer user_id= {this.state._userId}/> 
        : <Splash/>;
  

    const renderGroup = () => {
          switch (this.state.currentPage) {
            case "Home":
              return main_panel ;
            case "About":
              return <About />;
            case "WhoWeAre":
              return <WhoWeAre />;
            default:
              return <Contact />;
          }
        }

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
                   
          <Navbar //I suppose after initial load, click on Blog link
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
       
        {
          renderGroup()
        }

          {/* {main_panel} */}
        </div>
    </Router>
    );
  }
}

export default App;
