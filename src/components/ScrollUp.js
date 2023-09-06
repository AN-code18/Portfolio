import React, { useEffect, useState } from "react";
import "../styles/scrollup.css";
import { RxDoubleArrowUp } from "react-icons/rx";

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const gotToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollListner = () => {
    let height = 300;
    const pageScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (pageScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListner);

    window.removeEventListener("scroll", scrollListner);
  }, []);

  return (
    <div className="scroll-up">
      {isVisible && (
        <div onClick={gotToTop}>
          <span className="scroll-up-icon">
            <RxDoubleArrowUp />
          </span>
        </div>
      )}
    </div>
  );
}

export default ScrollUp;
