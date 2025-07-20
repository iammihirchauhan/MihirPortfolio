import "./Hero.css";
import heroImg from "../assets/m8.png";
import sun_img from "../assets/sun.png";
import moon_img from "../assets/moon.svg";
import twitter_dark from "../assets/twitter-dark.svg";
import twitter_light from "../assets/twitter-light.svg";
import git_dark from "../assets/github-dark.svg";
import git_light from "../assets/github-light.svg";
import linkedin_dark from "../assets/linkedin-dark.svg";
import linkedin_light from "../assets/linkedin-light.svg";
import resume from "../assets/MihirChauhan_FrontendDeveloper.pdf";

import { useTheme } from "./ThemeContaxt";

export const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeicon = theme === "light" ? sun_img : moon_img;
  const twittericon = theme === "light" ? twitter_light : twitter_dark;
  const gitIcon = theme === "light" ? git_light : git_dark;
  const linkedinIcon = theme === "light" ? linkedin_light : linkedin_dark;

  return (
    <section id="hero" className="hero-container">
      <div className="mode-container">
        <img src={heroImg} alt="my image" className="my-icon" />
        <img
          className="color-mode"
          src={themeicon}
          alt="icons"
          onClick={toggleTheme}
        />
      </div>
      <div className="info">
        <h1>
          Mihir
          <br />
          chauhan
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/mihir2374/" target="_blank">
            <img src={twittericon} alt="" />
          </a>
          <a href="https://github.com/settings/profile" target="_blank">
            <img src={gitIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/me/" target="_blank">
            <img src={linkedinIcon} alt="" />
          </a>
        </span>
        <p className="description">
          I’m mihir chauhan and i am frontend developer with technical skills in
          <span>React.js, javascript(basic), HTML and css </span>and i am
          passionate about building responcive user friendly interface and web
          application. I graduated from Deviba institute of computer
          application.
        </p>
        <a href={resume}>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};
