import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    state = {
    } 
    render() { 
        return (<div className="row justify-content-around" >
        <Link to="/about">Home Page </Link>    
        <Link to="/about">About  </Link>         
        <Link to="/about">Who We Are </Link>   
         <Link to="/about">Contact Us </Link>    
             </div>)  
    }


}
export default Navbar