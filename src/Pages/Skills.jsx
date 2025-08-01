import { useState } from "react";
import SkillsData from "../Components/SkillsData";
import SkillCard from "../Components/SkillCard";
import TabButton from "../Components/TabButton";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("tech");

  const categorized = SkillsData.tech.reduce((acc, tech) => {
    if (acc[tech.category]) {
      acc[tech.category].push(tech.name); //push to the array
    } else {
      acc[tech.category] = [tech.name]; //create the array if it doesnt exist
    }
    return acc;
  }, {});

  const techSkillsOrder = [
    { key: "framework", title: "Frameworks" },
    { key: "language", title: "Languages" },
    { key: "backend", title: "Backend" },
    { key: "other", title: "Other" },
  ];

  return (
    <section id="skills" className="md:py-12 py-6">
      <div className="max-w-6xl md:mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-1 inline-flex">
            <TabButton
              tabKey="tech"
              label="Tech"
              isActive={activeTab === "tech"}
              onClick={() => setActiveTab("tech")}
            />
            <TabButton
              tabKey="softSkills"
              label="Soft Skills"
              isActive={activeTab === "softSkills"}
              onClick={() => setActiveTab("softSkills")}
            />
            <TabButton
              tabKey="languages"
              label="Languages"
              isActive={activeTab === "languages"}
              onClick={() => setActiveTab("languages")}
            />
          </div>
        </div>

        {/* {activeTab === "tech" && (
          <>
             <h3 className="text-xl font-semibold capitalize mb-4">
              Frameworks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {categorized.framework.map((framework) => (
                <SkillCard key={framework} name={framework} />
              ))}
            </div>
            <h3 className="text-xl font-semibold capitalize mb-4">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {categorized.language.map((language) => (
                <SkillCard key={language} name={language} />
              ))}
            </div>
            <h3 className="text-xl font-semibold capitalize mb-4">Backend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {categorized.backend.map((backend) => (
                <SkillCard key={backend} name={backend} />
              ))}
            </div>
            <h3 className="text-xl font-semibold capitalize mb-4">Other</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {categorized.other.map((otherTech) => (
                <SkillCard key={otherTech} name={otherTech} />
              ))}
            </div> 
          </>
        )} */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "tech"
            ? techSkillsOrder.map((category) => {
                return (
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold capitalize mb-2">
                      {category.title}
                    </h3>

                    {categorized[category.key].map((framework) => {
                      return (
                        <div className="mb-4">
                          <SkillCard key={framework} name={framework} />
                        </div>
                      );
                    })}
                  </div>
                );
              })
            : SkillsData[activeTab].map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  meta={activeTab === "languages" ? skill.level : ""}
                />
              ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
