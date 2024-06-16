
const ExperienceCard = ({ year, title, company, description, technologies }) => {
  return (
    <div className="relative bg-transparent shadow-lg rounded-lg overflow-hidden mx-auto transition duration-300 m-10 p-2  flex items-start sm:flex-row flex-col">
      {/* Left Container - Timeline */}
      <div className="bg-transparent sm:p-4 flex items-start">
        <div>
          <p className="text-sm text-gray-500">{year}</p>
        </div>
      </div>
      
      {/* Right Container - Content */}
      <div className="relative flex-1 sm:pl-8">
        <div className="mb-4">
          {/* Title with hover effect */}
          <h2 className="text-l sm:text-xl transition-colors duration-300 hover:text-testtextcolor">{title}</h2>
          <p className="text-sm text-gray-300">{company}</p>
        </div>
        <div className="font-thin text-sm text-textColor leading-6">
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
      
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-transparent hover:bg-gray-100 hover:bg-opacity-5 transition duration-300"></div>
    </div>
  );
};

export default ExperienceCard;
