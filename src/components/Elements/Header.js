/////////////
// IMPORTS //
/////////////

import React from 'react';
import { useNavigate } from "react-router-dom";

/////////////////////
// HEADER FUNCTION //
/////////////////////

const Header = () => {

    // Create Navigation Functionality
    const navigate = useNavigate();

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    const handleRouteSwitch = (event) => {
        navigate(event.target.value);
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <header>
            <button className='home-button' value="/" onClick={handleRouteSwitch}></button>
            <div className="header-links">
                <button className='header-button' value="/About" onClick={handleRouteSwitch}>About Me</button>
                <button className='header-button' value="/Resume" onClick={handleRouteSwitch}>Resume</button>
                <button className='header-button' value="/Projects" onClick={handleRouteSwitch}>Projects</button>
            </div>
        </header>
    );
}

////////////
// EXPORT //
////////////

export default Header;