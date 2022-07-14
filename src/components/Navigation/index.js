import React from "react";

function Nav() {
  return (
    <nav className="flex-row">
      <a className="ml-2 my-1 px-2 mx-5 py-1 text-dark" href="#about">
        About Me
      </a>
      <a className="ml-2 my-1 px-2 mx-5 py-1 text-dark" href="#portfolio">
        Portfolio
      </a>
      <a className="ml-2 my-1 px-2 mx-5 py-1 text-dark" href="#contact">
        Contact
      </a>
      <a className="ml-2 my-1 px-2 mx-5 py-1 text-dark" href="#resume">
        Resume
      </a>
    </nav>
  );
}

export default Nav;
