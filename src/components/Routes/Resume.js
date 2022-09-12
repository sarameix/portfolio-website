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

const Resume = () => {
    return (
        <>
            <Header />
            <main>
                <div className='line'></div>
                <h1>Resume</h1>
                <div className='line'></div>
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default Resume;