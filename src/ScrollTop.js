import React, { useState } from "react";
import { scrollTopClass } from "./styles";
import Scroll from "./assets/scroll.svg";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      className={scrollTopClass}
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <img src={Scroll} alt="" />
    </div>
  );
};

export default ScrollArrow;
