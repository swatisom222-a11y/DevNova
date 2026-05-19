import React, { useState } from "react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); //get that current div location
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
    >
      {/* Glow */}
      <div
        className="pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 w-75 h-75 absolute z-0 transition-opacity duration-500  mix-blend-multiply dark:mix-blend-lighten opacity-0 group-hover:opacity-70"
        style={{
          left: position.x - 150,
          top: position.y - 150,
        }}
      />

      {/* Content */}
      <div className="flex flex-col sm:flex-row max-sm:text-center items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4">
          <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-xl">{service.title}</h3>

          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
