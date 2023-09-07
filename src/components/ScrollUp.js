import React from "react";
import "../styles/scrollup.css";
import { RxDoubleArrowUp } from "react-icons/rx";

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
            <RxDoubleArrowUp />
          </span>
    </div>
  </div>
  );
}

export default ScrollUp;
