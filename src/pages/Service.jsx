import React from "react";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { PiChefHatLight } from "react-icons/pi";
import { GiPartyPopper } from "react-icons/gi";
import service from "../assets/service.png";
import sakshamqr from "../assets/sakshamqr.jpeg";
import crowd from "../assets/crowd.png";
import serviceBack from "../assets/serviceBack.jpg";

const Service = () => {
  return (
    <div className="flex flex-col gap-20">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-around items-center px-4 md:px-20 gap-10 md:gap-0 mt-10">
        <div className="text-center md:text-left">
          <h1 className="text-[#0C6967] text-4xl md:text-5xl font-Allura">
            Our Services
          </h1>

          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-[#6B788E] text-lg md:text-xl">
              KNOWING OUR CUSTOMER NEED
            </h2>

            <div>
              <span className="text-[#D95103] font-bold text-2xl md:text-3xl">
                We are more than just momos
              </span>
              <h1 className="text-xl md:text-2xl text-[#101828] font-bold mt-2">
                We are full-service dining experience
              </h1>
            </div>
          </div>
        </div>

        <div>
          <img
            src={service}
            alt="chef image"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Overlay Section */}
      <div className="relative w-full h-80 md:h-[400px] overflow-hidden rounded-2xl mx-4 md:mx-20">
        <img
          src={serviceBack}
          alt="kitchen"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4 md:px-12 text-white">
          <div className="mb-6 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Dine With Us</h1>
            <p className="text-sm md:text-lg opacity-90">
              Enjoy our momos in the comfort of your own home with our delivery services
            </p>
          </div>

          <div className="flex flex-row items-center justify-center bg-[#0C6967] text-white rounded-full px-6 md:px-8 py-2 md:py-3 gap-2 md:gap-4 cursor-pointer">
            <SiGoogledisplayandvideo360 size={20} className="md:text-2xl" />
            <span className="text-sm md:text-base font-medium whitespace-nowrap">
              Watch the video
            </span>
          </div>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4 md:px-20">
        {/* Private Party */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="flex flex-col gap-4 p-6">
            <GiPartyPopper className="text-4xl md:text-5xl" />
            <h1 className="text-[#101828] font-bold text-2xl md:text-3xl">Private Party</h1>
            <p className="text-[#6B788E] text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro iste ea impedit, perferendis iure quidem sunt. Est repellendus ab beatae eligendi facilis nobis magni aspernatur.
            </p>
          </div>

          <div className="shadow-xl p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-5">
            <div>
              <h1 className="text-[#0C6967] font-bold text-xl md:text-3xl">Scan the QR Code</h1>
              <p className="text-[#6B788E] text-sm md:text-base">You can also check about the service</p>
            </div>
            <img
              src={sakshamqr}
              alt="qr code"
              className="rounded-xl w-24 h-24 md:w-28 md:h-28 object-cover"
            />
          </div>
        </div>

        {/* Crowd Image */}
        <div>
          <img
            src={crowd}
            alt="crowd"
            className="rounded-xl w-full max-w-sm md:max-w-md object-cover"
          />
        </div>
      </div>

      {/* Catering Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4 md:px-20">
        {/* Image */}
        <div>
          <img
            src={crowd}
            alt="crowd"
            className="rounded-xl w-full max-w-sm md:max-w-md object-cover"
          />
        </div>

        {/* Catering Info */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="flex flex-col gap-4 p-6">
            <PiChefHatLight className="text-4xl md:text-5xl" />
            <h1 className="text-[#101828] font-bold text-2xl md:text-3xl">Catering</h1>
            <p className="text-[#6B788E] text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro iste ea impedit, perferendis iure quidem sunt. Est repellendus ab beatae eligendi facilis nobis magni aspernatur.
            </p>
          </div>

          <div className="shadow-xl p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-5">
            <div>
              <h1 className="text-[#0C6967] font-bold text-xl md:text-3xl">Scan the QR Code</h1>
              <p className="text-[#6B788E] text-sm md:text-base">You can also check about the service</p>
            </div>
            <img
              src={sakshamqr}
              alt="qr code"
              className="rounded-xl w-24 h-24 md:w-28 md:h-28 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Queries Section */}
      <div className="flex flex-col justify-center items-center gap-6 p-10 md:p-20 text-center">
        <h1 className="font-bold text-2xl md:text-3xl text-[#101828]">Got Any Queries</h1>
        <p className="text-[#6B788E] text-sm md:text-base">
          If you have any queries, send us a message. Our Friendly team would love to hear from you
        </p>

        <div className="bg-[#0C6967] px-6 py-2 md:px-10 md:py-3 text-white w-36 md:w-40 rounded-3xl text-center cursor-pointer">
          Get in touch
        </div>
      </div>
    </div>
  );
};

export default Service;