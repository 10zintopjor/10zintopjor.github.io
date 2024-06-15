import React, { useEffect, useState } from 'react';
import ProjectCard from './projectCard';
import projectsData from '../assets/projects.json';
import img from "../assets/project_img.png"

const PortfolioList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={img}
          title={project.title}
          company={project.company}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default PortfolioList;
