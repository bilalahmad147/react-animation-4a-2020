import React, { useRef, useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./RunningAlice.css";

const ParentComp = () => {
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: { transform: "translateX(500px)" },
    animationOptions: { duration: 1000, fill: "forwards", iterations: Infinity, direction: "alternate" },
  });

  const play = () => {
    getAnimation().play();
  };

  const pause = () => {
    getAnimation().pause();
  };

  const reverse = () => {
    getAnimation().reverse();
  };

  const cancel = () => {
    getAnimation().cancel();
  };

  const finish = () => {
    getAnimation().finish();
  };

  const seek = (e) => {
    const animation = getAnimation();
    const time = (animation.effect.getTiming().duration / 100) * e.target.value;
    animation.currentTime = time;
  };

  const updatePlaybackRate = (e) => {
    getAnimation().updatePlaybackRate(e.target.value);
  };

  return (
    <div className="container">
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reverse}>Reverse</button>
      <button onClick={cancel}>Cancel</button>
      <button onClick={finish}>Finish</button>
      <input type="range" onChange={seek} />
      <input type="number" defaultValue="1" onChange={updatePlaybackRate} />
      <div className="target" ref={ref} />
    </div>
  );
};

export default ParentComp;
