import React from 'react';
import { ProjectLists } from '../helpers/projectsData';
import { useLocation } from 'react-router-dom';

const ProjectDetail = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const slug = pathname.split('/').pop();

  const project = ProjectLists.filter((p) => p.slug === slug);
  console.log(project);
  return (
    <div>
      Project Details
      <h3>Project name - {project[0].name}</h3>
    </div>
  );
};

export default ProjectDetail;
