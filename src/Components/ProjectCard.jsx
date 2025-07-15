export default function ProjectCard({
  title,
  description,
  tags,
  link,
  githubLink,
}) {
  return (
    <div className="h-full relative cursor-pointer bg-[#262626] rounded-lg p-6 hover:bg-gray-800 transition-colors duration-200 flex flex-col">
      <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
        {description}
      </p>
      <a href={link} className="text-link" target="_blank">
        <button
          className="flex bg-secondAccent hover:bg-card hover:text-white w-fit items-center cursor-pointer
                   text-background mt-4 px-8 py-2 rounded-full bordertransition-all duration-300 text-sm"
        >
          <span> Go To Project</span>
        </button>
      </a>
      <a
        className="md:text-sm block text-link hover:underline m-2 pb-2"
        href={githubLink}
        target="_blank"
      >
        Or see project on Github
      </a>

      <div className="mt-auto flex">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-accent text-gray-300 mx-1 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
