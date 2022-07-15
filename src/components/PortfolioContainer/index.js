import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";

function PortfolioContainer({ currentSection }) {
  // logic to conditionally render each section (About, Projects, Contact, and Resume)
  const renderSection = () => {
    if (currentSection === "About") {
      return <About />;
    } else if (currentSection === "Portfolio") {
      return <Portfolio />;
    }
  };

  return <main className="container">{renderSection()}</main>;
}

export default PortfolioContainer;
