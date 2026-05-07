import React, { useState } from "react";
import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";
import { send } from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "email") {
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!value.length) {
        setErrorMessage(capitalizeFirstLetter(`${name} is required.`));
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [name]: value });
    }
    console.log(formState);
  }

  function handleSubmit(event) {
    event.preventDefault();

    send(
      "default_service",
      "template_paa5ipo",
      formState,
      "46V0eFry4B4d0hEHE",
    ).then(
      (response) => {
        console.log("SUCCESS", response.status, response.text);
        setEmailSent(true);
      },
      (error) => {
        console.log("FAILED...", error);
        setErrorMessage("Something went wrong!");
      },
    );

    setFormState({
      name: "",
      email: "",
      message: "",
    });
    console.log(formState);
  }

  const [contactLinks] = useState([
    {
      name: "email",
      link: "mailto:debbieneflasdev@gmail.com",
      icon: "fa-solid fa-envelope",
      info: "debbieneflasdev@gmail.com",
    },
    {
      name: "linkedIn",
      link: "https://www.linkedin.com/in/debbieneflas/",
      icon: "fa-brands fa-linkedin",
      info: "linkedin.com/in/debbieneflas",
    },
    {
      name: "github",
      link: "https://github.com/dneflas",
      icon: "fa-brands fa-github",
      info: "github.com/dneflas",
    },
  ]);

  const { name, email, message } = formState;
  return (
    <div className="flex-row justify-space-around my-5">
      <section className="col-12 col-md-4">
        <h2>Let's Connect</h2>
        <p>
          Whether it’s a big idea or a quick hello, my inbox is always open 😊
        </p>
        <ul className="mt-5">
          {contactLinks.map((link) => (
            <li key={link.name} className="my-4">
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i> {link.info}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className=" col-12 col-md-7">
        {emailSent ? (
          <>
            <div className="flex-row my-3 justify-center">
              <div className="col-12 col-md-8 my-5 text-center">
                <p>
                  Thanks, your form has been submitted. I look forward to
                  connecting soon!
                </p>
                <button
                  onClick={() => setEmailSent(false)}
                  className="btn my-5 w-25"
                >
                  Back to Contact Form
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className=" card">
            <form className="mx-4" onSubmit={handleSubmit}>
              {errorMessage && (
                <div>
                  <p className="text-tertiary">{errorMessage}</p>
                </div>
              )}
              <div className="my-1">
                <label className="form-label" htmlFor="name">
                  Name:{" "}
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
              <div className="my-1">
                <label className="form-label" htmlFor="email">
                  Email:{" "}
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  defaultValue={email}
                  onBlur={handleChange}
                />
              </div>
              <div className="my-1">
                <label className="form-label" htmlFor="message">
                  Message:{" "}
                </label>
                <textarea
                  className="form-textarea"
                  name="message"
                  rows="8"
                  defaultValue={message}
                  onBlur={handleChange}
                />
              </div>
              <button className="btn primary my-1" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
