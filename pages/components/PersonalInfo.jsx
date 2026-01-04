import { Component } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import HimPhoto from "./HimPhoto";

export default class PersonalInfo extends Component {
  render() {
    return (
      <>
        <HimPhoto />
        <div className="personal_info text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">
            Shing Him Yip
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl max-w-lg mx-auto dark:text-gray-300">
            Software Developer at Content Guru
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-300">
            Software engineer specialising in frontend architecture, WebRTC,
            and security-critical platforms. I lead React frontend development
            for video conferencing, screen monitoring, and messaging within a
            CCaaS product used by enterprise and government clients globally.
          </p>

          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-300">
            I also maintain large-scale WebRTC infrastructure and contributed
            to achieving FedRAMP High compliance through container security,
            vulnerability scanning, and FIPS compliance.
          </p>

          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-300">
            Skilled in team leadership, problem-solving, and delivering
            enterprise-grade solutions. Experienced in React, WebRTC, Docker,
            Python, JavaScript, and cloud technologies.
          </p>
        </div>

        <div className="social_media_section text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
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
