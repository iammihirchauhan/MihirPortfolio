import "./MyProject.css";
import travel from "../assets/ziptrip.jpg";
import burger from "../assets/fresh-burger.png";
import todo from "../assets/Todo.jpg";

import { ProjecrCard } from "./ProjectCard";

export const MyProject = () => {
  return (
    <section id="projects" className="main-container">
      <h1 className="project-txt">Projects</h1>
      <div className="projects-container">
        <ProjecrCard
          src={burger}
          link={"https://github.com/iammihirchauhan/DRF_CRUD_OPERATION.git"}
          h3="Student CRUD API"
          p="Student CRUD operation"
        />
        <ProjecrCard
          src={travel}
          link={"https://github.com/iammihirchauhan/Blog_API.git"}
          h3="Blog API"
          p="Blog CRUD operation"
        />
      </div>
    </section>
  );
};
