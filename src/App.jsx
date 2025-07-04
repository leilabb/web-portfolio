import "./index.css";
import Home from "./Pages/Home.jsx";
import Skills from "./Pages/Skills.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./Pages/Footer.jsx";

function App() {
  return (
    <>
      <div className="bg-[#191919] min-h-screen text-white px-6 py-10 font-sans">
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
