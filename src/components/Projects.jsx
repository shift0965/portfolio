import Swipers from "./Swipers";

const Projects = (props) => {
  return (
    <section id="projects" className="container md:flex-row">
      <div className="head mb-4 md:absolute md:top-48 text-tx-500 md:text-left xl:-left-8 md:left-0">
        <h2
          className={`${
            props.isActive
              ? ["opacity-100 translate-x-0"]
              : ["opacity-0 -translate-x-28"]
          } duration-700`}
        >
          Portfolio
        </h2>
        <div className="md:block hidden text-light ">
          <h3 className="md:mt-[76px] xl:mt-[90px] md:opacity-90">
            Swipt into
          </h3>
          <h3 className="mt-5 ml-10">
            My <strong className="text-secondary">Journey</strong>
          </h3>
        </div>
      </div>
      <Swipers isActive={props.isActive} />
    </section>
  );
};

export default Projects;
