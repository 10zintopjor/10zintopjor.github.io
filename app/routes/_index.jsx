import { useEffect, useState, useRef } from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import ProjectList from '../components/ProjectList';
import ExperienceList from '../components/ExperienceList';
import { Link } from "@remix-run/react";

export default function Index() {
  const [activeSection, setActiveSection] = useState(null);
  const scrollableDivRef = useRef(null);
  const sectionsRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Update active section when clicked
    }
  };

  const handleScroll = () => {
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      let currentSection = null;
      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < scrollableDiv.clientHeight && rect.bottom > 0;
        if (isVisible && (!currentSection || rect.top < currentSection.top)) {
          currentSection = { id: section.id, top: rect.top };
        }
      });
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    }
  };

  useEffect(() => {
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);

      // Initial check for the active section
      handleScroll();

      // Cleanup the event listener on component unmount
      return () => {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen w-full bg-customBlue flex items-center justify-center font-my-font"
      style={{
        background: `radial-gradient(circle farthest-side at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 48, 94, 0.8) 0%, rgba(13, 48, 94, 0) 20%), #0f172a`
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 flex-grow sm:gap-10">
        {/* Left Column */}
        <div className="flex sm:justify-end justify-center col-span-5">
          <div className="flex flex-col justify-between p-8 text-gray-200 sm:w-3/5 w-full">
            <div className="mt-16">
              <h1 className="text-5xl font-bold mb-4">Tenzin Topjor</h1>
              <p className="mb-2">Full Stack Developer</p>
              <p className="mb-2">Email: your.email@example.com</p>
              <p className="mb-4">Phone: (123) 456-7890</p>
              <div className="text-gray-300 font-thin text-sm">
                <p className="leading-6">
                  I serve as a dedicated full-stack developer, responsible for developing and maintaining scalable web applications.
                </p>
              </div>
            </div>

            {/* Catalogue */}
            <div className="flex flex-col space-y-7 items-start">
              <button
                onClick={() => scrollToSection('about')}
                className={activeSection === 'about' ? 'text-testtextcolor' : ''}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experiences')}
                className={activeSection === 'experiences' ? 'text-testtextcolor' : ''}
              >
                Experiences
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={activeSection === 'projects' ? 'text-testtextcolor' : ''}
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
        {/* Right Column */}
        <div ref={scrollableDivRef} className="sm:overflow-y-auto sm:h-screen text-white col-span-7">
          <div className="sm:w-2/3 w-full p-3 sm:p-0">
            <section id="about" ref={el => sectionsRef.current[0] = el}>
              <br /><br /><br /><br />
              <p className='sm:hidden text-lg mb-8'>ABOUT</p>
              <div className='text-textColor mb-20'>
                <p>
                  I am a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My journey into the world of programming began with a curiosity for building digital solutions that make a tangible impact. With extensive experience in languages such as JavaScript, Python, and Java, coupled with frameworks like React, Node.js, and Django, I thrive on creating seamless, intuitive web applications.
                </p><br />
                <p>
                  Driven by a relentless pursuit of innovation, I continuously seek to expand my skill set and stay abreast of emerging technologies and industry trends. This commitment enables me to deliver cutting-edge solutions that empower businesses and elevate user experiences.
                </p>
                <br />
                <p>
                  Whether collaborating with cross-functional teams or independently tackling challenges, I bring a proactive mindset and a passion for problem-solving to every project.
                </p><br />
              </div>
            </section>

            {/* Work Experiences */}
            <section id="experiences" ref={el => sectionsRef.current[1] = el}>
              <div className='mb-28'>
                <p className='sm:hidden text-lg my-8'>EXPERIENCE</p>
                <ExperienceList />
                <Link
                  to="/resume"
                  className="text-gray-200 transition-colors duration-300 hover:text-testtextcolor"
                >
                  <p>View Full Resume</p>
                </Link>
              </div>
            </section>
            {/* Projects */}
            <section id="projects" ref={el => sectionsRef.current[2] = el}>
              <div className='mb-20'>
                <p className='sm:hidden text-lg'>PROJECTS</p>
                <ProjectList />
                <Link
                  to="/resume"
                  className="text-gray-200 transition-colors duration-300 hover:text-testtextcolor"
                >
                  <p>View Full Project Archive</p>
                </Link>
              </div>
            </section>

            <div className='text-textColor font-thin text-sm leading-6 w-3/4 mb-12'>
              <p>
                Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Remix and Tailwind CSS, deployed with Github Pages. All text is set in the Inter typeface.
              </p>
            </div>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
