import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const location = useLocation();

  const handleNav = () => {
    setShowNav(!showNav);
    setShowLogo(!showLogo);
  };
  console.log(location);
  return (
    <div className="flex justify-between ">
      <div
        className={`flex flex-row justify-between w-full items-center px-4 h-20 absolute  ${
          location.pathname === "/"
            ? "text-white absolute z-10"
            : "text-black relative"
        }`}
      >
        <div>
          <Link to="/">
            <h1 className={showLogo ? "px-4 " : "hidden"}>NOWAK.</h1>
          </Link>
        </div>
        <ul className=" hidden md:flex ">
          <Link to="/">
            <li>GŁÓWNA</li>
          </Link>
          <Link to="/stories">
            <li>HISTORIE</li>
          </Link>
          <Link to="/contact">
            <li>KONTAKT</li>
          </Link>
          <Link to="/about">
            <li>O MNIE</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden ">
          {showNav ? (
            <AiOutlineClose className="text-2xl text-black" size={20} />
          ) : (
            <HiOutlineMenuAlt4 className="text-2xl text-black" size={20} />
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
          <Link to="/">
            <li className="border-b">GŁÓWNA</li>
          </Link>
          <Link to="/stories">
            <li className="border-b">HISTORIE</li>
          </Link>
          <Link to="/contact">
            <li className="border-b">KONTAKT</li>
          </Link>
          <Link to="/about">
            <li className="border-b">O MNIE</li>
          </Link>

          <div className="flex mt-4 gap-2">
            <Link to="/about">
              <FaFacebook className="text-2xl text-black" />
            </Link>
            <Link to="/about">
              <FaInstagram className="text-2xl text-black" />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
