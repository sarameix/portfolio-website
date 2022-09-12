/////////////
// IMPORTS //
/////////////

import React from 'react';
import { useNavigate } from "react-router-dom";
import PDF from '../../documents/SaraMeixner_Resume.pdf';

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
                <a href={PDF} without rel="noopener noreferrer" target="_blank">
                    <button className='header-button' trailingIcon="picture_as_pdf" label="Resume">Resume</button>
                </a>
                <button className='header-button' value="/Projects" onClick={handleRouteSwitch}>Projects</button>
            </div>
        </header>
    );
}

////////////
// EXPORT //
////////////

export default Header;