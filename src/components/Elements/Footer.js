/////////////
// IMPORTS //
/////////////

import React from 'react';

/////////////////////
// FOOTER FUNCTION //
/////////////////////

const Footer = () => {

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <footer>
             <a href="https://github.com/sarameix" className="social-media">
                <div className='github-image'></div>
             </a>
            <a href="https://www.linkedin.com/in/sarameixner/" className="social-media">
                <div className='linkedin-image'></div>
            </a>
            <a href="https://vimeo.com/sarameixner" className="social-media">
                <div className='vimeo-image'></div>
            </a>
        </footer>
    );
}

////////////
// EXPORT //
////////////

export default Footer;