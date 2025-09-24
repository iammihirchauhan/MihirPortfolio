import "./MySkills.css";
import tick_light from "../assets/checkmark-light.svg";
import tick_dark from "../assets/checkmark-dark.svg";
import { MySkillsData } from "../MySkillsData";

export const MySkills = () => {
  return (
    <section id="skills" className="skill-container">
      <h1 className="skill-title">Skills</h1>
      <div className="skill-list">
        <MySkillsData src={tick_light} skills="Python" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light}  skills="Django Rest Framework" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light}  skills="PostGres" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light} skills="Javascript" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light} skills="HTML" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light} skills="CSS" />
      </div>
    </section>
  );
};
