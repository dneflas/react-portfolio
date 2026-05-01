import React from "react";
import { Link } from "react-router-dom";

function Nav({ currentSection, setCurrentSection }) {
  return (
    <nav className="flex-row pt-4">
      <Link
        className={`${currentSection === "home" && "nav-active"}`}
        data-testid="about"
        onClick={() => setCurrentSection("home")}
        to="/react-portfolio/home"
      >
        HOME
      </Link>
      <Link
        className={` ${currentSection === "portfolio" && "nav-active"}`}
        data-testid="portfolio"
        onClick={() => setCurrentSection("portfolio")}
        to="/react-portfolio/portfolio"
      >
        PORTFOLIO
      </Link>
      <Link
        className={` ${currentSection === "contact" && "nav-active"}`}
        data-testid="contact"
        onClick={() => setCurrentSection("contact")}
        to="/react-portfolio/contact"
      >
        CONTACT
      </Link>
      <Link
        className={` ${currentSection === "resume" && "nav-active"}`}
        data-testid="resume"
        onClick={() => setCurrentSection("resume")}
        to="/react-portfolio/resume"
      >
        RESUME
      </Link>
    </nav>
  );
}

export default Nav;
