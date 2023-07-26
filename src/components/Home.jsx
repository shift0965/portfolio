import React from "react";

const Home = (props) => {
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
    </section>
  );
};

export default Home;
