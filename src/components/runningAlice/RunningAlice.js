import React, { useRef, useEffect } from "react";
import useWebAnimations, { bounceInRight } from "@wellyshen/use-web-animations";
import "./RunningAlice.css";

const ParentComp = () => {
  const { ref, playState } = useWebAnimations({...bounceInRight});

  return (
    <div className="container">
      <div className="target" ref={ref} />
      <h1>{playState}</h1>
    </div>
  );
};

export default ParentComp;
