import { projectInfo } from "./Information";
import { BsArrowLeft, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swipers = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const swiperRef = useRef(null);
  const printoutNum = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    // health check for each project
    const checkProjects = async () => {
      const results = await Promise.all(
        projectInfo.map(async (item) => {
          try {
            const res = await fetch(item.href, { method: "HEAD" });
            return res.ok ? item : null;
          } catch (err) {
            return null;
          }
        })
      );
      setProjects(results.filter(Boolean));
    };
    checkProjects();
  }, []);

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === Math.max(0, projects.length - 1);

  return (
    <Swiper
      onActiveIndexChange={printoutNum}
      onSwiper={(s) => (swiperRef.current = s)}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className={`${
        props.isActive
          ? ["opacity-100 translate-x-0"]
          : ["opacity-0 translate-x-32"]
      }
    mySwiper md:left-1/2 xl:left-[60%] md:absolute 2xl:w-[420px] md:w-[320px] w-[240px] duration-700`}
    >
      {projects.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" w-full md:py-[50px] py-[10px] px-5 grid grid-col-1 justify-center overflow-hidden">
              <div className="h-44 flex justify-center">{item.img}</div>
              <div className="data lg:mt-5 mt-4">
                <h4 className=" font-bold">{item.title}</h4>
                <p className="lg:mt-[14px] mt-2 font-bold text-secondary">
                  {item.subtitle}
                </p>
                <p className="md:mt-2 mt-1 text-light whitespace-pre-line">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  className="rounded-2xl py-1.5 px-7 inline-block md:mt-7 mt-5 duration-300 bg-secondary-second 
                  hover:bg-secondary hover:text-primary opacity-90 text-tx font-bold"
                >
                  Demo
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div
        className={`w-full flex justify-center mt-3 duration-500 z-10 md:bottom-20 md:left-2/3 ${
          activeIndex === 0 ? "" : " -translate-x-72 opacity-0"
        }`}
      >
        <p className="md:flex items-center lg:mt-4 mt-1 hidden">
          <BsArrowLeft className=" mr-2" />
          swipe the card left
        </p>
      </div>
      <div className="md:hidden absolute -mb-4 inset-x-0 -bottom-10 flex items-center justify-between px-4">
        <button
          type="button"
          aria-label="Previous"
          disabled={atStart}
          onClick={() => swiperRef.current?.slidePrev()}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold
            bg-transparent border border-white/20 text-white
            ${atStart ? "opacity-40 cursor-not-allowed" : "active:scale-95"}`}
        >
          <BsChevronLeft />
          Prev
        </button>

        <button
          type="button"
          aria-label="Next"
          disabled={atEnd}
          onClick={() => swiperRef.current?.slideNext()}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold
            bg-transparent border border-white/20 text-white
            ${atEnd ? "opacity-40 cursor-not-allowed" : "active:scale-95"}`}
        >
          Next
          <BsChevronRight />
        </button>
      </div>
    </Swiper>
  );
};

export default Swipers;
