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
import mysql from "./imgs/mysql.png";
import js from "./imgs/js.png";
import react from "./imgs/atom.png";
import css from "./imgs/css-3.png";
import html from "./imgs/html-5.png";
import letscode from "./imgs/letscode.png";
import express from "./imgs/expressjs.png";
import mongodb from "./imgs/mongodb.png";
import tailwind from "./imgs/tailwind.png";
import nodejs from "./imgs/nodejs.png";
import shiportfolio from "./imgs/shiportfolio.png";
import redis from "./imgs/redis.png";
import socket_io from "./imgs/socket_io.png";
import rds from "./imgs/rds.png";
import ec2 from "./imgs/ec2.png";
import elasticache from "./imgs/elasticache.png";
import docker from "./imgs/docker.png";
import git from "./imgs/git.png";

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
    icon: <AiTwotoneBuild className="h-full w-full text-secondary-second" />,
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
    icon: <AiFillDatabase className=" h-full w-full text-secondary-second" />,
    childSet: [
      {
        setName: "Database",
        skillSet: [
          {
            icon: <img src={mongodb} alt="icon" />,
            skillName: "Mongodb",
          },
          {
            icon: <img src={mysql} className="p-[2px]" alt="icon" />,
            skillName: "Mysql",
          },
          {
            icon: <img src={redis} className="p-[2px]" alt="icon" />,
            skillName: "Redis",
          },
        ],
      },
      {
        setName: "Framework",
        skillSet: [
          {
            icon: <img src={nodejs} className="p-[2px]" alt="icon" />,
            skillName: "Node.js",
          },
          {
            icon: <img src={express} className="p-[4px]" alt="icon" />,
            skillName: "Express",
          },
          {
            icon: <img src={socket_io} className="p-[4px]" alt="icon" />,
            skillName: "Socket.io",
          },
        ],
      },
    ],
  },
  {
    title: "Deployment",
    describe: "",
    icon: <AiFillDatabase className=" h-full w-full text-secondary-second" />,
    childSet: [
      {
        setName: "Aws Cloud",
        skillSet: [
          {
            icon: <img src={ec2} className="p-[2px]" alt="icon" />,
            skillName: "EC2",
          },
          {
            icon: <img src={rds} className="p-[2px]" alt="icon" />,
            skillName: "RDS",
          },
          {
            icon: <img src={elasticache} className="p-[2px]" alt="icon" />,
            skillName: "Elasticache",
          },
        ],
      },
      {
        setName: "Develop",
        skillSet: [
          {
            icon: <img src={docker} alt="icon" />,
            skillName: "Docker",
          },
          {
            icon: <img src={git} className="p-[4px]" alt="icon" />,
            skillName: "Git",
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
