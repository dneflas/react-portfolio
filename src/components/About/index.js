import React from "react";
import profilePic from "../../assets/profile.png";

function About() {
  return (
    <section className="my-5" id="about">
      <h2> About Me</h2>
      <div className="text-center">
        <img src={profilePic} className="mt-5" alt="headshot" />
      </div>
      <h5 className="text-center my-3 pt-5 pb-3">
        Hi, I'm Debbie - A full-stack web developer based in Culver City, CA
      </h5>
      <p>
        A full-stack web developer with a recently earned certificate in
        full-stack development from UCLA Extensions. I am Javascript-fluent with
        developed skills in Node.js, React.js, and mobile-first responsive
        design, with an eye for catching details. I have experience building
        single-page MERN stack applications. I’ve worked on teams of four to
        develop an inventory management application and a press-list management
        application for local businesses. I am looking forward to joining a
        quality-driven team to approach programming challenges from different
        angles, and to engage in meaningful development.
      </p>
    </section>
  );
}

export default About;
