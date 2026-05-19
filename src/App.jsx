import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import LearningState from "./components/LearningState";
import Footer from "./components/Footer";
import Plans from "./components/Plans";
import Testimonial from "./components/Testimonial";
// import ContactUs from "./components/ContactUs";

function App() {
  //toggle mode : step 2 (get stored theme from local storage if already stored)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  //toggle mode : step 1
  //1. Applies/removes dark mode class to the whole page
  //2. Saves the theme in browser storage
  useEffect(() => {
    //This runs a side-effect after render.
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <OurWork />
       {/* <TrustedBy /> */}
      <Team />
      <LearningState />
      <Testimonial />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
