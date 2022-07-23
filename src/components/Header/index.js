import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Navigation";

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <div
        data-testid="title"
        className="container flex-row justify-space-between align-center pt-3"
      >
        <Link to="/react-portfolio">
          <h1 className="page-title py-2 px-3">Debbie Neflas</h1>
        </Link>
        <Nav
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
    </header>
  );
}

export default Header;
