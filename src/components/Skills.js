import React from "react";
import { skills } from "../data.js";
import "../styles/skills.css";

function Skills() {
  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">Skills</h3>

        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill">
              <h2 className="skill-title ">{skill.title}</h2>
              <div className="skill-list">
                {skill.skills.map((item) => (
                  <div className="skill-item">
                    <img
                      src={item.image}
                      style={{ width: "30px", height: "30px" }}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
