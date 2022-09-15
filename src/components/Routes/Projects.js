/////////////
// IMPORTS //
/////////////

import React from 'react';
import { useNavigate } from "react-router-dom";

////////////////
// COMPONENTS //
////////////////

import Header from '../Elements/Header';
import Footer from '../Elements/Footer';

///////////////////////
// PROJECTS FUNCTION //
///////////////////////

const Projects = () => {

    // Create Navigation Functionality
    const navigate = useNavigate();

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    const handleRouteSwitch = (event) => {
        navigate(event.target.value);
    }

    return (
        <>
            <Header />
            <main>
                <div className='line'></div>
                <h1>Projects</h1>
                <div className='line'></div>
                <div className='projects-container'>
                    <div className='project-container'>
                        <div className='project-thumbnail' id='potluck-project-thumbnail'></div>
                        <div className='project-info'>
                            <h3>Potluck</h3>
                            <div className='project-buttons-container'>
                                <button>Live Site</button>
                                <button>Project Repo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default Projects;