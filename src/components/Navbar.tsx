import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handleNav = () => {
    setShowNav(!showNav);
    setShowLogo(!showLogo);
  };
  return (
    <div className="flex justify-between ">
      <div className="flex flex-row justify-between w-full items-center px-4 h-20 absolute z-10 text-white">
        <div>
          <h1 className={showLogo ? "px-4 " : "hidden"}>NOWAK.</h1>
        </div>
        <ul className=" hidden md:flex ">
          <li>GŁÓWNA</li>
          <li>HISTORIE</li>
          <li>KONTAKT</li>
        </ul>
        <div onClick={handleNav} className="md:hidden z-10">
          {showNav ? (
            <AiOutlineClose size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          showNav
            ? "absolute z-10  text-black l-0 t-0 w-full bg-gray-100/90 px-4 py-7  flex flex-col"
            : "hidden"
        }
      >
        <ul>
          <h1>MENU</h1>
          <li className="border-b">GŁÓWNA</li>
          <li className="border-b">HISTORIE</li>
          <li className="border-b">KONTAKT</li>

          <div className="flex flex-col">
            <button>elo</button>
            <button>elo</button>
          </div>
          <div className="flex pt-4 gap-2">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
