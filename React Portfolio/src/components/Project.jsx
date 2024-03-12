
import React from 'react';

//component for displaying a project
const Project = ({ title, description, imageSrc}) => {
    return (
        // container for a single project
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageSrc} alt={title} />
        </div>
    );
}
//exporting it to be used else where 
export default Project;
