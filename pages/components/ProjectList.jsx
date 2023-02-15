import { Component } from "react";
import Project from "./Project";

export default class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        <h2 className="text-4xl py-1 font-bold ">Project</h2>
        <div className="grid md:grid-cols-3 gap-4 lg:grid-cols-4 gap-3">
          <Project />
          <Project />
          <Project />

          <Project />
          <Project />
        </div>
      </div>
    );
  }
}
