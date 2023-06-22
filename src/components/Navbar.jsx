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
      <div id={`${isExpand ? 'open' : 'close'}`} className="relative p-6">
        <ul className="navbar text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <CgClose
            className={`close-btn text-white text-3xl`}
            onClick={() => setIsExpand((prev) => !prev)}
          />
        </ul>
        <div>
          <HiMenuAlt3
            className={`open-btn text-white text-3xl`}
            onClick={() => setIsExpand((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
