import React, { useState } from "react";

import profilePic from "../../assets/profile.png";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="text-light" id="about">
      <div className=" flex-row px-3 py-5 justify-space-around">
        <div className="my-auto px-auto col-7">
          <h1 className="intro">Hi, I'm Debbie...</h1>
          <h5>A full-stack web developer based in Culver City, CA</h5>
          <button
            onClick={() => setShowMore(true)}
            className={`btn ${showMore === true && "display-none"}`}
          >
            Read More
          </button>
        </div>
        <img
          src={profilePic}
          className="my-4 col-4"
          alt="headshot"
          width="100px"
        />
      </div>

      <p
        className={`px-3 text-center ${showMore === false && "display-none"}`}
        id="about-text"
      >
        {/* A full-stack web developer with a recently earned certificate in
        full-stack development from UCLA Extensions. I am Javascript-fluent with
        developed skills in Node.js, React.js, and mobile-first responsive
        design, with an eye for catching details. I have experience building
        single-page MERN stack applications. I’ve worked on teams of four to
        develop an inventory management application and a press-list management
        application for local businesses. I am looking forward to joining a
        quality-driven team to approach programming challenges from different
        angles, and to engage in meaningful development. */}
        I am a dedicated and passionate full-stack web developer, equipped with
        a recent certificate in full-stack development from UCLA Extensions. My
        journey in the world of web development has been driven by a profound
        understanding of JavaScript, a language I am fluent in, and a commitment
        to honing my skills in Node.js, React.js, and mobile-first responsive
        design. My meticulous attention to detail ensures that every project I
        undertake is executed with precision. I have honed my expertise in
        crafting single-page applications using the MERN stack, consistently
        delivering robust and user-friendly solutions. In my previous
        experiences, I thrived within collaborative teams to create impactful
        applications, such as an inventory management system and a press-list
        management tool, both tailored to local businesses' needs. These
        experiences have not only enhanced my technical skills but also nurtured
        my ability to work effectively with others. I am eager to bring my
        passion for programming and my diverse skill set to a quality-driven
        team. I relish the prospect of tackling programming challenges from
        various perspectives and contributing to meaningful software development
        projects that make a real difference. If you're seeking a dedicated and
        skilled full-stack developer to join your team, I'm excited to be
        considered for the opportunity.
      </p>
    </section>
  );
}

export default About;
