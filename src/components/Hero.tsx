import React from "react";
import { Link } from "react-router-dom";
import party from "../assets/18trimed.mov";
function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover fixed z-0"
        src={party}
        autoPlay
        loop
        muted
      />
      <div className="  absolute text-center top-[50%] mx-auto w-full ">
        <h1 className="text-white">PROFESJONALNY FOTOGRAF</h1>
        <Link to="/stories">
          <button className=" text-white mt-3 p-2 border-2"> Sprawdź</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
