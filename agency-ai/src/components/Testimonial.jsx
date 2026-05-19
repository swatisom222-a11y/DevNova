import React from "react";

function Testimonial() {
  return (
    <>
      {/* ===================== TESTIMONIALS ===================== */}

      <section className="px-4 sm:px-10 lg:px-24 xl:px-40  pt-12 sm:pt-20 dark:bg-black">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center pb-10">
          What Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Rahul Sharma",
              review:
                "DevNova helped me learn React from scratch and build real projects confidently.",
            },
            {
              name: "Priya Verma",
              review:
                "The mentors are amazing and the live classes made learning very easy.",
            },
            {
              name: "Aman Patel",
              review:
                "I improved my coding skills and cracked my first internship interview.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-sm"
            >
              <p className="text-gray-600 dark:text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-cyan-500">DevNova Student</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonial;
