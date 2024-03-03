// Portfolio.jsx

import React from 'react';
import Project from './Project'; // Import the Project component

const Portfolio = () => {
  
    const projects = [
        {
                title: "Savor of the Day",
                description: "This application is to be used to generate new recipes for users to have an assortment of meals at their disposal without spending a bunch of time looking for quality recipes. Users will be able to apply criterea to the recipes to adjust for dietary restrictions and preferences.",
                imageSrc: "/Images/SavorOfTheDay.png",
                appLink: "https://noah-wyche.github.io/Savor-of-the-Day/",
                repoLink: "https://github.com/Chepit00/Savor-of-the-Day"
        },
        {
        
                title: "Kursties Kookies 🍪",
                description: "Kurstie's Kookies is a web application where you can shop for baked goods. Each user can login to an individualized account, browse their favorite treats and choose which ones they'd like to buy and add to their cart.",
                imageSrc: "/Images/KurstiesKookies.png",
                appLink: "https://infinite-depths-65606-d9aa1a1e89cd.herokuapp.com/",
                repoLink: "https://github.com/Chepit00/kursties-kookies"
        },
    ];
        return (
        <div className="portfolio">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    appLink={project.appLink}
                    repoLink={project.repoLink}
                />
            ))}
        </div>
    );
}


export default Portfolio;
