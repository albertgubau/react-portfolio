import React from "react";
import foto from "../assets/fotoAlbert.jpg";
import { MdOutlineKeyboardArrowRight as ArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-white text-white flex items-center justify-center">
      <div className="flex md:flex-row flex-col justify-center m-auto px-4 space-x-10">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-md text-4xl md:text-7xl font-bold text-black">
            I'm a Software Engineer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Software engineer specialized in Front-End technologies with notions
            in Back-End development. I love bringing my creativity to life and
            turning my ideas into reality through software
            engineering/programming.
          </p>

          <Link
            to="experience"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-800 to-black cursor-pointer">
            Experience
            <span className="group-hover:rotate-90 duration-300">
              <ArrowRight size={20} className="ml-1" />
            </span>
          </Link>
        </div>

        <div className="flex justify-center align-center items-center">
          <img
            src={foto}
            alt="userFoto"
            className="rounded-2xl md:m-auto w-3/5 mt-10 shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
