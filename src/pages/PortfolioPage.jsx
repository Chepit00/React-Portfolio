import React, { useEffect, useState } from 'react';
import Project from '../components/Project'; // Import the Project component
import '../components/portfolio/Projects.css';


const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Simulate data fetching delay with useEffect
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    // Array of project data
    const projects = [
        {
            title: "Savor of the Day",
            description: "This application is to be used to generate new recipes for users to have an assortment of meals at their disposal without spending a bunch of time looking for quality recipes.",
            imageSrc: "../../../Images/SavorOfTheDay.png",
            appLink: "https://noah-wyche.github.io/Savor-of-the-Day/",
            repoLink: "https://github.com/Chepit00/Savor-of-the-Day"
        },
        {
            title: "Kursties Kookies 🍪",
            description: "Kurstie's Kookies is a web application where you can shop for baked goods. Each user can log in to an individualized account, browse their favorite treats, and choose which ones they'd like to buy and add to their cart.",
            imageSrc: "/Images/KurstiesKookies.png",
            appLink: "https://infinite-depths-65606-d9aa1a1e89cd.herokuapp.com/",
            repoLink: "https://github.com/Chepit00/kursties-kookies"
        },
        {
            title: "E-Commerce Back End ORM",
            description: "Building the back end for an e-commerce website using the latest technologies.",
            imageSrc: "/Images/ORM.png",
            repoLink:"https://github.com/Chepit00/E-Commerce-Back-End-ORM-?tab=readme-ov-file"
        },
        {
            title: "Travel Cast",
            description: "Travel Cast is an app designed to help users plan accordingly for traveling or everyday use, with a 5 day forecast.",
            imageSrc: "/Images/TravelCast.png",
            appLink: "https://chepit00.github.io/Travel-Cast/",
            repoLink: "https://github.com/Chepit00/Travel-Cast?tab=readme-ov-file"
        }
    ];

    // jsx content for the Portfolio page
    return (

        <div>
             <h1 className='title'>Check these projects out!</h1>
    
        <div className="portfolio">
            {projects.map((project, index) => (
                <div key={index} className={`project-card ${isVisible ? 'animate' : ''} ${project.title === 'Kursties Kookies' ? 'kursties-kookies' : ''}`}>
                    <Project
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        appLink={project.appLink}
                        repoLink={project.repoLink}
                    />
                    <div className="project-links">
                        <a href={project.appLink} className="app-link" target="_blank" rel="noopener noreferrer">App</a>
                        <a href={project.repoLink} className="repo-link" target="_blank" rel="noopener noreferrer">Repository</a>
                    </div>
                </div>
            ))}
            </div>
         </div>   
    );
}

export default Portfolio;
