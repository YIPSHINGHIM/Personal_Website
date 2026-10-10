import Image from "next/image";
import { Component } from "react";
import him from "../../public/him-removebg.png";

export default class HimPhoto extends Component {
  render() {
    return (
      <div className="photo_section mx-auto relative bg-linear-to-b/srgb from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image
          className="mt-5 object-cover"
          src={him}
          alt="Shing Him Yip"
          fill
          sizes="(min-width: 768px) 384px, 320px"
        />
      </div>
    );
  }
}
