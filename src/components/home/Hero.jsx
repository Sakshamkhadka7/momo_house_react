import React from "react";
import one from "../../assets/one.png";
import momo2 from "../../assets/momo2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import dot from "../../assets/dot.png";
import whitedot from "../../assets/whitedot.png";

const Hero = () => {
  return (
    <section className="bg-white min-h-[90vh] flex flex-col lg:flex-row items-center overflow-hidden">

      {/* ── Left: Text ── */}
      <div className="flex flex-col gap-5 w-full lg:w-1/2 px-8 md:px-14 lg:px-20 py-14 text-center lg:text-left">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          Restaurant
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          The{" "}
          <span
            style={{ backgroundImage: `url(${one})`, backgroundSize: "160px" }}
            className="bg-no-repeat bg-center text-white px-5 py-1 inline-block"
          >
            #One
          </span>
        </h1>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Momo <span className="text-[#D95103]">Restaurant</span>
        </h1>

        <p className="text-lg text-gray-600">
          More than{" "}
          <span className="text-[#D95103] font-semibold">20+ Varieties</span>{" "}
          of momo available for you
        </p>

        <NavLink
          to="/menu"
          className="inline-flex items-center gap-2 self-center lg:self-start px-7 py-3 text-white bg-[#0C6967] rounded-full font-semibold hover:bg-[#094f4d] transition-colors"
        >
          Explore Food Menu
          <FaArrowRightLong />
        </NavLink>
      </div>

      {/* ── Right: Image + orange circle ── */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-100 lg:min-h-[90vh]">

        {/* Large orange circle — bleeds off the right edge */}
        <div className="absolute -right-30 top-1/2 -translate-y-1/2 w-120 h-120 md:w-140 md:h-140 bg-[#D95103] rounded-full" />

        {/* Black dot grid — left of the circle */}
        <img
          src={dot}
          alt=""
          className="absolute left-4 top-1/2 -translate-y-1/2 w-24 md:w-32 z-10"
        />

        {/* Momo food image — on top of the circle */}
        <img
          src={momo2}
          alt="Delicious Momo"
          className="relative z-20 w-64 md:w-80 lg:w-96 object-contain drop-shadow-xl"
        />

        {/* White dot grid — bottom right */}
        <img
          src={whitedot}
          alt=""
          className="absolute bottom-6 right-6 w-20 md:w-28 z-10"
        />
      </div>

    </section>
  );
};

export default Hero;
