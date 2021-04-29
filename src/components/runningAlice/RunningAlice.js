import React, { useRef, useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./RunningAlice.css";

const ParentComp = () => {
  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: "rotate(0) translate3D(-50%, -50%, 0)",
      color: "#000",
      color: "#431236",
      offset: 0.3,
      transform: "rotate(360deg) translate3D(-50%, -50%, 0)",
      color: "#000",
    },
    animationOptions: {
      duration: 15000,
      iteration: Infinity,
    }
  });

  return (
    <div>
      <div ref={ref} className="mainDiv"></div>
    </div>
  );
};

export default ParentComp;
