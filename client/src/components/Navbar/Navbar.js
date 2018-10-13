// import React from "react";
// import {Link} from "react-router-dom";

// class Navbar extends React.Component {
//     state = {
//     } 
//     render() { 
//         return (<div className="row justify-content-around" >
//         <Link to="/">Home Page </Link>    
//         <Link to="/about">About  </Link>         
//         <Link to="/whoweare">Who We Are </Link>   
//          <Link to="/contact">Contact Us </Link>    
//              </div>)  
//     }


// }
// export default Navbar

import React from "react";

const Navbar = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Home")} className="nav-link">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("About")} className="nav-link">
        About
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("WhoWeAre")} className="nav-link">
      Who We Are
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Contact")} className="nav-link">
        Contact
      </a>
    </li>
  </ul>
);

export default Navbar;
