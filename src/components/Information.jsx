import {
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import sorting from "./imgs/sorting.jpg";
import tedxNSYSU from "./imgs/tedx.png";
import letscode from "./imgs/letscode.png";
import shiportfolio from "./imgs/shiportfolio.png";

export const projectInfo = [
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
    img: <img src={tedxNSYSU} alt="tedx" className="" />,
    title: "TedxNSYSU",
    subtitle: "Event page",
    description:
      "18 minutes is short enough to spark interest, yet long enough to change your life.",
    href: "https://shift0965.github.io/tedxnsysu/",
  },
  {
    img: (
      <img
        src={shiportfolio}
        alt="shiportfolio"
        className="h-full max-h-full"
      />
    ),
    title: "Shih's Portfolio",
    subtitle: "Portfolio page",
    description: "A English professor who inspired and supported me a lot.",
    href: "https://shift0965.github.io/shiportfolio/",
  },
];

export const personalInfo = [
  {
    title: "Linkedin",
    text: "Jackie",
    icon: <AiOutlineLinkedin />,
    click: () => {
      window.open("https://www.linkedin.com/in/jackie0809");
    },
  },
  {
    title: "Email",
    text: "shift0965@gmail.com",
    icon: <AiOutlineMail />,
    click: () => {
      navigator.clipboard.writeText("shift0965@gmail.com")
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
    },
  }
];