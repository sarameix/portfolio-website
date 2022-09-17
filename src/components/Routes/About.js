/////////////
// IMPORTS //
/////////////

import React from 'react';

////////////////
// COMPONENTS //
////////////////

import Header from '../Elements/Header';
import Footer from '../Elements/Footer';

////////////////////
// ABOUT FUNCTION //
////////////////////

const About = () => {

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <>
            <Header />
            <main>
                <div className='line'></div>
                <h1>About Me</h1>
                <div className='line'></div>
                <div className='about-headshot'></div>
                <p className='about-p'>Hi, my name is Sara Meixner! I'm a 3D Artist and soon-to-be Software Engineer. I graduated in 2020 from Drexel University with a B.S. in Animation in Visual Effects and a minor in Computer Science, and I recently graduated from Genreal Assembly's Software Engineering Immersive Course. My passion lies where art and creativity intersect with technology.</p>
                <p className='about-p'>I grew up in northern New Jersey, but I am currently living in Philadelphia, PA. Most of my time is spent learning how to code, but in my limited free time, I enjoy reading science fiction novels, making art, cooking meals for friends, and playing with my cat, Lucy.</p>
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default About;