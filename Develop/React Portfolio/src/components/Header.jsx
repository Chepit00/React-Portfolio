import React from 'react';
import '../App'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='developer-name'>Jose Silva</h1>
            <nav>
                <ul className='navigation'>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
