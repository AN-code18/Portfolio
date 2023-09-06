import React from "react";
import { education } from "../data.js";
import EduCard from "./EduCard.js";
import "../styles/education.css";

function Education() {
  return (
    <div className="education-section">
      <h2 className="edu-title">Qualification</h2>
      <span className="edu-desc">My personel journey</span>

      <div className="edu-container">
        <div className="edu-tabs">
          <span className="edu-icon"></span>Education
        </div>
        <div className="edu-section">
          {education.map((education) => (
            <div className="card-item">
              <div className="card-content">
                <EduCard education={education} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
