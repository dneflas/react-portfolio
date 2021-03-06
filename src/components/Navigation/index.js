import React from "react";
import { Link } from "react-router-dom";

function Nav({ currentSection, setCurrentSection }) {
  return (
    <nav className="flex-row">
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "About" && "nav-active"
        }`}
        data-testid="about"
        onClick={() => setCurrentSection("About")}
        to="/react-portfolio/about"
      >
        About Me
      </Link>
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "Portfolio" && "nav-active"
        }`}
        data-testid="portfolio"
        onClick={() => setCurrentSection("Portfolio")}
        to="/react-portfolio/portfolio"
      >
        Portfolio
      </Link>
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "Contact" && "nav-active"
        }`}
        data-testid="contact"
        onClick={() => setCurrentSection("Contact")}
        to="/react-portfolio/contact"
      >
        Contact
      </Link>
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "Resume" && "nav-active"
        }`}
        data-testid="resume"
        onClick={() => setCurrentSection("Resume")}
        to="/react-portfolio/resume"
      >
        Resume
      </Link>
    </nav>
  );
}

export default Nav;
