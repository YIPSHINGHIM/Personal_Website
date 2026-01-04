function SkillList() {
  return (
    <div className="pt-10 dark:text-gray-300">
      <div className="SkillList md:grid grid-cols-12">
        <div className="SkillList_left md:col-span-4">
          <h2 className="text-4xl py-1 font-bold ">
            Key Skills<span className="text-cyan-600">.</span>
          </h2>
        </div>
        <div className="SkillList_right md:col-span-8">
          <div className="People_Skills">
            <h2 className="text-3xl py-1 font-bold ">People Skills : </h2>
            <div className="PeopleSkill_inside md:grid grid-cols-2">
              <div className="PeopleSkill_left">
                <ul className="list-disc list-inside">
                  <li>Team Leadership</li>
                  <li>Teamwork Skills</li>
                </ul>
              </div>

              <div className="PeopleSkill_left">
                <ul className="list-disc list-inside">
                  <li>Conflict Management</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>

          <br />

          <div className="Coding_Skills">
            <h2 className="text-3xl py-1 font-bold ">Coding Skills : </h2>

            <div className="Coding_Skills_inside grid grid-cols-2">
              {/* Proficient */}
              <div className="Proficient ">
                <h3 className="text-2xl py-1 font-semibold">Proficient:</h3>
                <div className="Proficient_inside md:grid grid-cols-2">
                  <div className="Proficient_left">
                    <ul className="list-disc list-inside">
                      <li>React.JS</li>
                      <li>WebRTC</li>
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>Docker</li>
                      <li>Git</li>
                    </ul>
                  </div>

                  <div className="Proficient_right/">
                    <ul className="list-disc list-inside">
                      <li>Django</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SQL</li>
                      <li>Security Compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Familiar */}
              <div className="Familiar ">
                <h3 className="text-2xl py-1 font-semibold">Familiar:</h3>
                <div className="Familiar_inside md:grid grid-cols-2">
                  <div className="Familiar_left">
                    <ul className="list-disc list-inside">
                      <li>Next.js</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Tailwind CSS</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>

                  <div className="Familiar_right/">
                    <ul className="list-disc list-inside">
                      <li>AWS Cloud Service</li>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                      <li>Java</li>
                      <li>FIPS Compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>

      <hr />
    </div>
  );
}

export default SkillList;
