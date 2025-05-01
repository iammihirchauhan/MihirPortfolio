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
          link={"https://github.com/iammihirchauhan/Zostomato.git"}
          h3="ZosTomato"
          p="Food Delevery App"
        />
        <ProjecrCard
          src={todo}
          link={"https://github.com/iammihirchauhan/MyTodoApp.git"}
          h3="Todo"
          p="Todo app"
        />
        <ProjecrCard
          src={travel}
          link={"https://github.com/iammihirchauhan/Ziptrip.git"}
          h3="ZipTrip"
          p="Traveling App"
        />
      </div>
    </section>
  );
};
