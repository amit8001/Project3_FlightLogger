import React from 'react';
import './Sidebar.css'



const SideBar = props => {
    let sidebarClasses =['Sidebarstyle'];
    if(props.show){
        sidebarClasses = ['Sidebarstyle open'];
    }
    return (
    <nav className = {sidebarClasses}>
        <ul>
            <li>Total Hours Flown: {props.totalHours}  </li>
            <li> Hours Year-To-Date: {props.hoursYTD} </li>
        </ul>
    </nav>
    )


}

    

export default SideBar;