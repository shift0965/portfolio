import AboutMe from "./AboutMe";
import Home from "./Home";
import Projects from "./Projects";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import { useEffect } from "react";
import { FullPage, Slide } from "react-full-page";

const MainPage = () => {
  const [currPage, setCurrPage] = useState(null);

  const DELAY_TIME = 700;
  const delaySetCurrPage = (value) => {
    if (currPage !== value && currPage !== "pending") {
      setCurrPage("pending");
      setTimeout(() => {
        setCurrPage(value);
      }, DELAY_TIME);
    }
  };

  const CustomControls = (props) => {
    const currentSlideIndex = props.getCurrentSlideIndex();
    useEffect(() => {
      if (currentSlideIndex === 0) delaySetCurrPage("home");
      if (currentSlideIndex === 1) delaySetCurrPage("projects");
      if (currentSlideIndex === 2) delaySetCurrPage("aboutMe");
      }, [currentSlideIndex]);
    return null;
  };

  return (
  <motion.div
      initial={{ x: -window.innerWidth, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.7 }}
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
        <div className={`${currPage === "projects" ? "active" : ""} navbtn`}>
          <div className="navline"></div>
        </div>
        <div className={`${currPage === "aboutMe" ? "active" : ""} navbtn`}>
          <div className="navline"></div>
        </div>
      </div>

      <FullPage controls={CustomControls} duration={1000}>
        <Slide>
          <Home isActive={currPage === "home"} />
        </Slide>
        <Slide>
          <Projects isActive={currPage === "projects"} />
        </Slide>
        <Slide>
          <AboutMe isActive={currPage === "aboutMe"} />
        </Slide>
      </FullPage>
    </motion.div>
  );
};

export default MainPage;
