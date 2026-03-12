import React from "react";
import waiter from "../../assets/waiter.png";
import like from "../../assets/like.png";
import parti from "../../assets/parti.png";
import cate from "../../assets/cate.png";
import girls2 from "../../assets/girls2.png";

import { FaArrowLeft, FaArrowRight, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const FilterComponent3 = () => {
  return (
    <main>

      {/* HERO VIDEO SECTION */}
      <div className="mt-20 relative">
        <img src={waiter} className="w-full h-[350px] md:h-[450px] object-cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 text-center px-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Process behind the Making
          </h1>

          <p className="text-white text-sm md:text-xl">
            See how our chefs cook the best momos
          </p>

          <div className="bg-[#0C6967] px-6 py-3 flex items-center gap-3 rounded-xl text-white cursor-pointer">
            <FaPlay />
            Watch the video
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="flex flex-col items-center py-16 px-6 gap-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

          <div className="flex flex-col items-center gap-3">
            <img src={like} className="w-20" />
            <h1 className="font-bold text-xl">Quality Food</h1>
            <p className="text-gray-600">
              Only the best food with top quality products and ingredients
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={parti} className="w-20" />
            <h1 className="font-bold text-xl">Private Party</h1>
            <p className="text-gray-600">
              Get the best food for your private parties and gatherings
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={cate} className="w-20" />
            <h1 className="font-bold text-xl">Catering</h1>
            <p className="text-gray-600">
              Get the best food for any occasions and gatherings
            </p>
          </div>

        </div>

        <button className="flex items-center gap-2 bg-[#0C6967] px-8 py-3 rounded-full text-white hover:bg-[#095c5b] transition">
          Explore Our Services
          <FaArrowRightLong />
        </button>
      </section>

      {/* TESTIMONIAL */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-12">

        <div className="space-y-6 max-w-xl text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">
            200+ <span className="text-[#D95103]">Happy Customers</span>
          </h1>

          <h2 className="font-bold text-[#0C6967]">
            What our customers say about us
          </h2>

          <p className="text-gray-500 text-lg">
            “Only the best momo you can find in the market. Different
            varieties of momo to choose from. Will be visiting again soon.”
          </p>

          <h1 className="font-bold text-2xl">Livia Dias</h1>

          <div className="flex gap-3 justify-center lg:justify-start">
            <div className="bg-white border p-3 rounded-full">
              <FaArrowLeft />
            </div>

            <div className="bg-white border p-3 rounded-full">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <img src={girls2} className="w-72 md:w-96 rounded-xl" />
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 lg:px-20 py-16 flex flex-col lg:flex-row gap-10">

        {/* CONTACT INFO */}
        <div className="bg-[#0C6967] text-white rounded-2xl p-10 flex-1 space-y-8">

          <div>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <h2>Our Address</h2>
            </div>
            <p className="italic">
              New Baneshwor, Kathmandu, Bagmati, Nepal
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <h2>Our Contacts</h2>
            </div>

            <div className="flex justify-between mt-2">
              <div>
                <h3 className="font-semibold">Mobile</h3>
                <p>9805689789</p>
                <p>9805689789</p>
              </div>

              <div>
                <h3 className="font-semibold">Landline</h3>
                <p>01-4783972</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <IoMdTime />
              <h2>Service Time</h2>
            </div>

            <div className="flex justify-between">
              <div>
                <p>MON - FRI</p>
                <p>10 am - 8 pm</p>
              </div>

              <div>
                <p>SAT - SUN</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          <div>
            <p>Get in touch in social networks</p>
            <div className="flex gap-4 mt-2 text-xl">
              <FaSquareFacebook />
              <FaInstagram />
              <FaTiktok />
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="shadow-xl rounded-2xl p-8 flex-1 bg-white">

          <form className="flex flex-col gap-6">

            <div>
              <h1 className="font-bold text-2xl">
                Contact <span className="text-[#D95103]">Us</span>
              </h1>

              <p className="text-gray-500">
                If you have any queries send us a message.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="First Name" />
              <input className="border p-2 rounded" placeholder="Last Name" />
            </div>

            <input className="border p-2 rounded" placeholder="Email" />

            <select className="border p-2 rounded">
              <option>Choose</option>
              <option>Design</option>
            </select>

            <input className="border p-2 rounded" placeholder="Phone Number" />

            <textarea
              className="border p-2 rounded"
              placeholder="Message"
            ></textarea>

            <button className="bg-[#D95103] text-white py-3 rounded-full">
              Submit
            </button>

          </form>
        </div>

      </section>

      {/* MAP */}
      <section className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-[400px]"
          loading="lazy"
        ></iframe>
      </section>

    </main>
  );
};

export default FilterComponent3;