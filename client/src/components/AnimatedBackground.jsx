import React from "react";

const AnimatedBackground = (mousePosition) => {
  return (
    <>
      {/* <div className="absolute inset-0 overflow-hidden"> */}
      <div
        className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x / 20}px`,
          top: `${mousePosition.y / 20}px`,
        }}
      />
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      {/* </div> */}
    </>
  );
};

export default AnimatedBackground;
