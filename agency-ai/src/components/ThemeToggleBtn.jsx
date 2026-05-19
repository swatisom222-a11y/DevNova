import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {

//toggle mode : step 3
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);





  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full"
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        className="w-4 h-4"
        alt=""
      />
    </button>
  );
};

export default ThemeToggleBtn;
