import React, { useState } from "react";

function Footer() {
  const [contactLinks] = useState([
    // {
    //   name: "email",
    //   link: "mailto:debbieneflas@gmail.com",
    //   icon: "fa-solid fa-envelope",
    // },
    // {
    //   name: "phone",
    //   link: "tel:+16263771363",
    //   icon: "fa-solid fa-phone",
    // },
    {
      name: "github",
      link: "https://github.com/dneflas",
      icon: "fa-brands fa-github",
    },
    {
      name: "linkedIn",
      link: "https://www.linkedin.com/in/debbieneflas/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "email",
      link: "mailto:debbieneflasdev@gmail.com",
      icon: "fa-solid fa-envelope",
    },
  ]);
  return (
    <div className="flex-row justify-space-between mt-3 mb-5 container">
      <div>
        <h4>Interested in working together?</h4>
        <button className="btn primary mr-2">Get In Touch</button>
        <button className="btn secondary">Browse Projects</button>
      </div>
      <div className="flex-row align-end">
        {contactLinks.map((link) => (
          <div className="col-2 text-center" key={link.name}>
            <a
              href={link.link}
              className="ml-2 my-1 px-2 py-1 text-dark icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Footer;
