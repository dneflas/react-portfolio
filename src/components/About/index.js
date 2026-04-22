import React, { useState } from "react";

import profilePic from "../../assets/profile.png";

function About() {
  return (
    <section className="" id="about">
      <div className=" flex-row px-3 py-5 justify-space-around">
        <div className="my-auto px-auto col-5">
          <p>Hi, I'm Debbie </p>
          <h1>
            <span>Full</span> Stack <br />
            Developer
          </h1>
          <p>
            I'm a full-stack developer based in Culver City. I help small
            businesses fix, improve, and modernize their websites, and build
            simple custom web apps when needed
          </p>
          <div>
            <button className="btn primary mr-2">Get In Touch</button>
            <button className="btn secondary">Browse Projects</button>
          </div>
        </div>
        <img
          src={profilePic}
          className="my-4 col-10 col-md-4"
          alt="headshot"
          width="100px"
        />
      </div>

      {/* <div className={`px-3 ${showMore === false && "display-none"}`}>
        <h2 className="py-2">About Me</h2>
        <p className="mb-2" id="about-text">

          I am a dedicated and passionate full-stack web developer, equipped
          with a recent certificate in full-stack development from UCLA
          Extensions. My journey in the world of web development has been driven
          by a profound understanding of JavaScript, a language I am fluent in,
          and a commitment to honing my skills in Node.js, React.js, and
          mobile-first responsive design. My meticulous attention to detail
          ensures that every project I undertake is executed with precision. I
          have honed my expertise in crafting single-page applications using the
          MERN stack, consistently delivering robust and user-friendly
          solutions. In my previous experiences, I thrived within collaborative
          teams to create impactful applications, such as an inventory
          management system and a press-list management tool, both tailored to
          local businesses' needs. These experiences have not only enhanced my
          technical skills but also nurtured my ability to work effectively with
          others. I am eager to bring my passion for programming and my diverse
          skill set to a quality-driven team. I relish the prospect of tackling
          programming challenges from various perspectives and contributing to
          meaningful software development projects that make a real difference.
          If you're seeking a dedicated and skilled full-stack developer to join
          your team, I'm excited to be considered for the opportunity.
        </p>
      </div> */}
    </section>
  );
}

export default About;
