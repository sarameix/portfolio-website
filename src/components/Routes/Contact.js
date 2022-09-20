/////////////
// IMPORTS //
/////////////

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
            // Set Email Parameters
            const serviceId = 'service_y6u4f3z';
            const templateId = 'template_fhp7j18';
            const userId = '-wBK6ZfaUvtu4D_5y';
            const templateParams = {
                name,
                email,
                message
            };

            // Send Email Thru EmailJS
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            // Reset States on Submit
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
                <h3 className='contact-header'>I'm interested in all Software Engineering opportunities, no matter the job. If you want to get in touch, fill out this form, or you can email me directly at: <span className='contact-email'>sarameix22@gmail.com</span>!</h3>
                <div id="contact-form">
                    <div className='contact-border-top'></div>
                    <div className='contact-form-input'>
                        <h3>Contact Form</h3>
                        <label htmlFor='name'>Your Name</label><br/>
                        <input name='name' type="text" placeholder="Example: John Smith" value={name} onChange={e => setName(e.target.value)} /><br />
                        <label htmlFor='name'>Your Email Address</label><br/>
                        <input name='email' type="email" placeholder="Example: email@gmail.com" value={email} onChange={e => setEmail(e.target.value)} /><br />
                        <label htmlFor='message'>Your Message</label><br/>
                        <textarea name='message' placeholder="Type your message here..." value={message} onChange={e => setMessage(e.target.value)}></textarea><br />
                        <button onClick={handleSubmit}>Send Message</button><br />
                    </div>
                </div>
                {
                    emailSent ?
                        <h4 className='contact-confirm'>Thank you for your message! I will be reaching out to you shortly.</h4>
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