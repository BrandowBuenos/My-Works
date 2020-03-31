import React from "react";

import "./styles.css";
import "../styles/flexbox.css";
import "../styles/wickedcss.min.css";

import Background from "../../assets/img/png/teste.png";
import ProfilePicture from "../../assets/img/png/profile-picture.jpg";
import AboutIcon from "../../assets/img/png/about-icon.png";
import ProjectIcon from "../../assets/img/png/project-icon.png";
import PlaneIcon from "../../assets/img/png/plane-icon.png";

import GithubIcon from "../../assets/img/png/github-icon.png";
import InstagramIcon from "../../assets/img/png/instagram-icon.png";
import FacebookIcon from "../../assets/img/png/facebook-icon.png";
import LinkedinIcon from "../../assets/img/png/linkedin-icon.png";

export default function Main() {
  return (
    <body>
      <img className="background" alt="" src={Background} />
      <img className="profilepicture slideDown" alt="" src={ProfilePicture} />
      <div className="title fadeIn">
        <i>Brandow Buenos Aires Madeira</i> <br />
        <h4>
          Graduating in Software Engineering at Federal University of Pampa
        </h4>
      </div>

      <nav id="menu">
        <ul>
          <li>
            <a href="#">
              <img src={ProjectIcon} alt="" />
              &nbsp;&nbsp;About
            </a>
          </li>
          <li>
            <a href="#">
              <img src={AboutIcon} alt="" />
              &nbsp;&nbsp;Projects
            </a>
          </li>
          <li>
            <a href="#">
              <img src={PlaneIcon} alt="" />
              &nbsp;&nbsp;Contact
            </a>
          </li>
        </ul>
      </nav>

      <div id="content">
        <div className="phrase">
          <div className="firstphrase">Nevertheless</div>
          <div className="secondphrase">, create.</div>
        </div>
      </div>

      <footer className="footer slideUp">
        <div className="label">Follow Me</div>
        <div className="spacer"></div>
        <div className="item">
          <img className="icons" src={GithubIcon} alt="" />
          <span>&nbsp; Github</span>
        </div>
        <div className="item">
          <img className="icons" src={LinkedinIcon} alt="" />
          <span>&nbsp; Linkedin</span>
        </div>
        <div className="item">
          <img className="icons" src={InstagramIcon} alt="" />
          <span>&nbsp; Instagram</span>
        </div>
        <div className="item">
          <img className="icons" src={FacebookIcon} alt="" />
          <span>&nbsp; Facebook</span>
        </div>
      </footer>
      
    </body>

    
  );
}

var availableScrolHeight = document.body.scrollHeight;
window.scrollTo(0, availableScrolHeight);
