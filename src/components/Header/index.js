import React from "react";
import Nav from "../Navigation";

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <div className="container flex-row justify-space-between align-center pt-3">
        <h1 className="page-title py-2 px-3">Debbie Neflas</h1>
        <Nav
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
    </header>
  );
}

export default Header;
