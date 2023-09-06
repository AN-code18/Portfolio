import React from "react";
import "../styles/educard.css";

function EduCard({ education }) {
  return (
    <div className="edu-card">
      <div className="top-wrapper">
        <div className="about-edu">
          <h3 className="edu-school">{education.school}</h3>
          <h3 className="edu-degree">{education.degree}</h3>
          <span className="edu-date">{education.date}</span>
        </div>
      </div>

      <p className="edu-grade">
        <b>Grade:</b>
        {education.grade}
      </p>

     
    </div>
  );
}

export default EduCard;
