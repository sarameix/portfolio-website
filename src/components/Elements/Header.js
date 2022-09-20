/////////////
// IMPORTS //
/////////////

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PDF from '../../documents/SaraMeixner_Resume.pdf';

/////////////////////
// HEADER FUNCTION //
/////////////////////

const Header = () => {

    ///////////////////////
    // STATE DECLARATION //
    ///////////////////////

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Create Navigation Functionality
    const navigate = useNavigate();

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    const handleRouteSwitch = (event) => {
        navigate(event.target.value);
    }

    const toggleHamburgerMenu = (event) => {
        setIsMenuOpen(!isMenuOpen);
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <header>
            <button className='home-button' value="/" onClick={handleRouteSwitch}></button>
            <div className='header-hamburger' onClick={toggleHamburgerMenu}>
                {
                    isMenuOpen ?
                    <>
                        <div className='close1'></div>
                        <div className='close2'></div>
                    </>
                    :
                        <>
                            <div className='more'></div>
                            <div className='more'></div>
                            <div className='more'></div>
                        </>

                }
            </div>
            {
                isMenuOpen ?
                    <div className='side-nav-menu'>
                        <button className='header-button' value="/About" onClick={handleRouteSwitch}>About Me</button>
                        <div className='hamburger-divider'></div>
                        <a href={PDF} without="true" rel="noopener noreferrer" target="_blank" className='header-button'>Resume</a>
                        <div className='hamburger-divider'></div>
                        <button className='header-button' value="/Projects" onClick={handleRouteSwitch}>Projects</button>
                        <div className='hamburger-divider'></div>
                        <button className='header-button' value="/Contact" onClick={handleRouteSwitch}>Contact</button>
                    </div>
                :
                    null
            }
        </header>
    );
}

////////////
// EXPORT //
////////////

export default Header;