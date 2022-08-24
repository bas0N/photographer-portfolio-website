import React from "react";
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

function Stories() {
  return (
    <div className="max-width-[1240px] mx-auto py-16 px-4 absolute bg-white">
      <div className="flex flex-col items-center">
        <h1>Odkryj historie</h1>
        <h3 className="py-3">Efekty mojej pracy</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 py-2 gap-2">
          <img
            className="col-span-2 w-full h-full object-cover"
            src={Maserati6}
          />
          <div className="col-span-2 grid grid-cols-2 gap-2 py-2 md:py-0 px">
            <img className="w-full h-full object-cover " src={Maserati31} />
            <img
              className="w-full h-full object-cover hover:bg-"
              src={Maserati26}
            />
            <img
              className="w-full h-full object-cover hover:bg-"
              src={Maserati29}
            />
            <img
              className="w-full h-full object-cover hover:bg-"
              src={Maserati35}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
