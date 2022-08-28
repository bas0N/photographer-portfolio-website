import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Maserati29 from "../assets/Maserati29.jpg";
import Maserati31 from "../assets/Maserati31.jpg";
import Maserati35 from "../assets/Maserati35.jpg";
const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];
const slides = [Maserati29, Maserati31, Maserati35];
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const prevSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  setTimeout(() => {
    nextSlide();
  }, 10000);
  return (
    <div className="relative bg-white">
      <div className="w-full mx-auto  pt-16 relative flex justify-center  items-center">
        <AiOutlineArrowLeft
          onClick={prevSlide}
          className="absolute top-[50%] text-white cursor-pointer text-3xl left-8"
        />
        <AiOutlineArrowRight
          onClick={nextSlide}
          className="absolute top-[50%] text-white cursor-pointer text-3xl right-8"
        />
        {slides.map((item, index) => (
          <div className={index === currentSlide ? "opacity-100" : "opacity-0"}>
            {index === currentSlide && (
              <img className="w-full" src={item} alt="/" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
