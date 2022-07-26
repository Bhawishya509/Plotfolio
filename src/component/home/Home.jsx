import React from "react";
import Navs from "../navbar/Navs";
import About from '../about/About'
import DynamicBlock from "../dynamicname/DynamicBlock";
import Skill from '../skill/Skill'
import Contact from "../contact/Contact";
import Project from "../project/Project";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navs />
      <div className="downimage">
        <DynamicBlock />
        <div className="imgs"></div>
      </div>
      <About/>
      <Skill/>
      <Contact/>
      <Project/>
    </>
  );
};

export default Home;
