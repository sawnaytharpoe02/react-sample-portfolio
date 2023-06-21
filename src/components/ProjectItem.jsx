import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ slug, name, img }) => {
  return (
    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg w-full h-48" src={img} alt="" />
      </a>
      <div className="p-5">
        <Link to={`/projects/${slug}`}>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-[#492540]">
            {name}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
