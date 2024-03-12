// Project.jsx

import React from 'react';


const Project = ({ title, description, imageSrc}) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageSrc} alt={title} />
        </div>
    );
}

export default Project;
