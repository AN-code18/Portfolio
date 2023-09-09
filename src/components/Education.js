import React, { useState } from "react";
import { PiStudentDuotone } from "react-icons/pi";
import { LiaStoreSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import "../styles/Education.css";

function Education() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="ed-section">
      <h2 className="section-title">Qualification</h2>

      <div className="ed-container">
        <div className="ed-tabs">
          <div className="ed-button">
            <span className="ed-icon">
              <LiaStoreSolid />
            </span>
            Experience
          </div>
          <div className="ed-button">
            <span className="ed-icon">
              <PiStudentDuotone />
            </span>
            Education
          </div>
        </div>
        <div className="ed-ex-section">
          <div className="ed-content ed-content-active">
            <div className="ed-data">
              <div>
                <h3 className="ed-title">Danalitic</h3>
                <span className="ed-subtitle">Full tack Developer Intern</span>
                <div className="ed-calender">
                  <span className="calender-icon">
                    <SlCalender />
                  </span>
                  April 2022 - June 2022
                </div>
              </div>

              <div>
                <span className="ed-rounder"></span>
                <span className="ed-line"></span>
              </div>
            </div>

            <div className="ed-data">
              <div></div>

              <div>
                <span className="ed-rounder"></span>
                <span className="ed-line"></span>
              </div>
              <div>
                <h3 className="ed-title">B.tech</h3>
                <span className="ed-subtitle">
                  Cambridge Institute Of Technology
                </span>
                <div className="ed-calender">
                  <span className="calender-icon">
                    <SlCalender />
                  </span>
                  June 2019 - May 2023
                </div>
              </div>
            </div>

            {/*end of data */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
