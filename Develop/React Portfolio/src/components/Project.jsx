// Project.jsx

import React from 'react';


const Project = ({ title, description, imageSrc, appLink, repoLink }) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageSrc} alt={title} />
            <div className="project-links">
                <a href={appLink} target="_blank" rel="noopener noreferrer">View App</a>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
        </div>
    );
}

export default Project;
