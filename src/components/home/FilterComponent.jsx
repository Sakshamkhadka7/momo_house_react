import React from "react";
import rec from "../../assets/rec.png";
import white from "../../assets/white.png";
import { FaArrowRightLong } from "react-icons/fa6";

const FilterComponent = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-12 lg:px-20">
      
      {/* Image Section */}
      <div className="relative flex justify-center items-center">
        <img
          src={white}
          alt="white"
          className="absolute z-10 w-40 sm:w-52 lg:w-60"
        />

        <img
          src={rec}
          alt="rectangle"
          className="relative w-40 sm:w-52 lg:w-60"
        />
      </div>

      {/* Text Section */}
      <div className="space-y-6 text-center lg:text-left max-w-xl">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Why Customer <span className="text-[#D95103]">Love Us</span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Iusto sint laborum non molestias dolore! Odit fuga vitae 
          error nemo dolor accusantium, similique repudiandae alias 
          culpa ratione omnis ut nihil officiis!
        </p>

        <button className="bg-[#0C6967] px-8 py-4 rounded-full flex items-center gap-3 text-white w-fit mx-auto lg:mx-0 hover:bg-[#095c5b] transition">
          Explore Our Story
          <FaArrowRightLong />
        </button>
      </div>

    </section>
  );
};

export default FilterComponent;