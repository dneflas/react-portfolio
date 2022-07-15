import React from "react";

function Footer() {
  return (
    <div className="flex-row justify-space-between my-3">
      <div className="col-md-4 col-lg-2 text-center">
        <a
          href="mailto:debbieneflas@gmail.com"
          className="ml-2 my-1 px-2 py-1 text-dark"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <div className="col-md-4 col-lg-2 text-center">
        <a href="tel:+16263771363" className="ml-2 my-1 px-2 py-1 text-dark">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
      <div className="col-md-4 col-lg-2 text-center">
        <a
          href="https://github.com/dneflas"
          className="ml-2 my-1 px-2 py-1 text-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="col-md-4 col-lg-2 text-center">
        <a
          href="https://www.linkedin.com/in/debbieneflas/"
          className="ml-2 my-1 px-2 py-1 text-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="col-md-4 col-lg-2 text-center">
        <a
          href="https://stackoverflow.com/"
          className="ml-2 my-1 px-2 py-1 text-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-stack-overflow"></i>
        </a>
      </div>
    </div>
  );
}
export default Footer;
