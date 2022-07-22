import React from "react";
import Project from "../Project";

function Portfolio() {
  return (
    <section className="my-5" id="portfolio">
      <h2 data-testid="portfolioH2">Portfolio</h2>
      <Project></Project>
    </section>
  );
}

export default Portfolio;
