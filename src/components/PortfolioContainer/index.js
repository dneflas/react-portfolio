import React from "react";
import About from "../About";

function PortfolioContainer({ currentSection }) {
  // logic to conditionally render each section (About, Projects, Contact, and Resume)
  const renderSection = () => {
    if (currentSection === "About") {
      return <About />;
    }
  };

  return (
    <main>
      <h1>This is the portfolio container section</h1>
      {renderSection()}
    </main>
  );
}

export default PortfolioContainer;
