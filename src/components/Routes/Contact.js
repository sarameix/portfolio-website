/////////////
// IMPORTS //
/////////////

import React, { useState } from 'react'

////////////////
// COMPONENTS //
////////////////

import Header from '../Elements/Header';
import Footer from '../Elements/Footer';

//////////////////////
// CONTACT FUNCTION //
//////////////////////

const Contact = () => {

    ///////////////////////
    // STATE DECLARATION //
    ///////////////////////

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    const isValidEmail = (email) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    
    const handleSubmit = () => {
        if (name && email && message) {
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <>
            <Header />
            <main>
                <div className='line'></div>
                <h1>Contact Me</h1>
                <div className='line'></div>
                <h3>If you want to get in touch, fill out this form!</h3>
                <h5>Or you can email me directly at: sarameix22@gmail.com</h5>
                <div id="contact-form">
                    <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /><br />
                    <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /><br />
                    <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea><br />
                    <button onClick={handleSubmit}>Send Message</button><br />
                </div>
                {
                    emailSent ?
                        <h3>Thank you for your message, we will be in touch in no time!</h3>
                    :
                     null
                }
                
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default Contact;