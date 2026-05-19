import React from "react";

function Plans() {
  return (
    <section className="px-4 sm:px-10 lg:px-24 xl:px-40 mt-10 py-10 sm:py-20 bg-gray-50 dark:bg-[#0B1120] transition-colors duration-300">
      <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center pb-10">
        Choose Your Plan
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Beginner",
            price: "₹999",
            features: ["HTML & CSS", "JavaScript Basics", "Community Access"],
          },
          {
            title: "Pro",
            price: "₹2999",
            features: ["React & Backend", "Projects", "Live Classes"],
          },
          {
            title: "Career Track",
            price: "₹5999",
            features: [
              "Full Stack Course",
              "Mock Interviews",
              "Placement Support",
            ],
          },
        ].map((plan, index) => (
          <div
            key={index}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-1 transition-all"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {plan.title}
            </h3>

            <p className="text-4xl font-bold text-cyan-500 mt-5">
              {plan.price}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {plan.features.map((feature, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300">
                  ✓ {feature}
                </p>
              ))}
            </div>

            <button className="mt-8 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plans;
