import React from "react";
import "./Contact.css";
import LogoName from "./LogoName";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Forms from "./Form/Forms";
const Contact = (props) => {
  return (
    <>
      {props.nav}
      <div className="contactmainblock">
        <div className="ContactusBlock">
          <div className="contactme">contact me</div>
          <div className="underline">
            <div className="whoiam"> Get in Touch</div>
          </div>
        </div>

        <div className="messagememainblock">
          <div className="messagemainblock">
            <h5>Get in Touch</h5>
            <p className="contactparagrafh">
              You Can Contact Me Here So Here Is Form Tag You Can Driect Mail
              Here And As Well As Tap In Click Also It Will Redrict On Their
              Thats All ThankYou So Much... Sir/Mam{" "}
            </p>
            <div className="contactlogo">
              <LogoName
                logo={GitHubIcon}
                names={"Git"}
                link={"https://github.com/Bhawishya509"}
                val={"Click"}
              />
              <LogoName
                logo={LinkedInIcon}
                names={"LinkedIn"}
                link={"https://www.linkedin.com/in/bhawishya-singh-50a34a19b/"}
                val={"Click"}
              />
              <LogoName
                logo={WhatsAppIcon}
                names={"WhatsApp"}
                link={"http://wa.me/8969344078"}
                val={"Click"}
              />
              <LogoName
                logo={MailIcon}
                names={"Email-id"}
                val={"Lollysingh509@gmail.com"}
              />
              <LogoName
                logo={PersonIcon}
                names={"Name"}
                val={"Bhawishya Singh"}
              />
              <LogoName
                logo={LocationOnIcon}
                names={"Location"}
                val={"Dehri ,Bihar ,India"}
              />
            </div>
          </div>

          <div className="contactdetail">
            <h5>Message me</h5>
            <Forms />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
