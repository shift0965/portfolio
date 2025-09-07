import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Home = (props) => {
  const [typeString, setTypeString] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypeString(
        props.isActive ? ["A software engineer", ""] : [""]
      );
    }, 800);
    return () => clearTimeout(timer);
  }, [props.isActive]);

  return (
    <section id="home" className="container">
      <h3 className="md:mb-48 mb-16">Hi, I am</h3>
      <div
        className={`${
          props.isActive
            ? ["opacity-100 translate-x-0"]
            : ["opacity-0 -translate-x-28"]
        } absolute duration-700`}
      >
        <h1>
          <span className="text-secondary-second">Jackie</span> Chen
        </h1>
      </div>
      <div className="typer md:text-2xl text-l">
        <span className=" text-tx font-bold">
          <Typewriter
            options={{
              strings: typeString,
              loop: true,
              autoStart: true,
              delay: 80,
              deleteSpeed: 40
            }}
          />
        </span>
      </div>
    </section>
  );
};

export default Home;
