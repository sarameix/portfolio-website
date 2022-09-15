/////////////
// IMPORTS //
/////////////

import React from 'react';

////////////////
// COMPONENTS //
////////////////

import Header from '../Elements/Header';
import Footer from '../Elements/Footer';

//////////////////////
// CONTACT FUNCTION //
//////////////////////

const Contact = () => {
    return (
        <>
            <Header />
            <main>
                <div className='line'></div>
                <h1>Contact Me</h1>
                <div className='line'></div>
                <h3>If you want to get in touch, fill out this form!</h3>
                <h5>Or you can email me directly at: sarameix22@gmail.com</h5>
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default Contact;