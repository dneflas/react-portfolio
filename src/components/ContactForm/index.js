import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactLinks] = useState([
    {
      name: "Email",
      link: "mailto:debbieneflas@gmail.com",
      icon: "fa-solid fa-envelope",
    },
    {
      name: "Phone",
      link: "tel:+16263771363",
      icon: "fa-solid fa-phone",
    },
  ]);

  const { name, email, message } = formState;

  function handleChange(event) {
    if (event.target.name === "Email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);

    setFormState({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <section className="my-5">
      <h2>Contact Me</h2>
      <div className="flex-row my-3">
        <form className="col-12 col-md-8" onSubmit={handleSubmit}>
          <div className="my-1">
            <label className="form-label" htmlFor="Name">
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
            <label className="form-label" htmlFor="Email">
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
            <label className="form-label" htmlFor="Message">
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
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <button className="btn my-1" type="submit">
            Submit
          </button>
        </form>
        <div className="col-12 col-md-4 align-center my-auto">
          {contactLinks.map((link) => (
            <div className="col-2 text-center my-4" key={link.name}>
              <a
                href={link.link}
                className="ml-2 my-1 px-2 py-1 text-dark icons"
              >
                <i className={link.icon}></i>
                <span> : {link.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
