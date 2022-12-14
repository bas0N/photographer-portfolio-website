import React, { useEffect, useState } from "react";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maladives from "../assets/maldives.jpg";
import Maladives2 from "../assets/maldives2.jpg";
import Maladives3 from "../assets/maldives3.jpg";
import Maserati26 from "../assets/Maserati26.jpg";
import Maserati29 from "../assets/Maserati29.jpg";
import Maserati35 from "../assets/Maserati35.jpg";
import Maserati6 from "../assets/Maserati6.jpg";
import Maserati31 from "../assets/Maserati31.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { contentfulClient } from "../config/contentful";

function Stories() {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState("null");
  useEffect(() => {
    const execute = async () => {
      try {
        const res: any = await contentfulClient.getEntries({
          content_type: "mainStories",
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
    <div className="max-width-[1240px] mx-auto py-16 px-4 relative bg-white">
      <div className="flex flex-col items-center">
        <h1>Odkryj historie</h1>
        <h3 className="py-3">Efekty mojej pracy</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 py-2 gap-2">
          <div className="relative col-span-2">
            <Link to="/stories/ess">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={Maserati29}
              />
              <div className="hover:bg-gray-900/30 flex  absolute top-0 left-0 w-full h-full">
                <p className=" gap-3  left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </Link>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2 py-2 md:py-0 px">
            <div className="relative">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={Maserati31}
              />
              <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </div>{" "}
            <div className="relative">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={Maserati26}
              />
              <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={Maserati29}
              />
              <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={Maserati35}
              />
              <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
