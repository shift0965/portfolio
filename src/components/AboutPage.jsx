import { Link, useNavigate } from "react-router-dom";
import {
  education,
  personalInfo,
  selfIntro,
  service,
  skill_info,
} from "./Information";
import { VscTriangleDown } from "react-icons/vsc";
import { IoSchoolOutline, IoChevronBackOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { VscDebugStart } from "react-icons/vsc";
import me_smile_bgremoved from "./imgs/me_smile_1000_1400_bgremoved.png";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handaleBack = () => {
    setVisible(false);
    window.scrollTo(0, 0);
    navigate("/");
  };

  return (
    <motion.div
      initial={{ x: window.innerWidth, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="aboutPage bg-tx w-full h-full text-tx-dark"
    >
      <div className="container">
        <div
          className={`min-h-screen h-full flex items-center ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="content grid sm:grid-cols-11 grid-cols-5 items-center gap-4">
            <div className=" col-span-5 sm:order-1 order-0 w-9/12 mx-auto bg-secondary-second/20 rounded-full overflow-hidden flex">
              <img
                src={me_smile_bgremoved}
                alt="me"
                loading="lazy"
                className="w-full"
              />
            </div>

            <div className="col-span-6 text-left flex">
              <div className=" mx-auto w-10/12 mb-5">
                <h5 className=" text-secondary-second"> Hi, I am </h5>
                <h3 className="md:mb-7 mb-3 font-bold">Jackie Chen</h3>
                {selfIntro.map((item, index) => {
                  return (
                    <h5 className=" text-primary mb-1 opacity-80" key={index}>
                      {item.intro}
                    </h5>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="about md:py-14 pb-7 mb-5 w-full">
          <div className="title md:text-left text-center md:ml-8 md:mb-10 mb-5">
            <h3 className="">About</h3>
          </div>

          <div className="flex md:flex-row flex-col">
            <div className="md:ml-auto ml-5 md:w-4/12 text-left mr-auto">
              {personalInfo.map((item, index) => {
                return (
                  <div
                    className={`flex items-center mb-5 group ${
                      item.click ? "cursor-pointer" : "cursor-default"
                    } `}
                    key={index}
                    onClick={item.click}
                  >
                    <div className="text-2xl text-secondary-second mr-3 group-hover:text-secondary duration-300">
                      {item.icon}
                    </div>
                    <div
                      className={
                        item.click ? "cursor-pointer" : "cursor-default"
                      }
                    >
                      <h5 className=" ">{item.title}</h5>
                      <p className=" text-gray-500">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="timeline md:w-7/12 w-full">
              <div className="ml-5 flex items-center mb-7">
                <IoSchoolOutline className="text-2xl text-secondary-second mr-3" />
                <h5>Education & Experience</h5>
              </div>
              {education.map((item, index) => {
                return (
                  <div className="content grid grid-cols-7" key={index}>
                    <div
                      className={`data col-span-3 ${
                        index % 2 === 0 ? "order-1" : "order-3"
                      }`}
                    >
                      <h5>{item.title}</h5>
                      <p className=" text-primary-middle mt-1">{item.school}</p>
                      <p className=" text-tx-dark">{item.time}</p>
                    </div>
                    <div className="line col-span-1 flex justify-center relative order-2">
                      <div className="rounder w-3 h-3 bg-secondary-second rounded-full absolute"></div>
                      <div className="line h-full w-[3.5px] rounded-xl bg-primary border-none"></div>
                      {index === 2 ? (
                        <VscTriangleDown className=" text-primary absolute -bottom-3 text-2xl font-bold"></VscTriangleDown>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div
                      className={`col-span-3 ${
                        index % 2 === 0 ? "order-3" : "order-1"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="service w-full md:py-14 py-7 mb-5">
          <div className="title md:text-left text-center md:ml-8 md:mb-10 mb-5">
            <h3 className="">Service</h3>
          </div>
          <div className="flex md:flex-row flex-col">
            {service.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center mx-auto md:mb-0 mb-5"
                  key={index}
                >
                  <h2 className="mt-5 font-extralight text-secondary-second">
                    {item.icon}
                  </h2>
                  <h4 className=" text-primary md:mt-6 mt-3 font-bold">
                    {item.title}
                  </h4>
                  <div className=" text-left md:mt-5 mt-2">
                    {item.content.map((text, index) => {
                      return (
                        <div
                          className="flex md:mb-3 mb-1 items-center"
                          key={index}
                        >
                          <span className=" text-secondary opacity-60 md:text-base text-xs mr-2">
                            <VscDebugStart />
                          </span>
                          <h5 key={index} className="text-primary opacity-70">
                            {text}
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="skill w-full md:py-10 py-7">
          <div className="title md:text-left text-center md:ml-8 md:mb-12 mb-7">
            <h3 className="">Skills</h3>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:-mx-12">
            {skill_info.map((item, index) => {
              return (
                <div className="w-full mb-10 col-span-1" key={index}>
                  <div
                    className={`xl:w-[300px] md:w-[250px] w-60 duration-300 mx-auto`}
                  >
                    <div className="w-full flex flex-col">
                      <div className="title flex items-center">
                        <div className="w-9 h-9 ml-1 mr-3">{item.icon}</div>
                        <div className="font-bold md:text-2xl text-xl">
                          {item.title}
                        </div>
                      </div>
                    </div>

                    <div className=" w-full md:mt-10 mt-6">
                      {item.childSet.map((childSet, childSetIndex) => {
                        return (
                          <div className="" key={childSetIndex}>
                            <div className="mb-5 flex items-center">
                              <span className=" text-secondary opacity-60 md:text-base text-xs mr-2">
                                <VscDebugStart />
                              </span>
                              <h5 className=" text-primary opacity-70">
                                {childSet.setName}
                              </h5>
                            </div>
                            <div
                              className="skills_title mb-7 grid grid-cols-3 gap-[6px]"
                              key={childSetIndex}
                            >
                              {childSet.skillSet.map((skill, skillIndex) => (
                                <div
                                  className="flex flex-col items-center col-span-1"
                                  key={skillIndex}
                                >
                                  <div className="md:px-[14px] px-2">
                                    {skill.icon}
                                  </div>
                                  <h6 className="text-primary-second mt-1">
                                    {skill.skillName}
                                  </h6>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" flex flex-col py-10 mb-5">
          <button
            onClick={handaleBack}
            className="flex items-center text-secondary-second px-8 py-2 rounded-2xl border-secondary-second border-2 
                                    hover:border-transparent hover:text-tx hover:bg-primary"
          >
            <IoChevronBackOutline className="mr-1 -ml-2 " />
            Back
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
