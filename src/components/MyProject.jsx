import "./MyProject.css";
import viberr from "../assets/viberr.png";
import burger from "../assets/fresh-burger.png";
import { ProjecrCard } from "./ProjectCard";

export const MyProject = () => {
  return (
    <section id="projects" className="main-container">
      <h1 className="project-txt">Projects</h1>
      <div className="projects-container">
        <ProjecrCard
          src={burger}
          link={"https://github.com/iammihirchauhan/Zostomato.git"}
          h3="ZosTomato"
          p="Food Delevery App"
        />
        <ProjecrCard
          src={viberr}
          link={"https://github.com/iammihirchauhan/Ziptrip.git"}
          h3="ZipTrip"
          p="Traveling App"
        />
      </div>
    </section>
  );
};
