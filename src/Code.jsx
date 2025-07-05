import React, { useState } from "react";

// Home Component
const HomeSection = () => (
  <section id="home" className="min-h-screen flex items-center py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Hello, I'm Jason Chin.
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            I'm a certified expert in{" "}
            <span className="text-blue-400 font-medium">Notion</span>, helping
            busy people like you be more organized and productive.
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            I design and optimize Notion templates to be clutter-free, so you
            can focus on what's important and get things done.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            Book a call
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-gray-600 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-64 h-64 text-white">
              <circle cx="100" cy="60" r="25" fill="currentColor" />
              <rect
                x="85"
                y="85"
                width="30"
                height="40"
                rx="15"
                fill="currentColor"
              />
              <rect
                x="70"
                y="125"
                width="60"
                height="60"
                rx="8"
                fill="currentColor"
              />
              <rect
                x="50"
                y="140"
                width="20"
                height="35"
                rx="10"
                fill="currentColor"
              />
              <rect
                x="130"
                y="140"
                width="20"
                height="35"
                rx="10"
                fill="currentColor"
              />
              <circle
                cx="90"
                cy="55"
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="110"
                cy="55"
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="102"
                y1="45"
                x2="98"
                y2="45"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Navigation Component
const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Jason Chin</div>
          <div className="flex space-x-2">
            <button
              onClick={() => scrollToSection("home")}
              className="px-6 py-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="px-6 py-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="border-t border-gray-700 py-8">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-gray-400">
        © 2025 Jason Chin. Helping you stay organized and productive.
      </p>
    </div>
  </footer>
);

// Main Portfolio Component
const Portfolio = () => {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#282534" }}
    >
      <Navigation />
      <main>
        <HomeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
