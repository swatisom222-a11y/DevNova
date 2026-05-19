import React from "react";
import { company_logos } from "../assets/assets";

const TrustedBy = () => {
  return (
    <div id="trustedby" className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 dark:text-white/90 dark:bg-black">

      <h2 className='text-3xl sm:text-3xl font-semibold p-4'>Our students are placed at</h2>
      <div className="flex items-center justify-center flex-wrap gap-10 m-4  p-2 ">
        {company_logos.map((logo,index) => (
          <img key={index} src={logo} alt="" className="max-h-6 sm:max-h-9 rounded-md dark:drop-shadow-xl" />
        ))}
      </div>
    </div>

  );
};

export default TrustedBy;
