import React from 'react';
import { ProjectLists } from '../helpers/projectsData';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

const ProjectDetail = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const slug = pathname.split('/').pop();

  const navigate = useNavigate();
  const project = ProjectLists.filter((p) => p.slug === slug);

  return (
    <div className="p-12">
      <button
        className="bg-[#492540] text-white px-4 py-1 rounded"
        onClick={() => navigate(-1)}>
        back
      </button>
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-2xl text-[#492540] font-semibold">
          {project[0].name}
        </h3>
        <img
          src={project[0].image}
          alt={project[0].name}
          className="h-full rounded"
        />
        <p>Skills - {project[0].skills}</p>
        <a href={project[0].link}>
          <AiFillGithub className="text-4xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
