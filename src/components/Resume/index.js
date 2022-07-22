import React from "react";
import resume from "../../assets/file.pdf";

function Resume() {
  return (
    <section className="my-5">
      <h2>Resume</h2>
      <a href={resume} download>
        Download Resume
      </a>
      <p className="my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h5>Frontend:</h5>
      <p>HTML5, CSS, Responsive Design, Javascript, jQuery, Bootstrap, AJAX </p>
      <h5>Backend:</h5>
      <p>
        MySQL, ORM, MongoDB, Express, ReactJS, Node, Handlebars, GraphQL,
        Webpack
      </p>
      <h5>Education:</h5>
      <p>
        Full-Stack Coding Bootcamp,{" "}
        <span className="italic">UCLA Extensions</span>
        <br />
        BS: Integrated Marketing Communication,{" "}
        <span className="italic">San Diego State University</span>
      </p>
    </section>
  );
}

export default Resume;
