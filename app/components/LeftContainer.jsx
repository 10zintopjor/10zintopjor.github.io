import { useState, useEffect } from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function LeftContainer({ activeSection, setActiveSection }) {
  const [activeButton, setActiveButton] = useState('about'); // Initialize to 'about'

  const handleButtonClick = (id) => {
    setActiveButton(id); // Update active button immediately
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Update active section when clicked
    }
  };

  useEffect(() => {
    // Update activeButton state based on activeSection change
    setActiveButton(activeSection);
  }, [activeSection]);

  return (
    <div className="flex sm:justify-end justify-center col-span-5">
      <div className="flex flex-col justify-between p-8 text-gray-200 sm:w-3/5 w-full">
        <div className="mt-16">
          <h1 className="text-5xl font-bold mb-4">Tenzin Topjor</h1>
          <p className="mb-2">Full Stack Developer</p>
          <p className="mb-2">Current Section: {activeSection}</p>
          <p className="mb-2">Email: your.email@example.com</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <div className="text-gray-300 font-thin text-sm">
            <p className="leading-6">
              I serve as a dedicated full-stack developer, responsible for developing and maintaining scalable web applications.
            </p>
          </div>
        </div>

        {/* Catalogue */}
        <div className="flex flex-col sm:flex-col space-y-7 items-start my-10">
          <button
            onClick={() => handleButtonClick('about')}
            className={`text-gray-200 ${activeButton  === 'about' ? 'text-testtextcolor' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleButtonClick('experiences')}
            className={`text-gray-200 ${activeButton === 'experiences' ? 'text-testtextcolor' : ''}`}
          >
            Experiences
          </button>
          <button
            onClick={() => handleButtonClick('projects')}
            className={`text-gray-200 ${activeButton  === 'projects' ? 'text-testtextcolor' : ''}`}
          >
            Projects
          </button>
        </div>

        <div className="sm:mb-16 mt-8 flex space-x-8 text-xl">
          <FaGithub />
          <FaLinkedin />
          <FaXTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}
