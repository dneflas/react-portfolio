import React, { useState } from "react";

function Project() {
  const [isProjectHover, setIsProjectHover] = useState();
  const [project] = useState([
    {
      title: "Hello Bubs",
      languages: "React, Node.js, CSS",
      description:
        "A responsive React landing page for a baby gear resale platform, featuring a simple signup process and key service details, built with a focus on performance and mobile optimization.",
      repo_link: "https://github.com/dneflas/bgx-web",
      deployed_link: "https://dneflas.github.io/bgx-web/",
      image: "6.png",
    },
    {
      title: "DEJA Imp",
      languages:
        "React, GraphQL, Express, Node.js, JSX, CSS, MongoDB, Mongoose ODM, JSON Web Tokens, Apollo Client, Bcrypt, Faker-js ",
      description:
        "A MERN stack single-page application for inventory management, designed for a local business with real-time updates and streamlined data management.",
      repo_link: "https://github.com/edellenator/Deja-imp",
      deployed_link: "https://deja-imp.herokuapp.com/",
      image: "5.png",
    },
    {
      title: "Artist Nation Press List",
      languages:
        "Javascript, Node.js, MySQL, Express Package, Sequelize Package, Handlebars, Express Sessions, Connect Session Sequelize, Dotenv package, Bcrypt Package, Casual Package",
      description:
        "A full-stack application for Artist Nation to manage a press list, featuring secure user access and efficient data organization. (Login: guest / P@ssword123)",
      repo_link: "https://github.com/sammylwolfson/artistnation-presslist",
      deployed_link: "https://agile-refuge-70111.herokuapp.com/",
      image: "0.png",
    },
    {
      title: "CAT ME",
      languages:
        "HTML, CSS, Javascript, Foundation Framework, Google Icons, Cat Fact API, The Cat API",
      description:
        "A front-end application that lets users discover and favorite random cat photos and facts, providing a fun and interactive experience.",
      repo_link: "https://github.com/sammylwolfson/cat-me",
      deployed_link: "https://sammylwolfson.github.io/cat-me/",
      image: "1.png",
    },
    {
      title: "Weather Dashboard",
      languages:
        "HTML, CSS, Javascript, Bootstrap, OpenWeather One Call API 1.0",
      description:
        "An application that displays current weather conditions and a 5-day forecast based on user-inputted cities.",
      repo_link: "https://github.com/dneflas/weather-dashboard",
      deployed_link: "https://dneflas.github.io/weather-dashboard/",
      image: "2.png",
    },
    {
      title: "Code Quiz",
      languages: "HTML, CSS, Javascript",
      description:
        "A timed quiz application that stores high scores, featuring dynamically updated HTML for an interactive user experience.",
      repo_link: "https://github.com/dneflas/code-quiz",
      deployed_link: "https://dneflas.github.io/code-quiz/",
      image: "3.png",
    },
    {
      title: "The Tech Blog",
      languages:
        "Node.js, Express, MySQL, Sequelize, Handlebars, Express Sessions, Connect Session Sequelize, Dotenv, Bcrypt, Casual",
      description:
        "A full-stack CMS-style blog that enables users to read, write, edit posts, and leave comments, fostering user engagement and content management.",
      repo_link: "https://github.com/dneflas/the-tech-blog",
      deployed_link: "https://agile-inlet-69846.herokuapp.com/",
      image: "4.png",
    },
  ]);
  return (
    <div className="flex-row justify-space-between">
      {project.map((project, i) => (
        <div
          className={`col-12 col-md-6 mb-2 bg-secondary text-dark p-3 flex-column projects ${
            isProjectHover === i && "project-hover bg-light"
          }`}
          key={project.title}
          style={
            isProjectHover === i
              ? { backgroundImage: "none" }
              : {
                  backgroundImage: `url(${require(`../../assets/${project.image}`)}) `,
                }
          }
          onMouseEnter={() => setIsProjectHover(i)}
          onMouseLeave={() => setIsProjectHover()}
        >
          {isProjectHover === i && (
            <div className="px-2 pt-5 pb-4 flex-column project-content">
              <h3 className="portfolio-item-title text-dark">
                {project.title}
              </h3>
              <h5 className="portfolio-languages">
                Built With: {project.languages}
              </h5>
              <p>{project.description}</p>
              <a
                href={project.repo_link}
                className="btn w-50 text-center mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github mr-2"></i>View Project on GitHub
              </a>
              <a
                href={project.deployed_link}
                className="btn w-50 mt-0 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Deployed Application
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Project;
