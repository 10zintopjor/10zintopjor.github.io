import React from 'react';

const ProjectCard = ({ image, title, company, description, technologies, link }) => {
  return (
    <div className="relative bg-transparent shadow-lg rounded-lg overflow-hidden mx-auto transition duration-300 m-10 flex flex-col sm:flex-row items-start p-4">
      {/* Left Container - Image (on desktop it comes above) */}
      <div className="hidden sm:flex sm:w-1/4 items-center justify-center sm:p-4">
        <img src={image} alt={`${title} image`} className="object-cover rounded-lg w-full h-30 w-auto" />
      </div>
      
      {/* Right Container - Content */}
      <div className="relative flex-1">
        <div className="mb-4">
          {/* Title with hover effect */}
          <h2 className="text-l sm:text-xl transition-colors duration-300 hover:text-testtextcolor">
            <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
          </h2>
          <p className="text-sm text-gray-300">{company}</p>
        </div>
        <div className="text-textColor font-thin text-sm leading-6">
          <p>{description}</p>
        </div>

        {/* Technologies Used */}
        <div className="flex flex-wrap items-center mt-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center bg-testbackground bg-opacity-75 rounded-full px-3 py-1 mr-2 mb-2 hover:bg-blue-900 hover:bg-opacity-100 transition duration-300">
              <p className="text-xs text-testtextcolor">{tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Left Container - Image (on mobile it comes below) */}
      <div className="sm:hidden flex items-center justify-start w-full mt-4">
        <img src={image} alt={`${title} image`} className="object-cover rounded-lg w-auto h-28" />
      </div>
      
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-transparent hover:bg-gray-100 hover:bg-opacity-5 transition duration-300"></div>
    </div>
  );
};

export default ProjectCard;
