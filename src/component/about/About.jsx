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
                And I Am good Listener As well As I Have Good UnderStanding
                Level And I Am Also Quick Learner... I Love Technology You Can
                Watch My Project.... And I Also Love To Explore In Technolgy And
                I Have Positive Attitude If You Give Me One Chance I Will Proof
                My Self So Its Does'nt Mean I Am Begging You Sir/Mam give Me
                Job... If You Really Like My Profile Then definilty You Will Hire
                Me.. Because Self Respect Is Must Important For Me.. And I Am
                Fully OpenMinded Boy You Can Ask Me AnyThing Or Disscus With Me Openly I
                Don't Have Any Issue And About My Hobby I Like Watching
                Movices.. And Also Playing Game Like PubG.. And About Future I
                Want To Become AI Devloper.... Thats All You Can Download My Resume
                Also... Thankyou So Much Sir/Mam....
                
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
