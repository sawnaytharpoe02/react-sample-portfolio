import React from 'react';
import { ProjectLists } from '../../helpers/projectsData';
import ProjectItem from '../../components/ProjectItem';
import { v4 as uuidv4 } from 'uuid';

const ProjectsPage = () => {
  return (
    <div className="text-center p-6">
      <p className="text-xl">Personal Projects</p>
      <div className="flex flex-wrap gap-6 justify-center p-4">
        {ProjectLists.map((project) => (
          <ProjectItem
            key={uuidv4()}
            slug={project.slug}
            name={project.name}
            img={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
