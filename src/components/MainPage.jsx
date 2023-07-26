import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import { useEffect } from "react";
import { FullPage, Slide } from "react-full-page";

const MainPage = () => {
  const [currPage, setCurrPage] = useState("home");
  const [height, setHeight] = useState(window.innerHeight);

  const customControls = (props) => {
    const currentSlideIndex = props.getCurrentSlideIndex();
    if (currentSlideIndex === 0) setCurrPage("home");
    if (currentSlideIndex === 1) setCurrPage("about");
    if (currentSlideIndex === 2) setCurrPage("projects");
    if (currentSlideIndex === 3) setCurrPage("contact");
  };

  //get inner window height
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight;
      setHeight(newHeight);
      console.log(newHeight);
    };
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <motion.div
      initial={{ x: -window.innerWidth, w: 0, opacity: 1 }}
      animate={{ x: 0, w: "100%", opacity: 1 }}
      exit={{
        x: -window.innerWidth,
        opacity: 0,
        w: 0,
        transition: { duration: 0.3 },
      }}
    >
      <div
        className={`${
          currPage === "home"
            ? " translate-y-0 opacity-100"
            : "translate-y-28 opacity-0"
        } scroll_down flex items-center fixed rotate-90 text-sm lg:right-20 md:right-10 right-0 -mr-6 text-tx bottom-20 duration-700`}
      >
        <p>scroll down</p>
        <p>
          <BsMouse className=" ml-3 -rotate-90 text-lg" />
        </p>
      </div>
      <div className="fixed flex flex-col lg:right-20 md:right-5 sm:right-0 sm:top-1/2 -top-3 sm:-mt-10 sm:w-8 sm:rotate-0 -rotate-90 right-1/2 sm:mr-0 -mr-4 z-50">
        <div className={`${currPage === "home" ? "active" : ""} navbtn`}>
          <div className="navline"></div>
        </div>
        <div className={`${currPage === "about" ? "active" : ""} navbtn`}>
          <div className="navline"></div>
        </div>
        <div className={`${currPage === "projects" ? "active" : ""} navbtn`}>
          <div className="navline"></div>
        </div>
        <div className={`${currPage === "contact" ? "active" : ""} navbtn`}>
          <div className="navline"></div>
        </div>
      </div>

      <FullPage controls={customControls} duration={1100}>
        <Slide>
          <Home isActive={currPage === "home"} />
        </Slide>
        <Slide>
          <About isActive={currPage === "about"} />
        </Slide>
        <Slide>
          <Projects isActive={currPage === "projects"} />
        </Slide>
        <Slide>
          <Contact isActive={currPage === "contact"} />
        </Slide>
      </FullPage>
    </motion.div>
  );
};

export default MainPage;
