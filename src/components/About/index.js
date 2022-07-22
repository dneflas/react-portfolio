import React from "react";
import profilePic from "../../assets/profile.png";

function About() {
  return (
    <section className="my-5" id="about">
      <h2> About Me</h2>
      <div className="text-center">
        <img src={profilePic} className="mt-5" alt="headshot" />
      </div>
      <h5 className="text-center my-3 py-5">
        Hi, I'm Debbie - A full-stack web developer based in Culver City, CA
      </h5>
    </section>
  );
}

export default About;
