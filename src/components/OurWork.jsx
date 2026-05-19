import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive online shopping platform with product listings, cart, and payment features.",
      image: assets.work_mobile_app,
    },
    {
      title: "AI Chatbot App",
      description:
        "An intelligent chatbot application that provides real-time automated responses using AI.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather forecasting app that displays live temperature, humidity, and weather updates.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 sm:mt-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-10"
    >
      <Title
        title="Student Projects"
        desc="Explore innovative projects created by our students using modern technologies and practical skills.
Each project reflects creativity, problem-solving, and real-world learning experience."
      />

      <div className="grid gap-6 w-full max-w-5xl sm:grid-cols-2 lg:grid-cols-3">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-105 duration-500 transition-all cursor-pointer max-sm:text-center"
          >
            <img src={work.image} alt="" className="w-full rounded-2xl" />
            <h3 className="font-bold mt-3 mb-2 ">{work.title} </h3>
            <p className="w-full text-sm mt-2 opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
