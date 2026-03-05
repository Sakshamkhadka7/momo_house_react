import React from "react";
import waiter from "../../assets/waiter.png";
import like from "../../assets/like.png";
import parti from "../../assets/parti.png";
import cate from "../../assets/cate.png";
import girls2 from "../../assets/girls2.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

import { FaPlay } from "react-icons/fa6";
const FilterComponent3 = () => {
  return (
    <main>
      <div className="mt-40 relative ">
        <div>
          <img src={waiter} />
        </div>

        <div className="flex flex-col gap-y-4 absolute inset-0 justify-center items-center bg-black/50">
          <h1 className="text-[#FFFFFF] text-3xl drop-shadow-lg">
            Process behind the Making
          </h1>
          <p className="text-[#FFFFFF] text-xl">
            See how only chefs cooks only the best momos
          </p>
          <div className="bg-[#0C6967] px-8 py-3 flex justify-center items-center gap-3 rounded-2xl w-60">
            <FaPlay />
            <h1 className="text-[#FFFFFF] font-bold ">Watch the video</h1>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center  p-20 gap-10">
        {/* Upper Div */}
        <div className="flex justify-around items-center gap-8 w-full">
          <div className="flex flex-col gap-3">
            <img src={like} width={100} />
            <h1 className="font-bold text-xl">Quality Food</h1>
            <p>
              Only the best food with top quality <br /> products and
              ingredients
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img src={parti} width={100} />
            <h1 className="font-bold text-xl">Private Party</h1>
            <p>
              Get the best food for all your private <br /> parties and
              gatherings
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img src={cate} width={100} />
            <h1 className="font-bold text-xl">Categring</h1>
            <p>
              Get the best food for any occasions <br /> and gatherings
            </p>
          </div>
        </div>

        {/* Button Div (Now correctly centered) */}
        <div className="flex justify-center items-center gap-2 bg-[#0C6967] w-fit rounded-3xl px-10 py-3 text-white cursor-pointer mt-5">
          <h1>Explore Our Services</h1>

          <FaArrowRightLong />
        </div>
      </section>

      <section className="flex justify-around">
        <div className="space-y-10 p-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              200+ <span className="text-[#D95103]"> Happy Customers</span>
            </h1>
            <h1 className="font-bold text-[#0C6967] text-md">
              What Our customers say about us
            </h1>
          </div>

          <p className="text-[#6B788E] text-xl">
            “Only the best momo you can find in the market. <br /> Different
            Varieties of momo to choose from. Will <br /> be visiting again
            soon”
          </p>

          <h1 className="font-bold text-3xl">Livia Dias</h1>

          <div className="flex gap-2 ">
            <div className="bg-white rounded-4xl p-3 border-1">
              <FaArrowLeft />
            </div>
            <div className="bg-white rounded-4xl p-3 border-1">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div>
          <img src={girls2} height={300} width={300} />
        </div>
      </section>

      <section className="p-4  mt-20 flex items-center justify-around shadow-2xl">
        <div className="bg-[#0C6967] rounded-2xl w-[100vh] p-20 space-y-5 shadow-2xl">
          <div className="1 space-y-4">
            <div className="flex gap-2 items-center">
              <FaLocationDot className="text-[#FFFFFF]" />
              <h2 className="text-[#FFFFFF]">Our Address</h2>
            </div>
            <h1 className="italic text-[#FFFFFF]">
              New Baneshwor, Kathmandu, Bagmati, Nepal
            </h1>
          </div>

          <div className="2 space-y-5">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="text-[#FFFFFF]" />
              <h1 className="text-[#FFFFFF]">Our Contacts</h1>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-y-1">
                <h1 className="font-semibold text-[#FFFFFF]">Mobile</h1>
                <h1 className="text-[#FFFFFF]">980 5689789</h1>
                <h1 className="text-[#FFFFFF]">980 5689789</h1>
              </div>

              <div className="flex flex-col gap-y-1">
                <h1 className="font-semibold text-[#FFFFFF]">Landline</h1>
                <h1 className="text-[#FFFFFF]">01-4783972</h1>
              </div>
            </div>
          </div>

          <div className="3 flex flex-col gap-y-2">
            <div className="flex items-center gap-2">
              <IoMdTime className="text-[#FFFFFF]" />
              <h1 className="text-[#FFFFFF]">Our Service Time</h1>
            </div>

            <div className="flex justify-between">
              <div>
                <h1 className="text-[#FFFFFF]">MON - FRI</h1>
                <h1 className="text-[#FFFFFF]">10 am - 8 pm</h1>
              </div>
              <div>
                <h1 className="text-[#FFFFFF]">SAT - SUN</h1>
                <h1 className="text-[#FFFFFF]">Closed</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 text-[#FFFFFF] mt-20">
            <h1>Get in touch in social networks</h1>
            <div className="flex gap-2">
              <div>
                <FaSquareFacebook />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-2xl p-10 rounded-2xl">
          <form action="" className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
            <h1 className="font-bold text-2xl">Contact <span className="text-[#D95103]">Us</span></h1>
            <p className="text-[#6B788E]">If you have any queries, send us a message. Our Friendly team would <br /> love to hear from you</p>
           </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="">First Name</label>
                <input type="text" className="outline rounded-sm" />
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="">Last Name</label>
                <input type="text" className="outline rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Email</label>
              <input type="email" className="outline rounded-sm" />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="">What can we do for you</label>
              <select name="" id="">
                <option value="">Choose</option>
                <option value="">Choose</option>
                <option value="">Design</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Phone Number</label>
              <input type="number" className="outline rounded-sm" />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Messages</label>
              <input type="text" className="outline rounded-sm" />
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#D95103] px-25 py-2 text-[#FFFFFF] rounded-3xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div className="mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.481059207599!2d85.34316500915129!3d27.67152297610383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1770371138376!5m2!1sen!2snp"
            // width="1200"
            className="w-full"
            height="450"
            // style="border:0;"
            // allowfullscreen=""
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default FilterComponent3;
