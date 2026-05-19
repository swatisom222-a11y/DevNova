import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import {
  Code2,
  Database,
  BrainCircuit,
  Palette,
  Bot,
  BriefcaseBusiness,
} from "lucide-react";

const Services = () => {
  const serviceData = [
  {
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, MongoDB",
    icon: Database,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Interview preparation and problem solving",
    icon: BrainCircuit,
  },
  {
    title: "UI/UX Design",
    description: "Figma, responsive design, prototyping",
    icon: Palette,
  },
  {
    title: "AI & Machine Learning",
    description: "Python, AI basics, real-world models",
    icon: Bot,
  },
  {
    title: "Placement Preparation",
    description: "Resume, aptitude, mock interviews",
    icon: BriefcaseBusiness,
  },
];


  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 text-gray-700 dark:text-white/90 dark:bg-black pt-3"
    >

      <Title
        title="Courses We Offer"
        desc="Explore industry-focused courses designed to build practical skills and real-world knowledge.
Learn from experts and grow your career with confidence."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

    </div>
  );
};

export default Services;
