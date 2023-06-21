import React from 'react';

const About = () => {
  return (
    <div>
      <div className="w-11/12 lg:w-6/12 mx-auto my-5">
        <h2 className="mb-5 text-center">About</h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 items-center">
          <div className="basis-6/12">
            <p className="text-sm text-center lg:text-start">
              I'm passionate about building excellent software that improve the
              lives of those around me. I specialize in creating software for
              clients ranging from individuals and small-bussiness all the way
              to large enterprise corporations. What would you do if you had a
              software expert avaliable at your fingertips ?
            </p>
          </div>
          <div className="basis-6/12">
            <img
              width="240px"
              src="https://images.unsplash.com/photo-1657642119697-6a70dc74c03d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y3V0ZSUyMHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="rounded-md ms-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
