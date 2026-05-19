import React from "react";

function LearningState() {
  return (

      <section className="px-4 sm:px-10 lg:px-24 xl:px-40 pt-12 sm:pt-20 bg-white dark:bg-black ">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center pb-10">
            Our Achievements
          </h2>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10K+", label: "Students" },
            { number: "250+", label: "Projects" },
            { number: "95%", label: "Success Rate" },
            { number: "50+", label: "Mentors" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 text-center hover:-translate-y-1 transition-all"
            >
              <h3 className="text-3xl font-bold text-cyan-500">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

  );
}

export default LearningState;
