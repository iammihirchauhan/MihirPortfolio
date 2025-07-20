import "./MySkills.css";
import tick_light from "../assets/checkmark-light.svg";
import tick_dark from "../assets/checkmark-dark.svg";
import { MySkillsData } from "../MySkillsData";

export const MySkills = () => {
  return (
    <section id="skills" className="skill-container">
      <h1 className="skill-title">Skills</h1>
      <div className="skill-list">
        <MySkillsData src={tick_light} skills="REACT" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light}  skills="JAVASCRIPT" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light}  skills="Bootstrap" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light} skills="CSS" />
      </div>
      <hr />
      <div className="skill-list">
        <MySkillsData src={tick_light} skills="HTML" />
      </div>
    </section>
  );
};
