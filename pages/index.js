import Head from "next/head";

import { useState } from "react";
import EducationsList from "./components/EducationsList";
import ExperiencesList from "./components/ExperiencesList";
import NavBar from "./components/NavBar";
import PersonalInfo from "./components/PersonalInfo";
import ProjectList from "./components/ProjectList";
import SkillList from "./SkillList";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shing Him Yip Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
          <PersonalInfo />
        </section>

        {/* Experience section */}
        <section>
          <ExperiencesList />
        </section>

        {/* Education section */}
        <section>
          <EducationsList />
        </section>

        {/* Skill section */}
        <section>
          <SkillList />
        </section>

        {/* Project */}
        <section className="">
          <ProjectList />
        </section>

        {/* footer  */}
        <section>
          <footer style={{ marginTop: "5rem", marginBottom: "3rem" }}>
            <hr />
            <p className="text-center dark:text-gray-300">
              &copy; 2023 Shing Him Yip. The&nbsp;
              <a className="text-blue-500" href="https://github.com/">
                source code of this homepage
              </a>
              &nbsp;is available at Github. Please feel free to extend it for
              your own homepage.
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
