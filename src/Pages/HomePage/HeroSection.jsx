import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="h-screen flex justify-center items-center">
        <div className="w-11/12 lg:w-6/12 gap-1 flex flex-col items-center text-white">
          <p className="text-xs text-center mb-2">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h3 className="name fw-semibold text-2xl lg:text-5xl text-center">
            Hi, I'm Duralumin
          </h3>
          <h4 className="text-center mt-2 lg:mt-6">
            A Front-End Web Developer
          </h4>
          <p className="text-center">
            I'm a front-end web developer specilizing in building and
            occasionally designing exceptional digital experiences.Currently,
            I'm focused on building responsive front-end web applications while
            learing back-end technologies.
          </p>
          <div className="flex gap-3 mt-2 text-3xl">
            <AiFillLinkedin />
            <BsGithub />
            <BsFillEnvelopeFill />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
