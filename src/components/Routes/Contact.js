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
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default Contact;