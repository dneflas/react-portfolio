import React from "react";
import { Link } from "react-router-dom";

function Nav({ currentSection, setCurrentSection }) {
  return (
    <nav className="flex-row">
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "about" && "nav-active"
        }`}
        data-testid="about"
        onClick={() => setCurrentSection("about")}
        to="/react-portfolio/about"
      >
        About Me
      </Link>
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "portfolio" && "nav-active"
        }`}
        data-testid="portfolio"
        onClick={() => setCurrentSection("portfolio")}
        to="/react-portfolio/portfolio"
      >
        Portfolio
      </Link>
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "contact" && "nav-active"
        }`}
        data-testid="contact"
        onClick={() => setCurrentSection("contact")}
        to="/react-portfolio/contact"
      >
        Contact
      </Link>
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "resume" && "nav-active"
        }`}
        data-testid="resume"
        onClick={() => setCurrentSection("resume")}
        to="/react-portfolio/resume"
      >
        Resume
      </Link>
    </nav>
  );
}

export default Nav;
