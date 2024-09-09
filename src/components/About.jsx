import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a Software Engineer graduated from Universitat Pompeu Fabra in
          Barcelona (specialized in Web Development, Audiovisual Systems and
          Computer Science). I am currently interested in web developing
          technologies and focused on becoming a full-stack software engineer. I
          love bringing my creativity to life transforming ideas into reality
          through software engineering/programming. I find it easy to
          communicate my thoughts and I like connecting with people through my
          life experiences and my creative space.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
