import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full text-gray-700 overflow-hidden dark:text-white dark:bg-black"
    >
      <div className="inline-flex items-center gap-2 border border-gray-500 rounded-full p-1.5 ">
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">Trusted by 10k+ students</p>
      </div>

      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
font-semibold leading-tight lg:leading-[80px] max-w-5xl text-center"
      >
        Master Programming with{" "}
        <span className="px-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Industry
        </span>{" "}
        Experts
      </h1>

      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[80%] sm:max-w-lg pb-3">
        Interactive coding courses designed for students, beginners, and future
        developers.
      </p>

      <div className="relative">
        <img
          src={assets.hero_img}
          alt=""
          className="w-full max-w-6xl rounded-2xl"
        />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:-top-70 sm:-right-50 -z-1 dark:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
