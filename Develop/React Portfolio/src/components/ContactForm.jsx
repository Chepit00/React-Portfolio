// ContactForm.jsx

import React, { useState } from 'react';

const ContactForm = () => {
    // State variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., sending data to backend)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // You can add your own logic here to handle form submission
    };

    return (
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
    );
};

export default ContactForm;
