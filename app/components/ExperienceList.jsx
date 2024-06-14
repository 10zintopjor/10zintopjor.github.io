// WorkList.js

import ExperienceCard from './experienceCard';
import experiences from '../assets/experiences.json'

const ExperienceList = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {experiences.map((project) => (
        <ExperienceCard
          key={project.id}
          year={project.year}
          title={project.title}
          company={project.company}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
