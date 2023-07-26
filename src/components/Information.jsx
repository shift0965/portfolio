import { AiTwotoneBuild, AiFillDatabase } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";
import {
  AiOutlineMail,
  AiOutlineAppstoreAdd,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import sorting from "./imgs/sorting.jpg";
import tedxNSYSU from "./imgs/tedx.png";

import js from "./imgs/js.png";
import react from "./imgs/atom.png";
import css from "./imgs/css-3.png";
import html from "./imgs/html-5.png";
import letscode from "./imgs/letscode.png";
//import java from './imgs/java.png'
//import python from './imgs/python.png'
import postman from "./imgs/postman.png";
import express from "./imgs/expressjs.png";
import mongodb from "./imgs/mongodb.png";
import tailwind from "./imgs/tailwind.png";
import nodejs from "./imgs/nodejs.png";
import shiportfolio from "./imgs/shiportfolio.png";

export const project_info = [
  {
    img: (
      <img src={letscode} alt="letscode" className="w-[80%] object-contain" />
    ),
    title: "LetsCode",
    subtitle: "Coding Contest Web",
    description: `Code together, code for fun! 
    A platform Inspired by LeetCode and Kahoot.`,
    href: "https://letscode.courater.com/",
  },
  {
    img: <img src={tedxNSYSU} alt="tedx" className="" />,
    title: "TedxNSYSU",
    subtitle: "Event page",
    description:
      "18 minutes is short enough to create interest, long enough to change your life.",
    href: "https://shift0965.github.io/tedxnsysu/",
  },
  {
    img: (
      <img
        src={sorting}
        alt="sorting visualizer"
        className="h-full max-h-full"
      />
    ),
    title: "Sorting visualizer",
    subtitle: "React page",
    description:
      "How many sorting alogrithms do you know? Do you know how they work?",
    href: "https://shift0965.github.io/sorting-visualizer/",
  },
  {
    img: (
      <img
        src={shiportfolio}
        alt="shiportfolio"
        className="h-full max-h-full"
      />
    ),
    title: `Shih's Portfolio`,
    subtitle: "Portfolio page",
    description: "A English professor who inspired me and supported me a lot.",
    href: "https://shift0965.github.io/shiportfolio/",
  },
];

export const skill_info = [
  {
    title: "Front-end",
    describe: "",
    icon: <AiTwotoneBuild className=" h-full w-2/3 text-secondary-second" />,
    childSet: [
      {
        setName: "Langauge",
        skillSet: [
          {
            icon: <img src={html} alt="icon" />,
            skillName: "HTML",
          },
          {
            icon: <img src={css} alt="icon" />,
            skillName: "CSS",
          },
          {
            icon: <img src={js} alt="icon" />,
            skillName: "JavaScript",
          },
        ],
      },
      {
        setName: "Framework",
        skillSet: [
          {
            icon: <img src={react} alt="icon" />,
            skillName: "React",
          },
          {
            icon: <img src={tailwind} alt="icon" />,
            skillName: "Tailwind",
          },
        ],
      },
    ],
  },
  {
    title: "Back-end",
    describe: "",
    icon: <AiFillDatabase className=" h-full w-2/3 text-secondary-second" />,
    childSet: [
      {
        setName: "Database",
        skillSet: [
          {
            icon: <img src={mongodb} alt="icon" />,
            skillName: "Mongodb",
          },
        ],
      },
      {
        setName: "Platform and framework",
        skillSet: [
          {
            icon: <img src={nodejs} alt="icon" />,
            skillName: "Node.js",
          },
          {
            icon: <img src={express} alt="icon" />,
            skillName: "Express",
          },
        ],
      },
    ],
  },
];

export const education = [
  {
    title: "Bacholar of Electrical Engineering",
    school: "National Sun Yat sen Univerisity - Taiwan",
    time: "2018 - 2022",
  },
  {
    title: "Exchange Program",
    school: "Temple Univerisity - U.S.",
    time: "Jan - May 2022",
  },
  {
    title: "Back-End Engineer",
    school: "AppWorks School",
    time: "Apr - Aug 2022",
  },
];

export const personalInfo = [
  {
    title: "Full Name",
    text: "HungSheng Chen",
    icon: <BsPerson />,
    click: null,
  },
  {
    title: "Location",
    text: "New Taipei City",
    icon: <GoLocation />,
    click: null,
  },
  {
    title: "Email",
    text: "shift0965@gmail.com",
    icon: <AiOutlineMail />,
    click: () => {
      window.open("mailto:shift0965@gmail.com");
    },
  },
  {
    title: "Github",
    text: "github.com/shift0965",
    icon: <VscGithubAlt />,
    click: () => {
      window.open("https://github.com/shift0965");
    },
  },
  {
    title: "Linkedin",
    text: "Jackie",
    icon: <AiOutlineLinkedin />,
    click: () => {
      window.open("https://www.linkedin.com/in/jackie0809");
    },
  },
];

export const selfIntro = [
  {
    intro: "I am a passionate web designer and developer.",
  },
  {
    intro: "I enjoy programming, dancing, trying new things.",
  },
];

export const service = [
  {
    icon: <AiOutlineAppstoreAdd />,
    title: "UI Design",
    content: ["User Interface", "Interactive elements", "Responsive design"],
  },
  {
    icon: <CgWebsite />,
    title: "Web development",
    content: ["Page development", "Data management"],
  },
];
