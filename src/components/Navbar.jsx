import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-3 sm:px-10 lg:px-10 xl:px-10 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="Logo"
        className="w-42 sm:w-60"
      />

      <div
        className={`text-black dark:text-white sm:text-sm ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          onClick={() => setSidebarOpen(false)}
          className="w-5 absolute right-4 top-4 sm:hidden"
          alt=""
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Courses
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Student Projects
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#mentors"
          className="sm:hover:border-b"
        >
          Mentors
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#testimonials"
          className="sm:hover:border-b"
        >
          Testimonials
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#pricing"
          className="sm:hover:border-b"
        >
          Pricing Plans
        </a>

      </div>

      <div className="flex items-center gap-2">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
        />

        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex
items-center gap-2 bg-primary text-white px-6 py-2 rounded-full
cursor-pointer hover:scale-110 transition-all"
        >
          Explore Courses <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
