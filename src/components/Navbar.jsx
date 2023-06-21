import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
  const [isExpand, setIsExpand] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsExpand(false);
  }, [location]);

  return (
    <>
      <div
        id={`${isExpand ? 'open' : 'false'}`}
        className="h-20 flex items-center navigation_bar p-4 justify-end lg:justify-center">
        <ul className="hidden lg:flex lg:flex-row gap-4 my-6 justify-center text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
        <HiMenuAlt3
          className={`text-white text-3xl lg:hidden ${
            isExpand ? 'hidden' : 'block'
          }`}
          onClick={() => setIsExpand(!isExpand)}
        />
        <CgClose
          className={`text-white text-3xl lg:hidden ${
            isExpand ? 'block' : 'hidden'
          }`}
          onClick={() => setIsExpand(!isExpand)}
        />
      </div>
    </>
  );
};

export default Navbar;
