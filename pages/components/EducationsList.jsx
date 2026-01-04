import School from "./School";

const RHUL = {
  Uni: "Royal Holloway, University of London",
  Title: "BSC Computer Science",
  Date: "2020 – 2023",
  Result: "First Class Honours",
};

const HKCC = {
  Uni: "PolyU Hong Kong Community College",
  Title: "Associate's Degree, Engineering",
  Date: "2019 – 2020",
  Result: "GPA: 3.36",
};

function EducationsList() {
  return (
    <div className="pt-10 dark:text-gray-300">
      <div className="EducationsList md:grid grid-cols-12">
        <div
          // style={{ background: "red" }}
          class="EducationsList_left md:col-span-4"
        >
          <h2 className="text-4xl py-1 font-bold">
            Education<span className="text-cyan-600">.</span>
          </h2>
        </div>
        <div
          // style={{ background: "blue" }}
          class="EducationsList_right md:col-span-8"
        >
          <School {...RHUL} />
          <School {...HKCC} />
        </div>
      </div>

      <hr />
    </div>
  );
}

export default EducationsList;
