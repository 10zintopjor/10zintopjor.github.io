import { useEffect, useState } from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import ProjectList from '../components/ProjectList'
import ExperienceList from '../components/ExperienceList'
import { Link } from "@remix-run/react";

export default function Index() {

  const [showMargin, setShowMargin] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const experiencesSection = document.getElementById('experiences');
      const projectsSection = document.getElementById('projects');

      const sections = [
        { id: 'about', element: aboutSection },
        { id: 'experiences', element: experiencesSection },
        { id: 'projects', element: projectsSection },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section.element) {
          const { top, height } = section.element.getBoundingClientRect();
          const sectionTop = top + window.scrollY;
          const sectionBottom = sectionTop + height;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(section.id);
            break; // Stop loop once active section is found
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  

  return (
    <div
      className="min-h-screen w-full bg-customBlue flex items-center justify-center font-my-font"
      style={{
        background: `radial-gradient(circle farthest-side at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 48, 94, 0.8) 0%, rgba(13, 48, 94, 0) 20%), #0f172a`
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 flex-grow sm:gap-10">
        {/* Left Column */}
        <div className="flex sm:justify-end justify-center col-span-5">
          <div className="flex flex-col justify-between p-8 text-gray-200 sm:w-3/5 w-full"> {/* Changed text-white to text-gray-300 */}
            <div className="mt-16"> {/* Margin from top */}
              <h1 className="text-5xl font-bold mb-4">Tenzin Topjor</h1>
              <p className="mb-2">Your Title</p>
              <p className="mb-4">the active section is {activeSection}</p>
              <p className="mb-2">Email: your.email@example.com</p>
              <p className="mb-4">Phone: (123) 456-7890</p>
              <div className="text-gray-300 font-thin text-sm">
              <p className="leading-6">
                I serve as a dedicated full-stack developer, responsible for developing and maintaining scalable web applications.
              </p>
            </div> 
            </div>

           {/* Catalogue */}
           <div className="flex flex-row space-x-5 items-start">
              <button onClick={() => scrollToSection('about')}>About Me</button>
              <button onClick={() => scrollToSection('experiences')}>Experiences</button>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
            </div>

            <div className="sm:mb-16 mt-8 flex space-x-8 text-xl"> {/* Margin from bottom */}
              <FaGithub />
              <FaLinkedin />
              <FaXTwitter />
              <FaFacebook />
              <FaInstagram />
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="sm:overflow-y-auto sm:h-screen text-white col-span-7">
          <div className="sm:w-2/3 w-full p-8 sm:p-0">
          <section id='about'>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className='sm:hidden text-lg mb-8'>ABOUT</p>
            <div className=' text-textColor mb-20'>
              <p>
              I am a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My journey into the world of programming began with a curiosity for building digital solutions that make a tangible impact. With extensive experience in languages such as JavaScript, Python, and Java, coupled with frameworks like React, Node.js, and Django, I thrive on creating seamless, intuitive web applications.
              </p><br></br>
              <p >
              Driven by a relentless pursuit of innovation, I continuously seek to expand my skill set and stay abreast of emerging technologies and industry trends. This commitment enables me to deliver cutting-edge solutions that empower businesses and elevate user experiences. 
              </p>
              <br></br>
              <p>
              Whether collaborating with cross-functional teams or independently tackling challenges, I bring a proactive mindset and a passion for problem-solving to every project.
              </p>
              <br></br>
            </div>
            </section>

            {/* Work Experinces */}
            <section id="experiences">
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
            {/* Projects*/}
            <section id="projects">

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

            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}