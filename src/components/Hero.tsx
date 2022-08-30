import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import party from "../assets/18trimed.mov";
import { contentfulClient } from "../config/contentful";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  useEffect(() => {
    const execute = async () => {
      try {
        const res: any = await contentfulClient.getEntries({
          content_type: "mainMovie",
        });
        //setStory(res);

        console.log(res);
      } catch (err) {
        navigate("/not-found");
        console.log(err);
      }
      // const res = await client.getEntries({ content_type: "story" });
    };
    execute();
  }, []);
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
