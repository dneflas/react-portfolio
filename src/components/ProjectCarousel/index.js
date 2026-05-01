import "./ProjectCarousel.css";
import img0 from "../../assets/0.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";

const projects = [
  {
    title: "Vera Language Services",
    desc: "Description here",
    image: img7,
  },
  {
    title: "CAT ME",
    desc: "Description here",
    image: img1,
  },
  { title: "Weather Dashboard", desc: "Description here", image: img2 },
  {
    title: "Coding Quiz",
    desc: "Description here",
    image: img3,
  },
  {
    title: "The Tech Blog",
    desc: "Description here",
    image: img4,
  },
  {
    title: "DEJA Imp",
    desc: "Description here",
    image: img5,
  },
  {
    title: "Hello BUBS",
    desc: "Description here",
    image: img6,
  },
];

function ProjectCarousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {[...projects, ...projects].map((project, index) => (
          <div className="carousel-card card" key={index}>
            <img
              className="carousel-img"
              src={project.image}
              alt={project.title}
            />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
