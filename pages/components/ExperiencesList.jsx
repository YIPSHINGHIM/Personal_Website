import { Component } from "react";
import Experience from "./Experience";
export default class ExperiencesList extends Component {
  render() {
    return (
      <div className="ExperiencesList md:grid grid-cols-12">
        <div className="ExperiencesList_left md:col-span-4">
          <h2 className="text-4xl py-1 font-bold ">Experience</h2>
        </div>
        <div className="ExperiencesList_right md:col-span-8">
          <Experience />
          <Experience />
        </div>
      </div>
    );
  }
}
