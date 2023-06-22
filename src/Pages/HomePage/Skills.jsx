import React from 'react';
import { skills } from '../../helpers/data';

const Skills = () => {
  const { frontend, backend, languages } = skills;
  return (
    <>
      <section className="flex flex-col mx-auto my-5 p-5 lg:p-0">
        <h2 className="mb-5 text-center">Skills</h2>
        <div className="mb-4">
          <h3 className="underline underline-offset-2 decoration-[#492540]">
            Frontend Skills
          </h3>
          <div>{frontend.join(', ')}</div>
        </div>
        <div className="mb-4">
          <h3 className="underline underline-offset-2 decoration-[#492540]">
            Backend Skills
          </h3>
          <div>{backend.join(', ')}</div>
        </div>
        <div className="mb-4">
          <h3 className="underline underline-offset-2 decoration-[#492540]">
            Languages
          </h3>
          <div>{languages.join(', ')}</div>
        </div>
      </section>
    </>
  );
};

export default Skills;
