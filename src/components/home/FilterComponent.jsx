import React from "react";
import rec from "../../assets/rec.png";
import white from "../../assets/white.png";
import { FaArrowRightLong } from "react-icons/fa6";
const FilterComponent = () => {
  return (
    <section className="flex justify-around items-center p-18">
      <div className="relative mt-10">
        <div className="absolute inset-0">
          {" "}
          <img src={white} alt="white" height={200} width={200} />
        </div>
        <div className="mt-10">
          {" "}
          <img src={rec} alt="rectangle" height={200} width={200} />
        </div>
      </div>

      <div className="space-y-8">
        <h1 className="font-bold text-2xl ">
          Why Customer <span className="text-[#D95103]">Love Us</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Iusto
          sint laborum non molestias dolore! Odit fuga vitae <br /> error nemo
          dolor accusantium, similique repudiandae alias <br /> culpa ratione
          omnis ut nihil officiis!
        </p>

        <div className="bg-[#0C6967] px-10 py-5 rounded-4xl w-60  flex justify-center items-center gap-4 text-[#FFFFFF]">
        <h1>Explore Our Story</h1>
    <FaArrowRightLong />
        </div>
      </div>
    </section>
  );
};

export default FilterComponent;
