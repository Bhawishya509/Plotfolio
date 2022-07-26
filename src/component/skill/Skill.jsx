import React, { useEffect } from "react";
import "./Skill.css";
import Progress from "./Progress";
import Button from "@mui/material/Button";
const Skill = (props) => {
  useEffect(() => {}, []);
  return (
    <>
      {props.nav}
      <div className="mainskillblock">
        <div className="skillblock">
          <div className="myskill">My Skills</div>
          <div className="underline">
            <div className="underline1s"></div>
            <div className="whatiknow"> What i know </div>
            <div className="underline2s"></div>
          </div>
        </div>
        <div className="percentblock">
          <div className="percenttext">
            <div className="percenttextheading">
              My Creative Skill & expriences.
            </div>
            <div className="lolly2">
              As I Already Told You I Love Technology So I Know
              <span style={{ color: "hotpink" }}>Data-structure</span> And As
              Well As Web Technolgy In Web Technolgy I Know
              <span style={{ color: "hotpink" }}>
                Html,Css,JavaScript,React-js,Node-js,Mongodb...
              </span>
              And Also Know Some Programing Langauge Like
              <span style={{ color: "hotpink" }}>C++,Python ,C</span> And Some
              Version Control Like
              <span style={{ color: "hotpink" }}>Git,Github</span> So If You
              Give Me Once Chance So Defnitily I Will Proof My Self And In
              Future I Also Wana Learn Ethical Hacking And Machine Learning As
              Well As AI Devloper. ThankYou So Much..
            </div>
            <Button variant="contained" className="skillbutton">
              ReadMore
            </Button>
          </div>

          <div className="percentlogo">
            <span className="skillsname">Html</span>
            <Progress value={80} />
            <span className="skillsname">Css</span>
            <Progress value={90} />
            <span className="skillsname">JavaScript</span>
            <Progress value={85} />
            <span className="skillsname">React-js</span>
            <Progress value={75} />
            <span className="skillsname">Node-js</span>
            <Progress value={70} />
            <span className="skillsname">Mongodb</span>
            <Progress value={75} />
            <span className="skillsname">DataStructure</span>
            <Progress value={80} />
            <span className="skillsname">BootStrap</span>
            <Progress value={60} />
            <span className="skillsname">PostMan</span>
            <Progress value={60} />
            <span className="skillsname">C++</span>
            <Progress value={90} />
            <span className="skillsname">C</span>
            <Progress value={60} />
            <span className="skillsname">Python</span>
            <Progress value={40} />
            <span className="skillsname">Github</span>
            <Progress value={60} />

            <span className="skillsname">Matrial-Ui</span>
            <Progress value={60} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
