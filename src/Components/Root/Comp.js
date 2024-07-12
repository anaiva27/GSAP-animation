import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./counter.json";

export const Comp = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {},
  };
  return (
    <div style={{ background: "black" }}>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => {},
          },
        ]}
      />
    </div>
  );
};
