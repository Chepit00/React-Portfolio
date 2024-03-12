// ContactForm.jsx

import React, { useState } from 'react';
import './contactForm.css'

const ContactForm = () => {

    // State variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [ setNameTouched] = useState(false);
    const [ setEmailTouched] = useState(false);
    const [ setMessageTouched] = useState(false);
  

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic to handle form submission (sending data to backend)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        //No logic at the moment to handle form submission
        
        //  window.location.href = '/404'; 
    };


        // Function to handle field blur events and set the corresponding touched state
    const handleBlur = (field) => {
        switch (field) {
            case 'name':
                setNameTouched(true);
                break;
            case 'email':
                setEmailTouched(true);
                break;
            case 'message':
                setMessageTouched(true);
                break;
            default:
                break;
        }
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
                    onChange={(e) => setName(e.target.value)} // Update the state variable with the value entered by the user in the input field
                    onBlur={() => handleBlur('name')} // Handle onBlur event
                    required 
                />
            </label>
            <label>
                Email:
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}// Update the state variable with the value entered by the user in the input field
                    onBlur={() => handleBlur('email')} // Handle onBlur event 
                    required 
                />
            </label>
            <label>
                Message:
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} // Update the state variable with the value entered by the user in the input field
                    onBlur={() => handleBlur('message')} // Handle onBlur event
                    required 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
            );
};

export default ContactForm;
