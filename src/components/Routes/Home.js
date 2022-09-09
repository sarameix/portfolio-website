/////////////
// IMPORTS //
/////////////

import React from 'react';
import { useNavigate } from "react-router-dom";

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
                        <button value="/About" onClick={handleRouteSwitch}>About Me</button>
                        <button value="/Resume" onClick={handleRouteSwitch}>Resume</button>
                        <button value="/Projects" onClick={handleRouteSwitch}>Projects</button>
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