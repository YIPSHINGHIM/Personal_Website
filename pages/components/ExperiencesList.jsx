import Experience from "./Experience";

function ExperiencesList() {
  const obj1 = {
    Title: "Full Stack Web Developer Intern",
    Company: "Oliver Mccourty Ltd ",
    Date: "JUNE,2022 – SEP,2022",
    details: [
      "Acted as a Scrum Master to facilitate Agile development and manage project timelines and progress",
      "Collaborated with cross-functional teams to launch the company's website using AWS Elastic Beanstalk",
      "Developed RESTful APIs using the Django framework and SQL database",
      "Integrated the Stripe payment system to support the backend",
      "Used HTML, CSS, and React to develop the frontend",
    ],
  };

  const obj2 = {
    Title: "Event Support Crew",
    Company: "RHUL SU",
    Date: "SEP,2022 – PRESENT",
    details: [
      "Worked as part of a team to support the general running of Students' Union venues, with specific responsibility for event support equipment set-up, late night door entry operation, and ensuring a safe and welcoming environment.",
      "Demonstrated strong conflict management skills by de-escalating difficult situations, maintaining calm and professional demeanor, and seeking assistance from appropriate resources when necessary.",
      "Utilized problem-solving skills to identify and troubleshoot issues related to venue set-up, technical equipment, and crowd control, resulting in successful events with no major incidents.",
      "Worked collaboratively with team members to divide responsibilities, communicate effectively, and support one another to ensure efficient and effective event operations.",
    ],
  };

  return (
    <div className="pt-10 dark:text-gray-300">
      <div className="ExperiencesList md:grid grid-cols-12">
        <div className="ExperiencesList_left md:col-span-4">
          <h2 className="text-4xl py-1 font-bold ">
            Experience<span className="text-cyan-600">.</span>
          </h2>
        </div>
        <div className="ExperiencesList_right md:col-span-8">
          <Experience {...obj1} />
          <Experience {...obj2} />
        </div>
      </div>

      <hr />
    </div>
  );
}

export default ExperiencesList;
