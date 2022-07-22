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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
}

export default About;
