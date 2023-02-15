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
            Shing HIm Yip
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl max-w-lg mx-auto">
            title put here
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
            some background Quis esse, dolor esse est magna et ullamco. Esse est
            magna, et ullamco. Et, ullamco ut nulla nostrud. Nulla nostrud et,
            proident. Proident exercitation cillum irure aliquip sed duis.
            Cillum irure, aliquip sed duis reprehenderit occaecat. Sed duis
            reprehenderit occaecat sint in elit esse.
          </p>
        </div>

        <div className="social_media_section text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
      </>
    );
  }
}
