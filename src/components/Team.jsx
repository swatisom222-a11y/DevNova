import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";

const Team = () => {
  return (
    <div
      id="mentors"
      className="flex flex-col items-center gap-7  sm:mt-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 mt-10 md:mt-20"
    >
      <Title
        title="Meet Our Mentors"
        desc="Learn from experienced mentors who are passionate about teaching and guiding students toward success."
      />

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-3">
        {teamData.map((teamitem, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 duration-400 transition-all dark:text-white"
          >
            <img
              src={teamitem.image}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{teamitem.name}</h3>
              <p className="text-xs opacity-60">{teamitem.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
