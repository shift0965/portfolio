import { project_info } from "./Information";
import { BsArrowLeft } from "react-icons/bs";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swipers = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const printoutNum = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      onActiveIndexChange={printoutNum}
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
      {project_info.map((item, index) => {
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
                  className=" rounded-2xl py-1.5 px-7 inline-block md:mt-7 mt-5 duration-300
                                                     bg-secondary-second hover:bg-secondary hover:text-primary opacity-90 text-tx font-bold"
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
        <p className="flex items-center lg:mt-4 mt-1">
          <BsArrowLeft className=" mr-2" />
          swipe the card left
        </p>
      </div>
    </Swiper>
  );
};

export default Swipers;
