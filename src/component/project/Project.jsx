import React from "react";
import "./Project.css";
import Projectblocks from "./Projectblocks";
const Project = (props) => {
  const bs = new URL("../../img/facebookclone.png", import.meta.url);
  const bs1 = new URL("../../img/paitent.png", import.meta.url);
  const bs3 = new URL("../../img/movice.png", import.meta.url);
  const bs4 = new URL("../../img/weather.png", import.meta.url);
  const bs5 = new URL("../../img/todolist.png", import.meta.url);
  const bs6 = new URL("../../img/plotfolio.png", import.meta.url);
  const bs7 = new URL("../../img/education.png", import.meta.url);
  const bs8 = new URL("../../img/pet.png", import.meta.url);
  const bs9 = new URL("../../img/food.png", import.meta.url);
  return (
    <>
      {props.nav}
      <div className="mainProjectblock">
        <h3 className="projectTitle">My Project</h3>
        <div
          style={{ height: "0.5px", width: "90%", backgroundColor: "purple" }}
        ></div>
        <h5 style={{ color: "purple" }}>Click me</h5>
        <div className="projectMainBlock">
          <Projectblocks
            val={1}
            link={"https://playful-marshmallow-370bca.netlify.app/"}
            img={bs}
          />

          <Projectblocks
            val={1}
            link={"https://educations.vercel.app/"}
            style={{ height: "100%" }}
            img={bs7}
          />

          <Projectblocks
            val={1}
            style={{ height: "40vh" }}
            link={"https://wondrous-starship-32658c.netlify.app/"}
            img={bs8}
          />

          <Projectblocks
            val={1}
            link={"https://food-app-jade-one.vercel.app/"}
            img={bs9}
          />
          <Projectblocks
            val={1}
            link={" https://plotfolio.vercel.app/"}
            img={bs6}
          />

          <Projectblocks
            val={1}
            link={"https://patients-sand.vercel.app"}
            img={bs1}
          />

          <Projectblocks
            val={1}
            link={"https://movice.netlify.app/"}
            img={bs3}
          />

          <Projectblocks
            val={1}
            link={"https://weatherapi500.netlify.app/"}
            img={bs4}
          />

          <Projectblocks
            val={1}
            link={"https://tosingh.netlify.app/"}
            img={bs5}
          />

          <Projectblocks val={0} />

          <Projectblocks val={0} />

          <Projectblocks val={1} />
          <Projectblocks val={1} />
          <Projectblocks val={0} />
        </div>
      </div>
    </>
  );
};

export default Project;
