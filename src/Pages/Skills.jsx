import { useState } from "react";
// Skills Components
const SkillCard = ({ name, category }) => (
  <div className="bg-card rounded-lg p-2 hover:bg-gray-600 transition-colors duration-200">
    <h3 className="text-white text-center font-medium text-lg">{name}</h3>
    <p className="text-gray-400 text-sm text-center mt-1 capitalize">
      {category}
    </p>
  </div>
);

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("tech");

  const skillsData = {
    tech: [
      { name: "Wordpress", category: "development" },
      { name: "Git", category: "tools" },
      { name: "JavaScript", category: "programming" },
      { name: "MongoDb", category: "database" },
      { name: "React", category: "framework" },
      { name: "SvelteKit", category: "framework" },
      { name: "Tailwind", category: "styling" },
      { name: "Typescript", category: "programming" },
      { name: "Node.js", category: "backend" },
      { name: "Swift", category: "programming" },
      { name: "Angular", category: "framework" },
    ],

    softSkills: [
      { name: "Communicative" },
      { name: "Calm" },
      { name: "Structured" },
      { name: "Easygoing" },
      { name: "Good teammate" },
    ],
    languages: [
      { name: "Swedish", category: "native" },
      { name: "English", category: "advanced" },
      { name: "French", category: "advanced" },
      { name: "Spanish", category: "advanced" },
      { name: "Italian", category: "intermediate" },
    ],
  };

  const TabButton = ({ tabKey, label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`px-6 py-2 w-fit cursor-pointer rounded-md font-medium transition-colors duration-200 ${
        isActive ? "bg-accent text-white" : "text-gray-400 hover:text-gray-300"
      }`}
    >
      {label}
    </button>
  );

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeTab].map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              category={skill.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
