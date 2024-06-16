import ProjectList from '../components/ProjectList';
import ExperienceList from '../components/ExperienceList';
import { Link } from "@remix-run/react";


export default function RightContainer({scrollableDivRef,sectionsRef}) {
  return (
    <div ref={scrollableDivRef} className="sm:overflow-y-auto sm:h-screen text-white col-span-7">
    <div className="sm:w-2/3 w-full px-4 sm:p-0">
      <section id="about" ref={el => sectionsRef.current[0] = el}>
        <br /><br /><br />
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
          <p className='sm:hidden text-lg my-6'>EXPERIENCE</p>
          <ExperienceList />
          <Link
            to="/resume"
            className="text-gray-200 transition-colors duration-300 hover:text-testtextcolor"
          >
            <p className='p-2'>View Full Resume</p>
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
            <p className='p-2'>View Full Project Archive</p>
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
  )
}
