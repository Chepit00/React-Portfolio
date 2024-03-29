// ContactForm.jsx

import React, { useState } from 'react';
import '../components/contact/contactForm.css'

const ContactForm = () => {

    // State variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic to handle form submission (sending data to backend)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        //No logic at the moment to handle form submission
        
    };

    return (
        <div>
        <h1 className='text-6xl font-bold mb-5 mt-10'>Contact Me</h1>
        <p className='text-3xl text-gray-700 mb-8'>I'd love to help on your next project!</p>
        <form onSubmit={handleSubmit} className="contact-form">
            <label>
                Name:
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Email:
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Message:
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
            );
};

export default ContactForm;
