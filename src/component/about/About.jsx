import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from '@mui/material/Button';
import "./About.css";
const About = (props) => {
  const { text } = useTypewriter({
    words: [
      "Devloper...",
      "Frontend-Devloper...",
      "Backend-Devloper...",
      "Mern-Stack-Devloper...",
    ],
    delaySpeed: 1400,
    loop: 0,
    deleteSpeed: 150,
  });
  useEffect(() => {}, []);
  return (
    <>
    {props.nav}
      <Container fluid className="aboutmain">
        <div className="aboutus">
          <div
            className="aboutme1"
            style={{ fontSize: "1.8rem", fontWeight: "600" }}
          >
            About me
          </div>
          <div className="underline">
            <div className="underline1"></div>
            <div className="whoiam"> Who i am </div>
            <div className="underline2"></div>
          </div>
        </div>

        <div className="aboutphototext">
          <div className="img-fluid" />
          <div className="abouttext">
            <div className="dynamicblocks">
              <div className="nddynamic">
                Hii i'm Bhawishya Singh and i'm a
                <span className="textsname">{text}</span>
                <Cursor />
              </div>
              <div className="Aboutme">
             Hi Sir/Mam,

I’m someone who genuinely loves technology and is always eager to learn and grow. I’m a good listener, have a strong understanding of technical concepts, and I pick up new skills quickly. I’m passionate about exploring different areas of tech, and I take pride in staying up-to-date with the latest trends.

Currently, I’m working as a Software Developer Instructor at AccioJob, where I mentor aspiring developers and help them build real-world skills. This role has deepened both my technical expertise and my ability to communicate complex ideas clearly.

I approach every opportunity with a positive attitude and a strong sense of self-respect. I'm not here to beg for a job — I believe in proving my worth through action. If my profile resonates with you, I’m confident you’ll see the potential I bring.

I'm also open-minded and easy to talk to — feel free to discuss anything with me. In my free time, I enjoy watching movies, playing games like PUBG, and continuously learning. My long-term goal is to become an AI Developer, and I'm putting in the work to get there.

You can view my projects and download my resume — thank you so much for your time and consideration!

Warm regards,
    Bhawishya Singh
                
              </div>
              {/**/}
              <Button className="cv" variant="contained" >
              <a style={{color:"white",fontWeight:"600",textDecoration:"none"}} 
              href="https://drive.google.com/drive/folders/1TDX89VH83BYzfc94F4F89JdGN98ft-03 ">
              Download CV</a> 
              </Button>
             
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
