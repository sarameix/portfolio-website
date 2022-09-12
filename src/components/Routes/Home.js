/////////////
// IMPORTS //
/////////////

import React from 'react';
import { useNavigate } from "react-router-dom";
import PDF from '../../Documents/SaraMeixner_Resume.pdf';

///////////////////
// HOME FUNCTION //
///////////////////

const Home = () => {

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
        <>
            <div className="home-master-container">
                <div className="overlay"></div>
                <div className="vertical-center">
                    <h1 className="home-header">
                        Sara Meixner
                    </h1>
                    <div className="home-descrip-container">
                        <h3 className="home-descrip">Full Stack Developer</h3>
                        <h3 className="descrip-divider">|</h3>
                        <h3 className="home-descrip">Digital Artist</h3>
                        <h3 className="descrip-divider">|</h3>
                        <h3 className="home-descrip">Book Worm</h3>
                    </div>
                    <div className="home-buttons-container">
                        <button className='home-nav-button' value="/About" onClick={handleRouteSwitch}>About Me</button>
                        <a href={PDF} without rel="noopener noreferrer" target="_blank">
                            <button className='home-nav-button' trailingIcon="picture_as_pdf" label="Resume">Resume</button>
                        </a>
                        <button className='home-nav-button' value="/Projects" onClick={handleRouteSwitch}>Projects</button>
                        <button className='home-nav-button' value="/Contact" onClick={handleRouteSwitch}>Contact</button>
                    </div>
                </div> 
            </div>
        </>
    );
}

////////////
// EXPORT //
////////////

export default Home;