import React from "react";
import Maserati6 from "../assets/Maserati6.jpg";
import Maserati5 from "../assets/Maserati5.jpg";
import Maserati11 from "../assets/Maserati11.jpg";
import Maserati26 from "../assets/Maserati26.jpg";
import Maserati29 from "../assets/Maserati29.jpg";
import Maserati31 from "../assets/Maserati31.jpg";
import Maserati35 from "../assets/Maserati35.jpg";

function Story() {
  return (
    <div className="max-w-[1240px] mx-auto pt-16 text-black ">
      <div className="flex flex-col items-center">
        <h1>18-stka Zuzi</h1>
        <p className="text-center pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 mx-4 mt-16 mb-8 gap-2">
          <img src={Maserati29} />
          <img src={Maserati6} />
          <img src={Maserati31} />
          <img src={Maserati35} />
          <img src={Maserati5} />

          <img src={Maserati11} />

          <img src={Maserati26} />
        </div>
      </div>
    </div>
  );
}

export default Story;
