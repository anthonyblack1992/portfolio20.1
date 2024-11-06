import React from 'react';

const Project = ({ title, image, link }) => {
    return (
        <div className="project">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} />
                <h2>{title}</h2>
            </a>
        </div>
    );
};

export default Project;