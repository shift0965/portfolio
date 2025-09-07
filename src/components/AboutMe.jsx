import { personalInfo } from "./Information";
import lightBulb from "./imgs/lightBulb.png"

const AboutMe = (props) => {
  return (
    <section id="contact" className="container">
      <div className="head md:absolute text-tx-500 md:text-left xl:-left-18 md:-left-5 pb-2">
        <h2
          className={`${
            props.isActive
              ? ["opacity-100 translate-x-0"]
              : ["opacity-0 -translate-x-28"]
          } duration-700`}
        >
          About Me
        </h2>
        <div className="mt-4 md:mt-[42px] xl:mt-[64px] md:ml-4">
          {personalInfo.map((item, index) => {
            return (
              <div
                className={`flex items-center md:mb-5 mb-3 group ${
                  item.click ? "cursor-pointer" : "cursor-default"
                }`}
                key={index}
                onClick={item.click}
              >
                <div className="text-2xl text-secondary-second mr-3 group-hover:text-secondary duration-300">
                  {item.icon}
                </div>
                <div
                  className={item.click ? "cursor-pointer" : "cursor-default"}
                >
                  <h5 className="text-left">{item.title}</h5>
                  <p className="text-left text-gray-500">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`${
          props.isActive
            ? ["opacity-100 md:-translate-x-1/2"]
            : ["opacity-0 md:translate-x-0 translate-x-28"]
        }
        md:absolute md:left-3/4 2xl:w-96 md:w-80 w-60 duration-700`}
      >
        <img src={lightBulb}>
        </img>
      </div>
    </section>
  );
};

export default AboutMe;