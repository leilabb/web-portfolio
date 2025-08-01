import me from "../assets/me.png";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Portfolio Hero Section */}
          <div className="text-center mb-24 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto">
              <div className="lg:w-2/5 max-w-lg">
                <h2 className="text-4xl font-bold text-white mb-8 text-left">
                  Hello, I'm Leila.
                </h2>
                <p className="text-gray-300 text-xl mb-6 leading-relaxed text-left">
                  I'm from Sweden. I like building impactful functionality and
                  improving user experiences. In my professional life, I have
                  mostly worked with websites, both on the business side and on
                  the programming side.
                </p>
                <p className="text-gray-300 text-xl mb-10 leading-relaxed text-left">
                  I have a Bachelor's Degree in{" "}
                  <span className="font-bold">Computer Science </span> from
                  Uppsala University, Sweden, 1.5 years of experience as a
                  developer and a couple of projects.
                </p>
                <div className="flex justify-start">
                  <button
                    className="flex bg-accent hover:bg-accentHover items-center cursor-pointer  
                   text-white px-8 py-2 rounded-lg bordertransition-all duration-300 text-lg"
                  >
                    <a href="#contact">
                      {" "}
                      <span className="text-white">Contact Me</span>
                    </a>
                  </button>
                </div>
              </div>

              <div className="md:w-1/3 mt-14 flex justify-center">
                <img src={me} className="border rounded-full w-70 h-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
