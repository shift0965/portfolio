import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

import me_hang_md_bgremoved from "./imgs/me_hang_1024_768_bgremoved.png";
import me_hang_sm_bgremoved from "./imgs/me_hang_614_768_bgremoved.png";

import { Link } from "react-router-dom";

const About = (props) => {
  const [typeString, setTypeString] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTypeString(
        props.isActive ? ["Web developer", "Backend engineer"] : [""]
      );
    }, 500);
  }, [props.isActive]);

  return (
    <section id="about" className="container">
      <div className="main_area flex h-full items-center md:flex-row flex-col justify-center w-full">
        <h1
          className={`${
            props.isActive
              ? ["opacity-100 translate-x-0"]
              : ["opacity-0 -translate-x-28"]
          } 
                            md:absolute md:top-1/4 xl:-translate-y-1/2 md:-left-14 md:ml-0 ml-5 text-tx-500 z-10 order-2 mt-5 w-full text-left duration-700`}
        >
          About <span className=" text-secondary-second">me</span>
        </h1>

        <div
          className={`${
            props.isActive
              ? ["opacity-100 translate-x-0"]
              : ["opacity-0 translate-x-32"]
          }
                                flex img_container md:w-7/12 w-fit md:h-fit h-1/2 md:ml-auto md:mt-0 md:mr-0 ml-5 mr-5 relative md:order-3 order-1 duration-700 overflow-hidden`}
        >
          <img
            src={me_hang_md_bgremoved}
            alt="me"
            className="h-full rounded-xl mx-auto object-right duration-300 md:block hidden bg-light/70"
          />
          <img
            src={me_hang_sm_bgremoved}
            alt="me"
            className="h-full rounded-md mx-auto duration-300 md:hidden block bg-light/70"
          />
        </div>

        <div className="flex flex-col lg:mt-24 md:mt-14 mt-0 md:ml-0 ml-5 md:w-5/12 w-full md:order-2 order-3">
          <div className="typer md:mt-16 mt-3 md:text-4xl text-xl flex md:flex-col flex-row text-left">
            <span className=" text-light mr-2 mb-2">I am a </span>
            <span className=" text-tx font-bold">
              <Typewriter
                options={{
                  strings: typeString,
                  loop: true,
                  autoStart: true,
                }}
              />
            </span>
          </div>

          <Link
            to="/aboutPage"
            className="btn md:mt-12 mt-7 md:mx-2 mx-auto text-base"
          >
            know more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
