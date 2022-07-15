import React, { useState } from "react";

function Project() {
  const [project] = useState([
    {
      title: "Artist Nation Press List",
      languages:
        "Javascript, Node.js, MySQL, Express Package, Sequelize Package, Handlebars, Express Sessions, Connect Session Sequelize, Dotenv package, Bcrypt Package, Casual Package",
      description:
        " a full-stack application for Artist Nation to comprise and manage a press list",
      repo_link: "https://github.com/sammylwolfson/artistnation-presslist",
      deployed_link: "https://artistnation-presslist.herokuapp.com/",
    },
    {
      title: "CAT ME",
      languages:
        "HTML, CSS, Javascript, Foundation Framework, Google Icons, Cat Fact API, The Cat API",
      description:
        "A front end application that allows users to get and favorite random photos and facts about cats.",
      repo_link: "https://github.com/sammylwolfson/cat-me",
      deployed_link: "https://sammylwolfson.github.io/cat-me/",
    },
    {
      title: "Weather Dashboard",
      languages:
        "HTML, CSS, Javascript, Bootstrap, OpenWeather One Call API 1.0",
      description:
        "An application that allows users to input a city and see the current weather conditions, along with a 5-day forecast.",
      repo_link: "https://github.com/dneflas/weather-dashboard",
      deployed_link: "https://dneflas.github.io/weather-dashboard/",
    },
    {
      title: "Code Quiz",
      languages: "HTML, CSS, Javascript",
      description:
        "A timed quiz application that stores high scores, featuring dynamically updated HTML.",
      repo_link: "https://github.com/dneflas/code-quiz",
      deployed_link: "https://dneflas.github.io/code-quiz/",
    },
    {
      title: "The Tech Blog",
      languages:
        "Node.js, Express, MySQL, Sequelize, Handlebars, Express Sessions, Connect Session Sequelize, Dotenv, Bcrypt, Casual",
      description:
        "A full-stack CMS-style blog that allows users to read, write, edit blog posts and leave comments.",
      repo_link: "https://github.com/dneflas/the-tech-blog",
      deployed_link: "https://agile-inlet-69846.herokuapp.com/",
    },
  ]);
  return (
    <div className="flex-row justify-space-between">
      {project.map((project, i) => (
        <div
          className="col-12 col-md-6 mb-2 bg-secondary text-dark p-3 flex-column border-round"
          key={project.title}
        >
          <h3 className="portfolio-item-title text-dark">{project.title}</h3>
          <h5 className="portfolio-languages">
            Built With: {project.languages}
          </h5>
          <p>{project.description}</p>
          <a
            href={project.repo_link}
            className="btn mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github mr-2"></i>View Project on GitHub
          </a>
          <a
            href={project.deployed_link}
            className="btn mt-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Deployed Application
          </a>
        </div>
      ))}
    </div>
  );
}

export default Project;
