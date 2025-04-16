import React from "react";
import { Hero } from "./components/Hero";
import { MyProject } from "./components/MyProject";
import { MySkills } from "./components/MySkills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <Hero />
      </section>
      <section id="projects">
        <MyProject />
      </section>
      <section id="skills">
        <MySkills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
