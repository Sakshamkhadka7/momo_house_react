import React from "react";
import chef from "../assets/chef.png";
import kitchen from "../assets/kitchen.jpg";
import serve from "../assets/serve.png";
import girls from "../assets/girls.png";
import madam from "../assets/madam.png";
import background from "../assets/background.jpg";
import head from "../assets/head.png";
import assistant from "../assets/assistant.png";
import assistant2 from "../assets/assistant2.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const About = () => {
  return (
    <div className="min-h-screen px-4 md:px-20 py-10 space-y-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
        <div className="text-center md:text-left">
          <h1 className="text-[#0C6967] text-4xl md:text-5xl font-Allura">
            About Us
          </h1>
          <div className="flex flex-col mt-6 md:mt-12 gap-3">
            <h2 className="text-[#6B788E] text-lg md:text-xl">
              We Pride OURSELF ON
            </h2>
            <div>
              <span className="text-[#D95103] font-bold text-2xl md:text-3xl">
                Our Authentic momo recipes
              </span>
              <h1 className="text-2xl md:text-2xl text-[#101828] font-bold mt-2">
                passed down through <br /> generations
              </h1>
            </div>
          </div>
        </div>
        <div>
          <img
            src={chef}
            alt="chef"
            className="w-52 md:w-72 rounded-xl"
          />
        </div>
      </div>

      {/* Kitchen Video Section */}
      <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
        <img
          src={kitchen}
          alt="kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Process Behind Making
          </h1>
          <p className="text-lg md:text-xl opacity-90 text-center max-w-2xl">
            See how we make momos that you love using only the best ingredients
          </p>
          <button className="mt-6 flex items-center gap-3 bg-[#0C6967] rounded-full px-6 py-3 hover:opacity-90">
            <SiGoogledisplayandvideo360 size={24} />
            <span className="font-medium text-base">Watch the video</span>
          </button>
        </div>
      </div>

      {/* Info Sections */}
      <div className="space-y-20">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold">
              Our Momos are{" "}
              <span className="text-[#D95103]">made with love</span>
            </h1>
            <p className="mt-3 text-[#6B788E] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit fuga amet repellendus non blanditiis ea esse nemo? Pariatur, suscipit inventore nostrum beatae quasi ducimus explicabo quo assumenda ex.
            </p>
          </div>
          <img src={serve} alt="serve" className="w-full md:w-96 rounded-xl" />
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold">
              Taste the difference with{" "}
              <span className="text-[#D95103]">our handcrafted momos</span>
            </h1>
            <p className="mt-3 text-[#6B788E] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit fuga amet repellendus non blanditiis ea esse nemo? Pariatur, suscipit inventore nostrum beatae quasi ducimus explicabo quo assumenda ex.
            </p>
          </div>
          <img src={girls} alt="girls" className="w-full md:w-96 rounded-xl" />
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold">
              Our Momos are the perfect{" "}
              <span className="text-[#D95103]">Blend of traditions</span> and{" "}
              <span className="text-[#D95103]">innovation</span>
            </h1>
            <p className="mt-3 text-[#6B788E] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit fuga amet repellendus non blanditiis ea esse nemo? Pariatur, suscipit inventore nostrum beatae quasi ducimus explicabo quo assumenda ex.
            </p>
          </div>
          <img src={girls} alt="girls" className="w-full md:w-96 rounded-xl" />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative mt-20">
        <img src={background} alt="background" className="w-full rounded-xl" />
        <div className="absolute inset-0 bg-black/80 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 text-white gap-10">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-6xl md:text-8xl">"</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momos, great company, and unforgettable experiences.
            </p>
            <h1 className="font-bold text-2xl md:text-3xl">Marcus Schleifer</h1>
            <h2 className="font-semibold text-lg md:text-xl">CEO</h2>
            <div className="flex gap-4 mt-6">
              <button className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-black transition">
                <FaArrowLeft />
              </button>
              <button className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-black transition">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <img src={madam} alt="madam" className="w-72 md:w-96 rounded-2xl" />
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col justify-center items-center gap-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Meet The <span className="text-[#D95103]">Team</span>
        </h1>
        <p className="text-[#0C6967] text-center font-bold">
          Our talented team members who deliver only the best results
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
          <img src={head} alt="head chief" className="w-60 md:w-72 rounded-xl" />
          <img src={assistant} alt="assistant" className="w-60 md:w-72 rounded-xl" />
          <img src={assistant2} alt="assistant2" className="w-60 md:w-72 rounded-xl" />
        </div>

        <div className="flex justify-between items-center w-full max-w-3xl mt-6 px-4 md:px-0">
          <h1>01/ <span>05</span></h1>
          <div className="flex gap-4">
            <button className="border-2 border-gray-300 rounded-full p-3 hover:bg-gray-100 transition">
              <FaArrowLeft />
            </button>
            <button className="border-2 border-gray-300 rounded-full p-3 hover:bg-gray-100 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;