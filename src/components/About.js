import React from "react";
import { Bio } from "../data";
import dummy from "../utils/dummy .gif";
import { BsFileEarmarkRuled } from "react-icons/bs";
import {BiMessageRoundedDetail} from 'react-icons/bi'

import "../styles/about.css";
function About() {
  return (
    <div className="about-section">
      <h2 className="about-title">About Me</h2>
      <span className="about-subtitle">My Introduction</span>

      <div className="about-container">
        <img src={dummy} alt="" className="about-img" />

        <div className="about-data">
          <span className="about-desc">
            Welcome to my portfolio! I have a strong affinity for
            algorithmic problem-solving and a deep understanding of Data
            Structures and Algorithms. 
            <br></br>
            My passion extends to web development .
            I've crafted some project websites and am actively enhancing my
            skills in React.js. Join me on my journey as I explore the art of
            crafting dynamic and user-centric web experiences. Let's venture
            into the exciting world of full-stack web development together.
          </span>
          <br></br>
          <a href="cv-googledrive link">
            <button className="download-btn">
              Download CV
              <span className="cv-icon">
                <BsFileEarmarkRuled />
              </span>
            </button>
          </a>

          <a href="#contact">
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
  );
}

export default About;
