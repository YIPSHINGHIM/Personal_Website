import { Component } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import HimPhoto from "./HimPhoto";

export default class PersonalInfo extends Component {
  render() {
    return (
      <>
        <HimPhoto />
        <div className="personal_info text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">
            Shing Him Yip
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl max-w-lg mx-auto dark: text-gray-300">
            Computer Science Student
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark: text-gray-300">
            I am a highly motivated and enthusiastic computer science student at
            the Royal Holloway University of London with a passion for software
            engineering.
          </p>

          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark: text-gray-300">
            Having a solid foundation in software engineering and practical
            experience in full-stack web development. Proficient in Python and
            JavaScript programming languages, and experienced in using AWS(EB),
            HTML, CSS, React, and Django.
          </p>

          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark: text-gray-300">
            Skilled in project management, team collaboration, and Agile
            methodologies. Also have strong problem-solving skills, and the
            ability to learn quickly.
          </p>
        </div>

        <div className="social_media_section text-5xl flex justify-center gap-16 py-3 text-gray-600 dark: text-gray-300">
          <a href="https://www.linkedin.com/in/shing-him-yip">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/YIPSHINGHIM">
            <AiFillGithub />
          </a>
        </div>

        <hr />
      </>
    );
  }
}
