import React from "react";
import Icon from "../Icon";
import "./Header.css";

const Header = (props) => (
  <div className="page-header">
    <Icon /> 
    {/* <div class="btn-toolbar pull-right navbar-right" role="toolbar" aria-label="Toolbar with button groups">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
        <button type="button" class="btn btn-secondary">3</button>
        <button type="button" class="btn btn-secondary pull-right">4</button>
    </div> */}
    {/* <div className="float-right"> */}
    <button type="button" class="btn btn-primary float-right">Signup</button> 
    <button type="button" class="btn btn-primary float-right">login</button>
    {/* </div> */}

  </div>
);
  
export default Header