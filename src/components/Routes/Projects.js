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
                    <div className='project-container potluck'>
                        <div className='project-thumbnail' id='potluck-project-thumbnail'></div>
                        <div className='project-info'>
                            <h3>Potluck</h3>
                            <p>Potluck is a website for home cooks to post detailed recipes to share with their friends and family. Both the front-end and back-end were created using Express.</p>
                            <div className='project-buttons-container'>
                                <a className='project-buttons-two' href='https://secret-chamber-95709.herokuapp.com/'>Live Site</a>
                                <a className='project-buttons-two' href='https://github.com/sarameix/GA-Zoidberg-Project-02'>Project Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-container tv-tracker'>
                        <div className='project-thumbnail' id='tv-tracker-project-thumbnail'></div>
                        <div className='project-info'>
                            <h3>T.V. Tracker.</h3>
                            <p>T.V. Tracker. is website for people to track their progress on T.V. shows they are watching. The front-end was created using React, and the back-end was created with MongoDB.</p>
                            <div className='project-buttons-container'>
                                <a className='project-buttons-three' href='https://murmuring-bayou-80614.herokuapp.com/'>Live Site</a>
                                <a className='project-buttons-three' href='https://github.com/sarameix/movie-app-frontend'>Front-End Repo</a>
                                <a className='project-buttons-three' href='https://github.com/kevocs410/Movie-App-BackEnd'>Back-End Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-container wastd'>
                        <div className='project-thumbnail' id='wastd-project-thumbnail'></div>
                        <div className='project-info'>
                            <h3>wast'D</h3>
                            <p>wast'D is a social media website for people to share cocktails they've tried and comment on and like other people's posts. The front-end was created using React, and the back-end was created with Django.</p>
                            <div className='project-buttons-container'>
                                <a className='project-buttons-three' href='https://rocky-temple-80630.herokuapp.com/'>Live Site</a>
                                <a className='project-buttons-three' href='https://github.com/ampersand22/drinkapp-front'>Front-End Repo</a>
                                <a className='project-buttons-three' href='https://github.com/sarameix/drink-rest-api'>Back-End Repo</a>
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