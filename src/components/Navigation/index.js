import React from "react";

function Nav({ currentSection, setCurrentSection }) {
  return (
    <nav className="flex-row">
      <a
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "About" && "text-bold"
        }`}
        data-testid="about"
        onClick={() => setCurrentSection("About")}
        href="#about"
      >
        About Me
      </a>
      <a
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "Portfolio" && "text-bold"
        }`}
        data-testid="portfolio"
        onClick={() => setCurrentSection("Portfolio")}
        href="#portfolio"
      >
        Portfolio
      </a>
      <a
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "Contact" && "text-bold"
        }`}
        data-testid="contact"
        onClick={() => setCurrentSection("Contact")}
        href="#contact"
      >
        Contact
      </a>
      <a
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "Resume" && "text-bold"
        }`}
        data-testid="resume"
        onClick={() => setCurrentSection("Resume")}
        href="#resume"
      >
        Resume
      </a>
    </nav>
  );
}

export default Nav;
