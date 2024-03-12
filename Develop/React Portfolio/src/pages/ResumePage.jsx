import React from 'react';
import resumeFile from '../assets/Resume_JoseS..pdf';
import skillsAndTech from '../components/resume/skillsTech.jsx';

const Resume = () => {
    const skillsAndTechnologies = skillsAndTech();

    return (
        <div className="p-8">
            <h2 className="text-6xl font-bold mb-6">Skills & Technologies</h2>
            <div className="container">
                <ul className="list-disc pl-6">
                    {skillsAndTechnologies.map((skill, index) => (
                        <li key={index} className="text-xl mb-2 list-none hover:text-white transition-colors duration-300">{skill}</li>
                    ))}
                </ul>
            </div>

            <p className="text-4xl font-bold mt-6 mb-4">Here you can find my resume:</p>
            <p><a href={resumeFile} download className="text-xl text-white hover:underline">Download Resume</a></p>
        </div>
    );
};

export default Resume;
