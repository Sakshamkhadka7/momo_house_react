import React from "react";
import one from "../../assets/one.png";
import momo2 from "../../assets/momo2.png";
import circular from "../../assets/circular.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white  min-h-[90vh] flex flex-wrap justify-end gap-2">
      <div className="space-y-5 h-96 mr-44 p-4 mt-14 ">
        <p> RESTAURANT</p>

        <h1 className="text-4xl font-bold  ">
          {" "}
          The{" "}
          <span
            style={{
              backgroundImage: `url(${one})`,
              backgroundSize: "160px",
            }}
            className="bg-no-repeat  text-center bg-center text-white  w-40 p-4 inline-block   "
          >
            #One
          </span>{" "}
        </h1>
        <h1 className="text-4xl font-bold  ">
          Momo <span className="text-[#D95103]"> Restaurant</span>{" "}
        </h1>
        <p className="font-semibold  text-xl  ">
          {" "}
          More than <span className="text-[#D95103]"> 20+ Varieties</span> of
          momo available for you{" "}
        </p>

        <button className="border flex items-center justify-center p-4 gap-2  text-white bg-[#0C6967]  rounded-4xl  ">
          {" "}
          <NavLink to="/menu"> Explore Food Menu</NavLink>
           <FaArrowRightLong />
        </button>
      </div>
      <div className="image w-125 flex justify-end items-center  relative  overflow-hidden">
        <img
          className="w-w-[300px] h-150 -top-14  absolute  "
          src={circular}
          alt=""
        />
        <img className="w-75  absolute top-30 right-30   " src={momo2} alt="" />
      </div>
    </section>
  );
};

export default Hero;
