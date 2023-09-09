import React from "react";
import { Bio } from "../data";
import AboutImg from "../utils/Img 1.1.jpg";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";

import "../styles/about.css";
function About() {
  return (
    <div id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        <img src={AboutImg} alt="" className="about-img" />

        <div className="about-data">
          <div className="about-content">
          <p className="about-desc">
            Welcome to my portfolio! I have a strong affinity for algorithmic
            problem-solving and a deep understanding of Data Structures and
            Algorithms. My passion extends to web development . I've crafted
            some project websites and am actively enhancing my skills in Web
            development. Join me on my journey as I explore the art of crafting
            dynamic and user-centric web experiences. Let's venture into the
            exciting world of full-stack web development together.
          </p>
          </div>
          <br></br>
          <div className="btns">  
          <a href="cv-googledrive link">
            <button className="download-btn">
              Download CV
              <span className="cv-icon">
                <BsFileEarmarkRuled />
              </span>
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/anisha-kumari-9051a01b5/"
            target="_blank"
          >
            <button className="download-btn">
              Let's Connect
              <span className="cv-icon">
                <BiMessageRoundedDetail />
              </span>
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
