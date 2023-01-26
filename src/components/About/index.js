import React from "react";
import profilePic from "../../assets/profile.png";

function About() {
  return (
    <section className=" card" id="about">
      <div className="text-center flex-row px-3 justify-space-around">
        <img
          src={profilePic}
          className="my-4 col-2"
          alt="headshot"
          width="100px"
        />
        <h5 className="my-auto px-auto col-9">
          Hi, I'm Debbie - A full-stack web developer based in Culver City, CA
        </h5>
      </div>

      <p className="px-3">
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
