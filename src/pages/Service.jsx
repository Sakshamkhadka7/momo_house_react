import React from "react";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { PiChefHatLight } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
// import circle from "../assets/circle.png";
import service from "../assets/service.png";
import sakshamqr from "../assets/sakshamqr.jpeg";
import crowd from "../assets/crowd.png";

import serviceBack from "../assets/serviceBack.jpg";
import { GiPartyPopper } from "react-icons/gi";

const Service = () => {
  return (
    <div className="min-h-[570vh]">
      <div className="flex justify-around">
        <div className="mt-30">
          <h1 className="text-[#0C6967] text-5xl font-Allura">Our Services</h1>

          <div className="flex flex-col mt-20 gap-4">
            <h2 className="text-[#6B788E] text-xl">
              KNOWING OUR CUSTOMER NEED
            </h2>

            <div>
              <span className="text-[#D95103] font-bold text-3xl">
                We are more than just momos
              </span>
              <h1 className="text-2xl text-[#101828] font-bold mt-2">
                We are full-service dining experience
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8">
          <img src={service} alt="chef image" height={400} width={400} />
        </div>
      </div>

      <div className="relative w-full h-auto overflow-hidden rounded-2xl mt-40">
        <img
          src={serviceBack}
          alt="kitchen"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30">
          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white ">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2 ">Dine With Us </h1>
              <p className="text-lg opacity-90">
                Enjoy our momos in the comofort of your own momo with our
                delivery services{" "}
              </p>
            </div>

            <div
              className="flex flex-row items-center justify-center bg-[#0C6967] text-[#FFFFFF]
        rounded-[100px] pt-[1px] pr-[32px] pl-[24px] gap-[16px] w-fit min-w-[231px] h-[64px]
        "
            >
              <SiGoogledisplayandvideo360 size={24} />
              <span className="text-base font-medium whitespace-nowrap ">
                Watch the video
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-18 items-center p-20">
        <div className="flex flex-col gap-2">
          <div className="space-y-4 p-6">
            <GiPartyPopper className="text-5xl" />
            <h1 className="text-[#101828] font-bold text-3xl">Private party</h1>
            <p className="text-[#6B788E]">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Dolores porro iste ea impedit,
              <br /> perferendis iure quidem sunt. Est repellendus <br /> ab
              beatae eligendi facilis nobis magni aspernatur. <br /> Corporis
              nostrum adipisci in!
            </p>
          </div>

          <div className="shadow-xl w-90 p-6 rounded-2xl flex justify-center items-center gap-5">
            <div>
              <h1 className="text-[#0C6967] font-bold text-3xl">
                Scan the QR Code
              </h1>
              <p className="text-[#6B788E]">
                You can also check about the service
              </p>
            </div>

            <img
              className="rounded-xl"
              src={sakshamqr}
              alt="qr code"
              height={100}
              width={100}
            />
          </div>
        </div>

        <div>
          <img
            className="rounded-xl"
            src={crowd}
            alt="crowd"
            height={520}
            width={520}
          />
        </div>
      </div>

      <div className="flex justify-center gap-18 items-center p-20">
        <div>
          <img
            className="rounded-xl"
            src={crowd}
            alt="crowd"
            height={520}
            width={520}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="space-y-4 p-6">
            <PiChefHatLight className="text-5xl" />
            <h1 className="text-[#101828] font-bold text-3xl">Categring</h1>
            <p className="text-[#6B788E]">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Dolores porro iste ea impedit,
              <br /> perferendis iure quidem sunt. Est repellendus <br /> ab
              beatae eligendi facilis nobis magni aspernatur. <br /> Corporis
              nostrum adipisci in!
            </p>
          </div>

          <div className="shadow-xl w-90 p-6 rounded-2xl flex justify-center items-center gap-5">
            <div>
              <h1 className="text-[#0C6967] font-bold text-3xl">
                Scan the QR Code
              </h1>
              <p className="text-[#6B788E]">
                You can also check about the service
              </p>
            </div>

            <img
              className="rounded-xl"
              src={sakshamqr}
              alt="qr code"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 p-30">
        <h1 className="font-bold text-3xl text-[#101828]">Got Any Queries</h1>
        <p className="text-[#6B788E]">
          If you have any queries, send us a message. Our Friendly team would
          love to hear from you{" "}
        </p>

        <div className="bg-[#0C6967] px-6 py-2 text-[#FFFFFF] w-40 rounded-3xl text-center">
          Get in touch
        </div>
      </div>
    </div>
  );
};

export default Service;
