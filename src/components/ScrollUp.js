import React from "react";
import "../styles/scrollup.css";
import {MdOutlineKeyboardDoubleArrowUp} from "react-icons/md";

function ScrollUp() {
  const gotToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
  <div className="scroll-up">   
    <div onClick={gotToTop} className="top-btn">
          <span className="scroll-up-icon">
            <MdOutlineKeyboardDoubleArrowUp />
          </span>
    </div>
  </div>
  );
}

export default ScrollUp;
