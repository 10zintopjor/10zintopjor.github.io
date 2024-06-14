import React, { useEffect, useState } from 'react';
import ProjectCard from './projectCard';
import projectsData from '../assets/projects.json';

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
          image={project.image}
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
