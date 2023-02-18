import { Component } from "react";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSqllite } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { SiDjango, SiFlask, SiSelenium, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Project from "./Project";

const project1 = {
  Name: "Todo List",
  Details:
    "web application using React and Django, with features including adding, editing, and deleting tasks, and fetching data from a REST API.",
  Tools: [
    <FaReact key="React" />,
    <SiDjango key="Django" />,
    <AiFillHtml5 key="HTML" />,
    <DiCss3 key="CSS" />,
    <IoLogoJavascript key="JavaScript" />,
    <DiSqllite key="SQLite" />,
  ],
};

const project2 = {
  Name: "Restaurant Management System",
  Details:
    "Restaurant Management System allowed users to manage table bookings, order placement, and track inventory in real-time, resulting in improved operational efficiency and customer satisfaction.",
  Tools: [
    <SiFlask key="Flask" />,
    <AiFillHtml5 key="HTML" />,
    <DiCss3 key="CSS" />,
    <IoLogoJavascript key="JavaScript" />,
    <DiSqllite key="SQLite" />,
    <AiFillGithub key="Git" />,
  ],
};

const project3 = {
  Name: "Personal Website",
  Details:
    "Designed and developed a responsive and visually personal website using Next.js and Tailwind CSS, showcasing my skills, projects, and experiences while providing a smooth user experience.",
  Tools: [<TbBrandNextjs key="Next.Js" />, <SiTailwindcss key="Tailwindcss" />],
};

const project4 = {
  Name: "Stock Price Message Bot",
  Details:
    "Stock price message bot project using Python, which involved retrieving live stock prices through Alpha Vantage API and delivering customized price alerts to users via Telegram",
  Tools: [<IoLogoPython key="Python" />],
};

const project5 = {
  Name: "Auto Video Uploading Bot",
  Details:
    "Auto Video Uploading Bot using Python and Selenium to automate the process of uploading videos to multiple social media platforms, saving hours of manual work.",
  Tools: [<SiSelenium key="Selenium" />],
};

export default class ProjectList extends Component {
  render() {
    return (
      <div className="pt-10 ">
        <div className="ProjectList">
          <h2 className="text-4xl py-1 font-bold ">Project</h2>
          <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4">
            <Project {...project1} />
            <Project {...project2} />
            <Project {...project3} />
            <Project {...project4} />
            <Project {...project5} />
          </div>
        </div>
      </div>
    );
  }
}
