import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
const Contact = () => {
  return (
    <section>
      <div className="flex flex-col gap-2 justify-center items-center gap-y-10 p-20">
        <h1 className="text-[#0C6967] text-5xl font-Allura">Our Contact</h1>

        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h1 className="text-2xl text-[#6B788E]">Get In Touch</h1>

          <h1 className="font-bold text-2xl">
            <span className="text-[#D95103]">Our Friendly Team</span> would love
            to hear from you
          </h1>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="space-y-6 bg-white shadow-2xl p-10 w-80 rounded-2xl">
          <div className="flex gap-2 items-center">
            <MdOutlineLocationOn size={30} />
            <h1 className="font-semibold text-[#101828]">Location</h1>
          </div>

          <div>
            <h1 className="italic text-[#101828]">
              New Baneshwor -41201,
              <br /> Kathmandu, Bagmati, Nepal
            </h1>
          </div>
        </div>

        <div className="space-y-8 bg-white shadow-2xl p-10 w-80 rounded-2xl">
          <div className="flex gap-2 items-center">
           <FaPhoneAlt />
            <h1 className="font-semibold text-[#101828]">Phone</h1>
          </div>

          <div className="flex flex-col gap-y-3">
           
           <div className="flex justify-between items-center gap-x-8"> 
           
           <h1 className="text-[#0C6967] font-semibold">Mobile</h1>
           <h1 className="text-[#252D43] italic">(+977) 980 5689789</h1>

           </div>

            <div className="flex justify-between items-center gap-x-8"> 
           
           <h1 className="text-[#0C6967] font-semibold">Tel</h1>
           <h1 className="text-[#252D43] italic">01-4783972</h1>

           </div>
          



          </div>
        </div>

        <div className="space-y-8 bg-white shadow-2xl p-10 w-80 rounded-2xl">
          <div className="flex gap-2 items-center">
           <IoIosTime />
            <h1 className="font-semibold text-[#101828]">Service Team</h1>
          </div>

          <div className="flex flex-col gap-y-3">
           
           <div className="flex justify-between items-center gap-x-8"> 
           
           <h1 className="text-[#0C6967] font-semibold">MON - FRI</h1>
           <h1 className="text-[#252D43] italic">8 am - 8 pm</h1>

           </div>

            <div className="flex justify-between items-center gap-x-8"> 
           
           <h1 className="text-[#0C6967] font-semibold">SAT - SUN</h1>
           <h1 className="text-[#252D43] italic">Closed</h1>

           </div>
          



          </div>
        </div>
      </div>
      

      <div className="form flex justify-between items-center gap-x-8 p-20">
   
  <div className="w-300 h-200 mt-20">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.481059207599!2d85.34316500915129!3d27.67152297610383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1770371138376!5m2!1sen!2snp"
      className="w-full h-full"
    ></iframe>
  </div>

    <div className="shadow-2xl p-5 rounded-2xl">
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


      </div>



    </section>
  );
};

export default Contact;

