import Experience from "./Experience";

function ExperiencesList() {
  const obj1 = {
    Title: "Software Developer",
    Company: "Content Guru",
    Date: "JAN 2024 – PRESENT",
    details: [
      "Led frontend development and architecture for a React-based video conferencing platform within a CCaaS product used by enterprise and government clients",
      "Designed scalable frontend structures for real-time video conferencing, screen monitoring and user-to-user messaging",
      "Maintained and optimised global WebRTC infrastructure (iPath) used across 50+ countries",
      "Selected for a specialised team delivering FedRAMP High readiness and audit success",
      "Led FedRAMP compliance efforts including container hardening and signing, vulnerability scanning, automated image security enforcement, and FIPS compliance",
    ],
  };

  const obj2 = {
    Title: "Graduate Software Engineer",
    Company: "Content Guru",
    Date: "SEP 2023 – DEC 2023",
    details: [
      "Contributed to frontend development for enterprise CCaaS platform",
      "Worked with React and WebRTC technologies",
      "Participated in code reviews and team collaboration",
      "Supported deployment and maintenance of production systems",
    ],
  };

  const obj3 = {
    Title: "Event Support Crew",
    Company: "Royal Holloway Students' Union",
    Date: "SEP 2022 – AUG 2023",
    details: [
      "Worked as part of a team to support the general running of Students' Union venues, with specific responsibility for event support equipment set-up, late-night door entry operation, and ensuring a safe and welcoming environment",
      "Demonstrated strong conflict management skills by de-escalating difficult situations, maintaining a calm and professional demeanour, and seeking assistance from appropriate resources when necessary",
      "Utilized problem-solving skills to identify and troubleshoot issues related to venue set-up, technical equipment, and crowd control, resulting in successful events with no major incidents",
      "Worked collaboratively with team members to divide responsibilities, communicate effectively, and support one another to ensure efficient and effective event operations",
      "Consistently received positive feedback from venue management, event organizers, and customers for professionalism, attentiveness, and attention to detail",
    ],
  };

  const obj4 = {
    Title: "Full Stack Web Developer Intern",
    Company: "Oliver McCourty Ltd",
    Date: "JUN 2022 – SEP 2022",
    details: [
      "Acted as a Scrum Master to facilitate Agile development and manage project timelines and progress",
      "Collaborated with cross-functional teams to launch the company's website using AWS Elastic Beanstalk",
      "Developed RESTful APIs using the Django framework and SQL database",
      "Integrated the Stripe payment system to support the backend",
      "Used HTML, CSS, and React to develop the frontend",
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
          <Experience {...obj3} />
          <Experience {...obj4} />
        </div>
      </div>

      <hr />
    </div>
  );
}

export default ExperiencesList;
