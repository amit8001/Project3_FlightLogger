import React from 'react';
import './Sidebar.css'



const SideBar = props => {
    let sidebarClasses =['Sidebarstyle'];
    if(props.show){
        sidebarClasses = ['Sidebarstyle open'];
    }
    return (
    <nav className = {sidebarClasses}>
    <h1>------Flight Stats------</h1> 
        <ul>
            <li className='sidebarList'>Total Hours Flown: <h3 className='numSyle'>{props.totalHours}</h3>  </li>
            <li className='sidebarList'> Hours Remaining Until License: <h3 className='numSyle'>{props.hoursRemaining}</h3> </li>
            <li className='sidebarList'> Last Flight Remark: <h3 className='numSyle'>{props.lastRemark}</h3></li>
            <li className='sidebarList'> Last Takeoff Location:<h3 className='numSyle'>{props.lastTakeoffLocation}</h3></li>
            <li className='sidebarList'> Last Landing Location: <h3 className='numSyle'>{props.lastLandLocation}</h3></li>
        </ul>
    </nav>
    )


}

    

export default SideBar;
