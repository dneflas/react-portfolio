import React, { useState } from "react";

import profilePic from "../../assets/profile.png";
import ProjectCarousel from "../ProjectCarousel";

function Home() {
  return (
    <>
      <section className="" id="about">
        <div className=" flex-row px-3 py-5 justify-space-around">
          <div className="my-auto px-auto col-6">
            <p>Hi, I'm Debbie </p>
            <h1>
              <span>Full</span> Stack <br />
              Developer
            </h1>
            <p>
              I'm a full-stack developer based in Culver City. I help small
              businesses fix, improve, and modernize their websites, and build
              simple custom web apps when needed.
            </p>
            <div>
              <button className="btn primary mr-2">Get In Touch</button>
              <button className="btn secondary">Browse Projects</button>
            </div>
          </div>
          <div className="image-wrapper ">
            <img
              src={profilePic}
              className="my-4 col-10 col-md-4 "
              alt="headshot"
            />
          </div>
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
      <section id="project-preview">
        <h2>Projects</h2>
        <div className="full-bleed">
          <ProjectCarousel></ProjectCarousel>
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div className="flex-row justify-space-around">
          <div className="col col-md-3">
            <h3>Frontend</h3>
            <ul>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="col col-md-3">
            <h3>Backend</h3>
            <ul>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>ExpressJS</li>
            </ul>
          </div>
          <div className="col col-md-3">
            <h3>Soft Skills</h3>
            <ul>
              <li>Technical Troubleshooting</li>
              <li>Collaboration</li>
              <li>Problem Solving</li>
              <li>Commitment</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>My Story</h2>
        <p>
          I’m a developer with a background in customer service and business
          operations, which means I don’t just focus on code. I focus on people.
          I enjoy helping clients fix, improve, and build websites that support
          their goals. Whether it’s troubleshooting an issue or creating
          something new, I aim to deliver solutions that are clear, reliable,
          and easy to use.
        </p>
      </section>
    </>
  );
}

export default Home;
