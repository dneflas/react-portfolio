import React from "react";
import Nav from "../Navigation";

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <div
      // data-testid="title"
      // className="container flex-row justify-space-between align-center pt-3"
      >
        <Nav
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
    </header>
  );
}

export default Header;
