import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

const Contact = () => {
  return (
    <section className="px-6 lg:px-20 py-16 space-y-16">

      {/* HEADER */}
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-[#0C6967] text-4xl md:text-5xl font-Allura">
          Our Contact
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl text-[#6B788E]">Get In Touch</h2>

          <h1 className="font-bold text-2xl">
            <span className="text-[#D95103]">Our Friendly Team</span> would love
            to hear from you
          </h1>
        </div>
      </div>

      {/* CONTACT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* LOCATION */}
        <div className="bg-white shadow-xl p-8 rounded-2xl space-y-4">
          <div className="flex gap-2 items-center">
            <MdOutlineLocationOn size={28} />
            <h1 className="font-semibold">Location</h1>
          </div>

          <p className="italic text-gray-700">
            New Baneshwor - 41201,
            <br /> Kathmandu, Bagmati, Nepal
          </p>
        </div>

        {/* PHONE */}
        <div className="bg-white shadow-xl p-8 rounded-2xl space-y-6">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            <h1 className="font-semibold">Phone</h1>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <h1 className="text-[#0C6967] font-semibold">Mobile</h1>
              <p className="italic">(+977) 980 5689789</p>
            </div>

            <div className="flex justify-between">
              <h1 className="text-[#0C6967] font-semibold">Tel</h1>
              <p className="italic">01-4783972</p>
            </div>
          </div>
        </div>

        {/* SERVICE TIME */}
        <div className="bg-white shadow-xl p-8 rounded-2xl space-y-6">
          <div className="flex gap-2 items-center">
            <IoIosTime />
            <h1 className="font-semibold">Service Time</h1>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <h1 className="text-[#0C6967] font-semibold">MON - FRI</h1>
              <p className="italic">8 am - 8 pm</p>
            </div>

            <div className="flex justify-between">
              <h1 className="text-[#0C6967] font-semibold">SAT - SUN</h1>
              <p className="italic">Closed</p>
            </div>
          </div>
        </div>

      </div>

      {/* MAP + FORM */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* MAP */}
        <div className="flex-1 h-[400px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.481059207599!2d85.34316500915129!3d27.67152297610383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1770371138376!5m2!1sen!2snp"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>

        {/* FORM */}
        <div className="flex-1 shadow-xl rounded-2xl p-8 bg-white">

          <form className="flex flex-col gap-6">

            <div>
              <h1 className="font-bold text-2xl">
                Contact <span className="text-[#D95103]">Us</span>
              </h1>

              <p className="text-[#6B788E] text-sm">
                If you have any queries, send us a message. Our friendly team
                would love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
            />

            <select className="border p-2 rounded">
              <option>Choose</option>
              <option>Design</option>
            </select>

            <input
              type="number"
              placeholder="Phone Number"
              className="border p-2 rounded"
            />

            <textarea
              placeholder="Message"
              className="border p-2 rounded"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="bg-[#D95103] text-white py-3 rounded-full"
            >
              Submit
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;