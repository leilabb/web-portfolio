//ProjectCard Component
const ProjectCard = ({ title, description, tags, link, githubLink }) => (
  <div className="h-full relative cursor-pointer bg-[#262626] rounded-lg p-6 hover:bg-gray-800 transition-colors duration-200 flex flex-col">
    <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
    <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
      {description}
    </p>
    <a href={link} target="_blank">
      <button
        className="flex w-fit items-center cursor-pointer border border-white
                   text-white mt-4 px-8 py-2 rounded-full bordertransition-all duration-300 text-sm"
      >
        <span> Go To Project</span>
      </button>
    </a>
    <a className="md:text-sm" href={githubLink}>
      <p className="block hover:underline m-2 pb-2">See project on Github</p>{" "}
    </a>

    <div className="mt-auto">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-gray-600 text-gray-300 mx-2 px-3 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      title: "Signup Page",
      description:
        "A simple sign up page where you can create username and password, log in, log out and delete your user.",
      tags: ["Node.js", "MongoDb", "Render"],
      link: "https://signup-hmtk.onrender.com/login",
      githubLink: "https://github.com/leilabb/signup",
    },
    {
      title: "Resume Builder",
      description:
        "A tool I made for building my own resume. You can add your job experience, preview your resume and take a screenshot of it.",
      tags: ["React", "Tailwind", "Firebase"],
      link: "https://cv-app-9f8d7.web.app/cvBuilder",
      githubLink: "https://github.com/leilabb/cv-builder",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
