import React from 'react';

const SidebarToggleButton = props => (
    <button className='sidebarButton' onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export default SidebarToggleButton;