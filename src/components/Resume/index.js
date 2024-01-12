import React from "react";
import resume from "../../assets/resume.pdf";

function Resume() {
  return (
    <section className="my-5">
      <h2>Resume</h2>
      <button className="btn">
        <a href={resume} download="Debbie_Neflas.pdf">
          Download Resume
        </a>
      </button>

      <p className="my-5">
        Full-stack web developer, with recent Coding Bootcamp completion
        certificate. Experience building MERN stack applications. Highly
        analytical, motivated and skilled at solving programming problems. Work
        well both independently and in a team environment.
      </p>
      <h5>Frontend:</h5>
      <p>
        ReactJS, HTML5, CSS, Responsive Design, Javascript, jQuery, Bootstrap,
        AJAX{" "}
      </p>
      <h5>Backend:</h5>
      <p>MySQL, ORM, MongoDB, Express, Node, Handlebars, GraphQL, Webpack</p>
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
