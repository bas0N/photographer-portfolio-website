import React from "react";
import beachVid from "../assets/beachVid.mp4";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default Hero;
