import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import ContactForm from "../ContactForm";
import Resume from "../Resume";

function PortfolioContainer({ currentSection }) {
  // logic to conditionally render each section (About, Projects, Contact, and Resume)
  const renderSection = () => {
    if (currentSection === "About") {
      return <About />;
    } else if (currentSection === "Portfolio") {
      return <Portfolio />;
    } else if (currentSection === "Contact") {
      return <ContactForm />;
    } else if (currentSection === "Resume") {
      return <Resume />;
    }
  };

  return <main className="container">{renderSection()}</main>;
}

export default PortfolioContainer;
