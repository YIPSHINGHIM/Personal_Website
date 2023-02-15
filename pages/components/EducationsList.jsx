import { Component } from "react";
import School from "./School";

export default class EducationsList extends Component {
  render() {
    return (
      <div className="EducationsList md:grid grid-cols-12">
        <div
          // style={{ background: "red" }}
          class="EducationsList_left md:col-span-4"
        >
          <h2 className="text-4xl py-1 font-bold">Education</h2>
        </div>
        <div
          // style={{ background: "blue" }}
          class="EducationsList_right md:col-span-8"
        >
          <School />
          <School />
        </div>
      </div>
    );
  }
}
